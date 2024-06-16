import { Table, Button, Space, Input } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import useGetAllUsers from "../hook/user/useGetAllUsers";

const { Search } = Input;

const UsersTable = () => {
  const [data, setUserList] = useGetAllUsers();
  const [searchText, setSearchText] = useState("");

  const handleSearch = (value) => {
    setSearchText(value);
  };


  const handleDelete = (id) => {
    setUserList(data.filter((item) => item.id !== id));
  };

  const handleUpdate = (id) => {
    console.log("Update item with id:", id);
  };

  const columns = [
    {
        title: "Name",
        key: "name",
        render: (text, record) => `${record.first_name} ${record.last_name}`,
    },
    {
        title: "Email",
        dataIndex: "email",
        key: "eamil",
    },
    {
      title: "role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button onClick={() => handleUpdate(record?.id)}>Update</Button>
          <Button danger onClick={() => handleDelete(record?.id)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const filteredData = searchText
  ? data.filter((record) =>
      columns.some((column) =>
        (column.dataIndex ? record[column.dataIndex] : `${record.first_name} ${record.last_name}`)
          ?.toString()
          .toLowerCase()
          .includes(searchText.toLowerCase())
      )
    )
  : data;

  return (
    <div>
      <div className="flex justify-between items-center">
        <Search
          placeholder="Search Title"
          allowClear
          enterButton
          onSearch={handleSearch}
          style={{ marginBottom: 16 }}
          className="w-1/2"
        />
      </div>
      <Table columns={columns} dataSource={filteredData} />
    </div>
  );
};

export default UsersTable;
