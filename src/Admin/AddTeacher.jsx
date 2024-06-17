import { useState } from "react";
import { Form, Input, Button, Upload, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "tailwindcss/tailwind.css";
import { useParams } from "react-router-dom";

const { Option } = Select;

const AddTeacher = () => {
  const [form] = Form.useForm();
  const [photo, setPhoto] = useState(null);
  const {id} = useParams();
  console.log(id);
  const handleFinish = (values) => {
    const teacherInfo = {
        
    }
    console.log("Form values:", values);
    console.log("Photo:", photo);
  };

  const handlePhotoChange = (info) => {
    if (info.file.status === "done") {
      setPhoto(info.file.originFileObj);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-5 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-5 text-center">User Information Form</h2>
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item
          name="about"
          label="About"
          initialValue="Doing Nothing!"
          rules={[{ required: true, message: "Please enter about" }]}
        >
          <Input.TextArea placeholder="Tell us about yourself" />
        </Form.Item>

        <Form.Item
          name="designation"
          label="Designation"
          rules={[{ required: true, message: "Please select your designation" }]}
        >
          <Select placeholder="Select your designation">
            <Option value="PROFESSOR & CHAIRMAN">PROFESSOR & CHAIRMAN</Option>
            <Option value="PROFESSOR">PROFESSOR</Option>
            <Option value="ASSOCIATE PROFESSOR">ASSOCIATE PROFESSOR</Option>
            <Option value="ASSISTANT PROFESSOR">ASSISTANT PROFESSOR</Option>
            <Option value="LECTURER">LECTURER</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="current_status"
          label="Current Status"
          rules={[{ required: true, message: "Please select your current status" }]}
        >
          <Select placeholder="Select your current status">
            <Option value="LEAVE">LEAVE</Option>
            <Option value="STUDY LEAVE">STUDY LEAVE</Option>
            <Option value="ONJOB">ONJOB</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="photo"
          label="Photo"
          rules={[{ required: true, message: "Please upload your photo" }]}
        >
          <Upload beforeUpload={() => false} onChange={handlePhotoChange} maxCount={1}>
            <Button icon={<UploadOutlined />}>Upload Photo</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddTeacher;
