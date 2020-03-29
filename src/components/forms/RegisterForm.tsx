import React from "react";
import { Form, Input, Button, Card, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { ApplicationState } from "../../store";
import { createUserBOF } from "../../store/backoffice-users/actions";
import { IBackofficeUser } from "../../store/backoffice-users/types";

const { Title } = Typography;

interface IPropsFromState {
  backofficeUser: IBackofficeUser;
}

interface IPropsFromDispatch {
  createBackofficeUser: typeof createUserBOF;
}

type AllProps = IPropsFromState & IPropsFromDispatch;

const RegisterForm: React.FC<AllProps> = props => {
  return (
    <div className="login-container">
      <Card className="card-login">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Title level={3}>Register form</Title>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
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
              className="login-form-button"
              block
              onClick={_ =>
                props.createBackofficeUser({
                  username: "",
                  password: "",
                  confirm_password: "",
                  email: "",
                  name: "",
                  lastname: "",
                  role: ""
                })
              }
            >
              Register
            </Button>
            <Link to="/login">
              <Button htmlType="submit" className="login-form-button" block>
                Log in
              </Button>
            </Link>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

const mapStateToProps = ({ backofficeUsers }: ApplicationState) => ({
  backofficeUser: backofficeUsers.info
});

const mapDispatchProps = {
  createBackofficeUser: createUserBOF
};

export default connect(mapStateToProps, mapDispatchProps)(RegisterForm);
