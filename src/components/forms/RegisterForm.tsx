import React from "react";
import { Form, Button, Card, Typography, Select } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withFormik, FormikProps } from "formik";
import * as Yup from "yup";

import { ApplicationState } from "../../store";
import { createUserBOF } from "../../store/backoffice-users/actions";
import {
  IBackofficeUser,
  IErrorField
} from "../../store/backoffice-users/types";

import { InputWithValidate, SelectWithValidate } from "../inputs";

const { Title } = Typography;

interface IPropsFromState {
  backofficeUser: IBackofficeUser;
  errorFields: IErrorField[];
}

interface IPropsFromDispatch {
  createBackofficeUser: typeof createUserBOF;
}

type AllProps = IPropsFromState &
  IPropsFromDispatch &
  FormikProps<IBackofficeUser>;

const RegisterForm: React.FC<AllProps> = props => {
  const { values, setFieldValue, errors, handleSubmit } = props;
  return (
    <div className="login-container">
      <Card className="card-login">
        <Form
          className="login-form"
          onFinish={() => {
            handleSubmit();
          }}
        >
          <Title level={3}>Register form</Title>
          <Form.Item
            validateStatus={errors.username ? "error" : ""}
            help={errors.username}
            hasFeedback
          >
            <InputWithValidate
              prefix={<UserOutlined className="site-form-item-icon" />}
              name="username"
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            validateStatus={errors.password ? "error" : ""}
            help={errors.password}
            hasFeedback
          >
            <InputWithValidate
              prefix={<UserOutlined className="site-form-item-icon" />}
              type="password"
              name="password"
              placeholder="password"
            />
          </Form.Item>
          <Form.Item
            validateStatus={errors.confirm_password ? "error" : ""}
            help={errors.confirm_password}
            hasFeedback
          >
            <InputWithValidate
              prefix={<UserOutlined className="site-form-item-icon" />}
              name="confirm_password"
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Item>
          <Form.Item
            validateStatus={errors.email ? "error" : ""}
            help={errors.email}
            hasFeedback
          >
            <InputWithValidate
              prefix={<UserOutlined className="site-form-item-icon" />}
              name="email"
              type="email"
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            validateStatus={errors.name ? "error" : ""}
            help={errors.name}
            hasFeedback
          >
            <InputWithValidate
              prefix={<UserOutlined className="site-form-item-icon" />}
              name="name"
              placeholder="Name"
            />
          </Form.Item>
          <Form.Item
            validateStatus={errors.lastname ? "error" : ""}
            help={errors.lastname}
            hasFeedback
          >
            <InputWithValidate
              prefix={<UserOutlined className="site-form-item-icon" />}
              name="lastname"
              placeholder="Lastname"
            />
          </Form.Item>
          <Form.Item
            validateStatus={errors.role ? "error" : ""}
            help={errors.role}
            hasFeedback
          >
            <SelectWithValidate
              name="role"
              placeholder="Select Role"
              value={values.role}
              onChange={value => setFieldValue("role", value)}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              block
              // onClick={_ =>
              //   props.createBackofficeUser({
              //     username: "",
              //     password: "",
              //     confirm_password: "",
              //     email: "",
              //     name: "",
              //     lastname: "",
              //     role: ""
              //   })
              // }
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
  backofficeUser: backofficeUsers.info,
  errorFields: backofficeUsers.errorFields
});

const mapDispatchProps = {
  createBackofficeUser: createUserBOF
};

const MyForm = withFormik<AllProps, IBackofficeUser>({
  mapPropsToValues: () => {
    return {
      username: "",
      password: "",
      confirm_password: "",
      email: "",
      name: "",
      lastname: "",
      role: ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password not match.")
      .required("Password confirm is required"),
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    name: Yup.string().required("Name is required"),
    lastname: Yup.string().required("Lastname is required"),
    role: Yup.string().required("Role is required")
  }),
  handleSubmit: (values: IBackofficeUser) => {
    console.log("submit");
  }
})(RegisterForm);

export default connect(mapStateToProps, mapDispatchProps)(MyForm);
