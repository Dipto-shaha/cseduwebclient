import { Table, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import useGetAllNews from '../hook/useGetAllNews';
import { useState } from 'react';


const NewsTable = () => {
  const [data,setNewsList] = useGetAllNews();
  //console.log("all data is ", data)
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  let searchInput = null;

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <input
          ref={(node) => {
            searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const handleDelete = (id) => {
    setNewsList(data.filter((item) => item.id !== id));
    console.log("I am here" , id,data,data.filter((item) => item.id !== id))
  };

  const handleUpdate = (id) => {
    console.log('Update item with id:', id);
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'news_title',
      key: 'news_title',
      ...getColumnSearchProps('news_title'),
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      sorter: (a, b) => new Date(a?.date) - new Date(b?.date),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button onClick={() => handleUpdate(record?.id)}>Update</Button>
          <Button danger onClick={() => handleDelete(record?.id)}>Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <Table columns={columns} dataSource={data} />
  );
};

export default NewsTable;
