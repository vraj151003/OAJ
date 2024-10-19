import axios from "axios"
import endpoint from "../../src/apis/endpoint"

export const createStudentPayment = async (data) => {
    const callResponse = await axios({
      url: endpoint.createPayment,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    })
      .then((response) => response.data)
      .catch((err) => ({status:0,response:err.response,code:err.response.status}))
  
    return callResponse
  }
