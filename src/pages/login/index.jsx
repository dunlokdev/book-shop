import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Divider, Form, Input } from "antd";
import classes from "./login.module.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <h3 className={classes.title}>Xin chào, ..</h3>
        <Form
          name="normal_login"
          className={classes.loginForm}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
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
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className={classes.button}>
              Đăng nhập
            </Button>
            <Divider orientation="center" plain>
              {" "}
              Or{" "}
            </Divider>
            <Link to="/register" className={classes.center}>
              Đăng ký ngay!
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default LoginPage;
