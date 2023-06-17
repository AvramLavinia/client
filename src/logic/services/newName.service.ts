import { useState } from "react";
import { UseAppDispatch } from "../redux/redux-hooks";
import { object } from "yup";
import { NameDto, NameResponse } from "../requests/auth.requests.types";
import { newNameRequest } from "../requests/newName.requests";
import { setAlert } from "../redux/slices/alert.slice";
import { updateUser } from "../redux/slices/user.slice";

const NewNameService = () => {
    const dispatch = UseAppDispatch();
    const [loading, setLoading] = useState<boolean>(false);

    const newName = async (object: NameDto) => {
        return await newNameRequest(object)
            .then(async (res) => {
                const data: NameResponse = res.data;
                if (!res) {
                    console.error("SOMETHING GOES WRONG!");
                    setLoading(false);
                    return false;
                } else {
                    setLoading(false);
                    return dispatch(updateUser(data));
                }
            })
            .catch((error) => {
                setLoading(false);
                dispatch(setAlert({ description: error.response.data.message }));
                return false;
            });
    }
    return { newName, loading, setLoading };
};
export default NewNameService;