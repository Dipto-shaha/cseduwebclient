import useAxiosPublic from "./useAxiosPublic";

const useLogout = async ( formData) => {
    try {
       const axios = useAxiosPublic();
      const res = await axios.post("/auth/login", formData);
      console.log(res.data);
      localStorage.setItem("access_token",res?.data?.access_token)
      console.log("User Logged in Successfully");
      return { success: true, data: res.data };
    } catch (err) {
      console.log(err);
      return { success: false, error: err };
    }
  };
  
  export default useLogout;
  