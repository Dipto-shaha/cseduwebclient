import { Table, Button, Space, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { useState } from "react";
import { Link } from "react-router-dom";
import useGetAllEvents from "../hook/Events/useGetAllEvents";

const { Search } = Input;

const EventsTable = () => {
  const [data, setEventsList] = useGetAllEvents(); // Assuming you have this hook
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");

  const handleSearch = (value) => {
    setSearchText(value);
    setSearchedColumn("");
  };
  const handleDelete = (id) => {
    setEventsList(data.filter((item) => item.id !== id));
  };

  const handleUpdate = (id) => {
    console.log("Update item with id:", id);
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            setSearchText(node?.value || ""); // Set initial value of search input
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys[0], confirm)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys[0], confirm)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      ...getColumnSearchProps("date"),
    },
    {
      title: "Date and Time",
      dataIndex: "date_and_time",
      key: "date_and_time",
      ...getColumnSearchProps("date_and_time"),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      ...getColumnSearchProps("description"),
    },
    {
      title: "Event Title",
      dataIndex: "event_title",
      key: "event_title",
      ...getColumnSearchProps("event_title"),
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
