import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Divider, Form, Input, message, notification } from "antd";
import { Link, useNavigate } from "react-router-dom";
import classes from "./login.module.css";
import { useState } from "react";
import authApi from "../../api/auth";
import { useDispatch } from "react-redux";
import { doLoginAction } from "../../redux/account/accountSlice";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const onFinish = async (values) => {
    const { username, password } = values;
    try {
      setIsLoading(true);
      const response = await authApi.login(username, password);

      if (response?.data && response?.statusCode === 201) {
        console.log(response);
        localStorage.setItem("access_token", response.data.access_token);
        dispatch(doLoginAction(response.data.user));
        message.success("Đăng ký tài khoản thành công!");
        navigate("/");
      } else {
        notification.error({
          message: "Có lỗi xảy ra",
          description: "Thông tin đăng nhập chính xác, vui lòng kiểm tra lại",
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
        <h3 className={classes.title}>Đăng nhập</h3>
        <Form
          name="normal_login"
          style={{ maxWidth: 280, width: 280 }}
          className={classes.loginForm}
          initialValues={{
            remember: true,
          }}
          autoComplete="true"
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email or username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={classes.button}
              loading={isLoading}
            >
              Đăng nhập
            </Button>
            <Divider orientation="center" plain>
              {" "}
              Or{" "}
            </Divider>
            Chưa có tài khoản,
            <Link to="/register"> đăng ký ngay!</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default LoginPage;
