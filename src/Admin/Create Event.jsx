import { useState } from "react";
import { Form, Input, Button, Upload, message, DatePicker, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const CreateEventForm = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [previewImage, setPreviewImage] = useState("");
  const [previewVisible, setPreviewVisible] = useState(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
  };
  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };


  const handleCancel = () => setPreviewVisible(false);
  const handleSubmit = (values) => {
    if (fileList.length === 0) {
      message.error("Please upload an image.");
      return;
    }

    const newEvent = {
      key: Date.now(), // Unique key for each event
      ...values,
      image: fileList[0].originFileObj,
      date: values.date.format("YYYY-MM-DD"),
    };

    console.log(newEvent);
    form.resetFields();
    setFileList([]);
    message.success("Event created successfully!");
  };

  const handleFileChange = ({ fileList }) => {
    setFileList(fileList);
    if (fileList.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(fileList[0].originFileObj);
    }
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <div className="max-w-xl w-full p-6 m-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Create New Event
        </h2>
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: "Please input the title!" }]}
          >
            <Input placeholder="Event Title" />
          </Form.Item>

          <Form.Item
            name="date"
            label="Date"
            rules={[{ required: true, message: "Please select the date!" }]}
          >
            <DatePicker className="w-full" placeholder="Select Date" />
          </Form.Item>

          <Form.Item
            name="description"
            label="Description"
            rules={[
              { required: true, message: "Please input the description!" },
            ]}
          >
            <TextArea
              rows={4}
              placeholder="Write down the Event Description Here"
            />
          </Form.Item>

          <Form.Item
            name="venue"
            label="Venue"
            rules={[{ required: true, message: "Please input the venue!" }]}
          >
            <Input placeholder="Choose a Venue for the event" />
          </Form.Item>

          <Form.Item
            name="dayAndTime"
            label="Day and Time"
            rules={[
              { required: true, message: "Please input the day and time!" },
            ]}
          >
            <Input placeholder="Write Down the Day and the timing of the events to be commenced from" />
          </Form.Item>

          <Form.Item
            name="image"
            label="Photo"
            rules={[{ required: true, message: "Please upload an image!" }]}
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

          <Form.Item className="flex justify-between">
            <Button type="default" onClick={() => form.resetFields()}>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
          <Modal
            open={previewVisible}
            title="Image Preview"
            footer={null}
            onCancel={handleCancel}
          >
            <img alt="preview" style={{ width: "100%" }} src={previewImage} />
          </Modal>
        </Form>
      </div>
    </div>
  );
};

export default CreateEventForm;
