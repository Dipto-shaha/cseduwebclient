import { Form, Input, Button, Select, Card, Spin } from 'antd';
import useGetAllTeachers from '../hook/user/useGetAllTeacher';

const { Option } = Select;

const publicationTypes = [
  { value: 'journal', label: 'Journal' },
  { value: 'conference', label: 'Conference' },
  { value: 'workshop', label: 'Workshop' },
  { value: 'book', label: 'Book' }
];

const PublicationForm = () => {
  const [authors, ,loading] = useGetAllTeachers();

 

  const onFinish = (values) => {
    console.log('Success:', values);
    // Handle form submission here
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center my-4 py-2 rounded-lg bg-gray-100">
      <Card className="w-full max-w-md rounded-lg shadow-lg">
        <Form
          name="publicationForm"
          initialValues={{
            publication_type: '',
            paper_name: '',
            authors: [],
            other_authors: '',
            publication_year: ''
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
        >
          <Form.Item
            label="Publication Type"
            name="publication_type"
            rules={[{ required: true, message: 'Please select a publication type!' }]}
          >
            <Select placeholder="Select a publication type">
              {publicationTypes.map(type => (
                <Option key={type.value} value={type.value}>{type.label}</Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Publication Name"
            name="paper_name"
            rules={[{ required: true, message: 'Please input the Publication name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Authors"
            name="authors"
            rules={[{ required: true, message: 'Please select authors!' }]}
          >
            <Select
              mode="multiple"
              placeholder="Select authors"
            >
              {authors.map(author => (
                <Option key={author.id} value={author.user.first_name +" "+author.user.last_name}>{author.user.first_name +" "+author.user.last_name}</Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Other Authors"
            name="other_authors"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Publication Year"
            name="publication_year"
            rules={[{ required: true, message: 'Please input the publication year!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item className="text-center pt-8">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default PublicationForm;
