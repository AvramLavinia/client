import { NameDto, NameResponse } from "./auth.requests.types";
import axios from "./default.request";

export const newNameRequest = async (object: NameDto) => {
    const accessToken = localStorage.getItem("accessToken");
    return await axios.post<NameResponse>("/user/save",{object} ,{
        headers: {Authorization: `Bearer ${accessToken}`},
    });
  };