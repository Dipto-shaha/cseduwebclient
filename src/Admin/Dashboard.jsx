import { Link, Outlet, useLocation } from "react-router-dom";
import {
  UserOutlined,
  UserDeleteOutlined,
  UserAddOutlined,
  TruckOutlined,
} from "@ant-design/icons";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CiLogout } from "react-icons/ci";
import { Layout, Menu, theme } from "antd";
// import { useContext } from "react";
// import { AuthContest } from "./Context";
import axios from "axios";
const { Header, Content, Footer, Sider } = Layout;
import { useNavigate } from "react-router-dom";

const user ={ name:"Dipto", role:"Admin",email:"dip@gmail.com", image:"adfa"}
const itemsList = {
  "Admin": [
    {
      icon: <UserOutlined></UserOutlined>,
      label: "Dashboard",
      link: "/dashboard",
    },
    {
      icon: <UserOutlined></UserOutlined>,
      label: "Event",
      link: "/dashboard/event",
    },
    {
      icon: <TruckOutlined></TruckOutlined>,
      label: "News",
      link: "/dashboard/news",
    },
    {
      icon: <UserDeleteOutlined></UserDeleteOutlined>,
      label: "Teacher Profile",
      link: "/dashboard/user",
    },
    {
      icon: <UserAddOutlined></UserAddOutlined>,
      label: "Staff Profile",
      link: "/dashboard/adduser",
    }
  ]
};
const Dashboard = () => {
  //const { user, setUser } = useContext(AuthContest);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/logout",
        null,
        {
          withCredentials: true,
        }
      );
      localStorage.removeItem("user");
      console.log(response.data);
    //   setUser(null); // Assuming the server responds with some data
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
      <Layout className=" min-h-screen text-gray-100">
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="flex flex-col justify-between h-full">
            <div className="p-4">
              <div className="flex items-center mb-5">
                <img
                  src={user?.image}
                  alt="User"
                  className="w-10 h-10 rounded-full mr-2"
                />
                <div>
                  <p className="font-bold">{user?.name}</p>
                  <p>{user?.role}</p>
                  {/* <p className="text-gray-600">{user.email}</p> */}
                </div>
              </div>
              <div className="demo-logo-vertical" />
              <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={[location.pathname]}
              >
                {itemsList[user?.role].map((item, index) => (
                  <Menu.Item key={index + 1} icon={item.icon}>
                    <Link to={item.link}>{item.label}</Link>
                  </Menu.Item>
                ))}
              </Menu>
            </div>
            <div className="p-4">
              <div className="flex justify-center  font-medium items-center">
                <CiLogout></CiLogout>
                <button className=" ml-2 btn" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </Sider>
        <Layout>
          <Header
            style={{
              padding: "10px",
              background: colorBgContainer,
            }}
          >
            <p className=" text-gray-600 -mt-2">
              </p>
            <div className=" flex items-center justify-end mt-2 px-6 sm:py-1 lg:gap-x-2 font-bold text-xl sm:text-sm align-center w-full mb-5">
              <img
                className="w-14 h-10 -mt-2"
                src="https://i.ibb.co/tKTXhQ6/CSEDULogo.png"
              ></img>
              
            </div>
          </Header>
          <Content
            style={{
              margin: "24px 16px 0",
            }}
            className="flex"
          >
            <div
              style={{
                padding: 24,

                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
              className=" flex-grow "
            >
              <Outlet></Outlet>
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            CSEDU ©{new Date().getFullYear()} Created by DU_UnstaifiedSouls
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default Dashboard;
