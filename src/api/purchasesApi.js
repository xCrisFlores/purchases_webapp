import axiosClient from "./axiosClient";

export const getPurchases = async (_id) => {
  try {
    const response = await axiosClient.get(`purchases/${_id}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const createPurchase = async(data) =>{
    try {
        const response = await axiosClient.post("purchases", data);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const putPurchase = async(data) =>{
  try {
      const response = await axiosClient.put("purchases", data);
      return response;
  } catch (error) {
      console.error(error);
  }
}

export const deletePurchaseApi = async(_id) =>{
  try {
    const response = await axiosClient.delete(`purchases/${_id}`);
      return response;
  } catch (error) {
      console.error(error);
  }
}