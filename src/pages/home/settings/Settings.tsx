import React, { useState } from "react";
import "./settings.css";
import "../../../index.css";
import { useNavigate } from "react-router-dom";
import NewNameService from "../../../logic/services/newName.service";
import { UseAppDispatch, UseAppSelector } from "../../../logic/redux/redux-hooks";
import { setAlert } from "../../../logic/redux/slices/alert.slice";
import TextInput from "../../../components/inputs/TextInput";
import BasicButton from "../../../components/buttons/BasicButton";
import { selectUserValue } from "../../../logic/redux/slices/user.slice";


const Settings = () => {

  const navigation = useNavigate();
  const { newName, loading, setLoading } = NewNameService();
  const dispatch = UseAppDispatch();
  const [name, setName] = useState<string>("");
  const user = UseAppSelector(selectUserValue);
  const handleName = async () => {
   
      setLoading(true);
      await newName({ name});

      setLoading(false);
    
      dispatch(setAlert({ description: "All fields must be required" }));
    
  };
  return (
    <div id="page">
      <div className="containerSet">
        <h1 className="titlu1">Settings</h1>

        <div className="contSet">
          <h2 className="t1">Change Name</h2>
          <TextInput
            type={"text"}
            defaultLabel={"Your actual name"}
            onChangeText={(text) => {}}
            value={user.name as string}
            disable={true}
          />
          <TextInput
           type={"text"}
           defaultLabel={"Your new name"}
           onChangeText={(text) => setName(text)}
           value={name}
          />
          <BasicButton title={"Change Name"}
            onClick={async () => await handleName()}
            loading={loading} 
            />
          
        </div>
        <div className="contSet1">
          <h2 className="t1">Change Password</h2>
          <button className="butonChange" onClick={() => {
                  navigation("/NewPassword");
                }}>
            Change Password
          </button>
        </div>

       
      </div>
    </div>
  );
};
export default Settings;
