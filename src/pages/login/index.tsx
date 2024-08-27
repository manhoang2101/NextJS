import React from 'react';
import { Form, Input, Button } from 'antd';
import { Formik } from 'formik';
import * as Yup from 'yup';

import PublicLayout from '@/components/layout/public-layout/PublicLayout';

import { LoginStyled } from './styled';

const LoginPage: React.FC = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email không hợp lệ')
      .required('Email là bắt buộc'),
    password: Yup.string()
      .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
      .required('Mật khẩu là bắt buộc'),
  });

  const handleSubmit = (values: any) => {
    console.log('Đăng nhập với:', values);
  };
  return (
    <PublicLayout>
      <LoginStyled>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, handleChange, values, errors, touched }) => (
            <Form
              onFinish={handleSubmit}
              className="bg-white p-6 rounded shadow-md w-96"
            >
              <h2 className="text-2xl mb-4 text-center">Đăng Nhập</h2>
              <Form.Item
                label="Email"
                validateStatus={touched.email && errors.email ? 'error' : ''}
                help={touched.email && errors.email ? errors.email : ''}
              >
                <Input
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  placeholder="Nhập email"
                />
              </Form.Item>
              <Form.Item
                label="Mật khẩu"
                validateStatus={
                  touched.password && errors.password ? 'error' : ''
                }
                help={
                  touched.password && errors.password ? errors.password : ''
                }
              >
                <Input.Password
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  placeholder="Nhập mật khẩu"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="w-full">
                  Đăng Nhập
                </Button>
              </Form.Item>
            </Form>
          )}
        </Formik>
      </LoginStyled>
    </PublicLayout>
  );
};

export default LoginPage;
