import { useState } from 'react';
import { Menu, Dropdown, Button } from 'antd';
import {  LogoutOutlined } from '@ant-design/icons';
import { GrUpdate } from 'react-icons/gr';

const { Item, Divider } = Menu;

const NavberProfile = ({ name,imageLink }) => {
  const [visible, setVisible] = useState(false);

  const handleMenuClick = (e) => {
    if (e.key === 'logout') {
    }
    setVisible(false);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Item key="profile">Profile</Item>
      <Divider />
      <Item key="updateProfile" icon={<GrUpdate/>}>
        Update Profile
      </Item>
      <Divider />
      <Item key="logout" icon={<LogoutOutlined />}>
        Log out
      </Item>
    </Menu>
  );
  function renderAvatar() {
    if (imageLink) {
      return <img src={imageLink} width={42} height={42} alt="avatar" className="rounded-full" />;
    } else {
      const initial = name?.charAt(0)?.toUpperCase();
      return (
        <div className={`w-10 h-10 rounded-full bg-[#216a70] flex items-center justify-center text-2xl text-white`}>
          {initial}
        </div>
      );
    }
  }
  return (
    <Dropdown
      overlay={menu}
      trigger={['click']}
      open={visible}
      onVisibleChange={(flag) => setVisible(flag)}
    >
      <Button className="flex items-center border-[1px] border-[#14264c] py-6" type="text">
        {renderAvatar()}
        <div className="ml-2">
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-gray-500">Admin</p>
        </div>
      </Button>
    </Dropdown>
  );
};

export default NavberProfile;
