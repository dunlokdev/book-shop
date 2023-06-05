import { Button, Divider, Form, Input, message, notification } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authApi from "../../api/auth";
import classes from "./register.module.css";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onFinish = async (values) => {
    const { fullName, email, password, phone } = values;
    try {
      setIsLoading(true);
      const response = await authApi.register(fullName, email, password, phone);
      if (response?.data?._id) {
        message.success("Đăng ký tài khoản thành công!");
        navigate("/login");
      } else {
        notification.error({
          message: "Có lỗi xảy ra",
          description: Array.isArray(response.message)
            ? response.message[0]
            : response.message,
          duration: 4,
        });
      }
    } catch (error) {
      console.log(`Đã xảy ra lỗi, vui lòng kiểm tra lại Dev, `, error);
    }
    setIsLoading(false);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <h3 className={classes.title}>Đăng ký</h3>
        <p className={classes.desc}>Nhanh chóng và dễ dàng</p>
        <Divider />
        <Form
          name="basic"
          layout="vertical"
          style={{ minWidth: 400, width: 400 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="on"
        >
          <Form.Item
            label="Họ và tên"
            name="fullName"
            rules={[{ required: true, message: "Vui lòng nhập họ tên!" }]}
          >
            <Input placeholder="Lê Thị Phương Nga" />
          </Form.Item>

          <Form.Item
            label="Gmail"
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email!" },
              {
                required: false,
                type: "email",
                message: "Định dạng email không hợp lệ!",
              },
            ]}
          >
            <Input
              placeholder="example@gmail.com"
              autoComplete="new-password"
            />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
          >
            <Input.Password
              placeholder="@testmatkhau123"
              autoComplete="new-password"
            />
          </Form.Item>

          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              { required: true, message: "Vui lòng nhập số điện thoại!" },
            ]}
          >
            <Input placeholder="091 115 8687" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: "100%" }}
              loading={isLoading ? true : false}
            >
              Đăng ký
            </Button>
          </Form.Item>
          <Divider>
            <Link
              to="/login"
              className={classes.login}
              style={{ fontSize: 14 }}
            >
              Bạn đã có tài khoản, đăng nhập tại đây
            </Link>
          </Divider>
        </Form>
      </div>
    </div>
  );
};
export default Register;
