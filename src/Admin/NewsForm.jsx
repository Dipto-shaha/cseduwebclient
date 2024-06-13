import React, { useState } from 'react';
import { Form, Input, Button, Upload, message, Modal } from 'antd';
import { UploadOutlined, PlusOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const NewsForm = ({ onCreate }) => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');

  const handleSubmit = (values) => {
    if (fileList.length === 0) {
      message.error('Please upload an image.');
      return;
    }

    const newNews = {
      key: Date.now(), // Unique key for each news item
      title: values.title,
      description: values.description,
      image: fileList[0].originFileObj,
      date: new Date().toISOString().split('T')[0], // Current date
    };

    onCreate(newNews);
    form.resetFields();
    setFileList([]);
    message.success('News created successfully!');
  };

  const handleFileChange = ({ fileList }) => setFileList(fileList);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
  };

  const handleCancel = () => setPreviewVisible(false);

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Form.Item
        name="title"
        label="Title"
        rules={[{ required: true, message: 'Please input the title!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="description"
        label="Description"
        rules={[{ required: true, message: 'Please input the description!' }]}
      >
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item
        name="image"
        label="Image"
        rules={[{ required: true, message: 'Please upload an image!' }]}
      >
        <Upload
          listType="picture-card"
          fileList={fileList}
          beforeUpload={() => false}
          onChange={handleFileChange}
          onPreview={handlePreview}
        >
          {fileList.length >= 1 ? null : (
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          )}
        </Upload>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create News
        </Button>
      </Form.Item>

      <Modal
        open={previewVisible}
        title="Image Preview"
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="preview" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </Form>
  );
};

export default NewsForm;