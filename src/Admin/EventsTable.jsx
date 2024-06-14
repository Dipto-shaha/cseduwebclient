import { Table, Button, Space, Input } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import useGetAllEvents from "../hook/Events/useGetAllEvents";

const { Search } = Input;

const EventsTable = () => {
  const [data, setEventsList] = useGetAllEvents(); 
  const [searchText, setSearchText] = useState("");

  const handleSearch = (value) => {
    setSearchText(value);
  };
  const handleDelete = (id) => {
    setEventsList(data.filter((item) => item.id !== id));
  };

  const handleUpdate = (id) => {
    console.log("Update item with id:", id);
  };

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Date and Time",
      dataIndex: "date_and_time",
      key: "date_and_time",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Event Title",
      dataIndex: "event_title",
      key: "event_title",
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
          record[column.dataIndex]
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
          placeholder="Search"
          allowClear
          enterButton
          onSearch={handleSearch}
          style={{ marginBottom: 16 }}
          className="w-1/2"
        />
        <Button>
          <Link to="/dashboard/addevents">Add Events</Link>
        </Button>
      </div>
      <Table columns={columns} dataSource={filteredData} />
    </div>
  );
};

export default EventsTable;
