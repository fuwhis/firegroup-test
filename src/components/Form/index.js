import React from 'react';
import { Form, Input, Button, Select } from 'antd';

const { Option } = Select;
// const { fs, path } = require('filer');

function UserInfoForm() {
  const [form] = Form.useForm();

  const handleSubmit = (values, e) => {
    // e.preventDefault();
    // console.log('Values received:', values);
    const user = values;
    // local storage data
    localStorage.setItem('data', user);
    // download a file form submit
    const fileData = JSON.stringify(user);
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = `data.json`;
    link.href = url;
    link.click();
  }

  const handleClearForm = (e) => {
    e.preventDefault();
    console.log('clear button catch');
    form.resetFields();
    form.setFields('');
  }

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select defaultValue={{ value: '84' }} style={{ width: 70 }}>
        <Option value="84">+84</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Form
      name="basic"
      labelCol={{ span: 8, }}
      wrapperCol={{ span: 16, }}
      initialValues={{ remember: true, }}
      onFinish={handleSubmit}
      autoComplete="off"
      form={form}
    >
      {/* First-name field */}
      <Form.Item
        label="First name"
        name="first-name"
        rules={[{ required: true, message: 'Please input your first name!', },]}
      >
        <Input />
      </Form.Item>
      {/* Last-name field */}
      <Form.Item
        label="Last name"
        name="last-name"
        rules={[{ required: true, message: 'Please input your last name!', },]}
      >
        <Input />
      </Form.Item>
      {/* Email File */}
      <Form.Item
        label="Email"
        name="email"
        rules={[{ type: 'email', required: true, message: 'Please input your email!', },]}
      >
        <Input />
      </Form.Item>

      {/* Phone number field */}
      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={handleSubmit} style={{ margin: '0 10% 0 0' }}>
          Submit
        </Button>
        <Button htmlType="button" onClick={handleClearForm}>
          Clear
        </Button>
      </Form.Item>
    </Form>
  );
}

export default UserInfoForm;