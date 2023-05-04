import axios from "axios";

const url = "http://localhost:8080"

export const postData = async (data) => {
  try {
    const response = await axios.post(`${url}/register`, data);
    console.log(response.data); // do something with the response data
  } catch (error) {
    console.error(error);
  }
};

export const getData = async () =>{
    try {
        const response = await axios.get(`${url}/applicants`);
        console.log(response.data); 
        return response.data;
      } catch (error) {
        console.error(error);
      }
}