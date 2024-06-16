const handleAddUser = async (axios, formData) => {
    console.log(axios);
    try {
      const res = await axios.post("/user/add", formData);
      console.log(res)
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };
  
  export default handleAddUser;
  