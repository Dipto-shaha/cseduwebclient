import { useContext, useState } from "react";
import axios from "axios";
import { AuthContest } from "./Context";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import handleLogin from "../hook/useHandleLongin";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { setUser } = useContext(AuthContest);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const result = await handleLogin(formData);
    if (result.success) {
      toast.success("User Logged in Successfully");
      navigate('/dashboard')
    } else {
      toast.error("Wrong Credentials");
    }
   
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div
      className=" h-screen flex items-center jsutify-center"
      style={{
        backgroundImage:
          "url('/Img/buidings.jpg')",
        //backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="wrapper flex backdrop-blur-lg border items-center justify-center w-full px-12 py-16 rounded-xl shadow-xl max-w-screen-md mx-auto">
        <div className="">
          <img
            src="https://i.ibb.co/VwJ6FWY/CSEDULogo-removebg-preview.png"
            alt=""
            className="h-40 w-40 rounded-2xl"
          />
          <p className="text-white w-3/4">
            Revolutionizing Waste Management in Dhaka North City Corporation
          </p>
        </div>

        <div className=" rounded-md w-1/2">
          <form onSubmit={handleSubmit}>
            <h3 className="text-4xl font-bold font-tight uppercase mb-4 text-white">
              login
            </h3>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700"></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="example@gmail.com"
                className="w-full bg-transparent rounded border px-3 py-2 text-white placeholder:text-gray-200"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 mb-3"
              ></label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="*********"
                required
                className="w-full bg-transparent rounded border px-3 py-2 text-white placeholder:text-gray-200"
              />
            </div>
            <button
              type="submit"
              className="w-full border border-white  py-1 text-white uppercase hover:bg-green-500 hover:text-white duration-600 transition rounded font-bold"
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-left">
            <span className="text-white">Forgot Password? </span>
            <Link
              to="/forget-password"
              className="hover:text-blue-700 focus:outline-none"
            >
              <span className="underline text-blue-500">Reset it here.</span>
            </Link>
          </div>
        </div>
      </div>
      {/* for toast */}
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
      ></ToastContainer>
    </div>
  );
};

export default LoginPage;
