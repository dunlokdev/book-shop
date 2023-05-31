import { Button, Divider, Form, Input } from "antd";
import classes from "./register.module.css";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Register = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <h3 className={classes.title}>Đăng ký</h3>
        <p className={classes.desc}>Nhanh chóng và dễ dàng</p>
        <Divider />
        <Form
          name="basic"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 17 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
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
            <Input placeholder="example@gmail.com" />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
          >
            <Input.Password placeholder="@testmatkhau123" />
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

          <Form.Item wrapperCol={{ offset: 9, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Đăng ký
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Register;
