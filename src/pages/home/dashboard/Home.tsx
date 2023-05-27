import React, { useRef, useState } from "react";
import "./items.css";
import "../../../index.css";
import Input from "../../../components/inputs/Input";

const Home = () => {
  const list = [
    {
      id: 1,
      platform: "Google",
      email: "lavinia@gmail.com",
      password: "lasdksjf",
    },
    {
      id: 1,
      platform: "Discord",
      email: "lavinia@gmail.com",
      password: "lasdksjf",
    },
  ];
  const [lists, setList] = useState(list);
  const [updateState, setUpdateState] = useState(-1);
  return (
    <div id="page">
      <Input />

      <div className="crud">
        <div>
          {/* {<AddList setList={setList} />} */}
          <form onSubmit={handleSubmit}>
            <table>
              {lists.map((current) =>
                updateState === current.id ? (
                  <EditList current={current} lists={lists} setList={setList} />
                ) : (
                  <tr>
                    <td>{current.platform}</td>
                    <td>{current.email}</td>
                    <td>{current.password}</td>
                    <td>
                      <button
                        className="edit"
                        onClick={() => handleEdit(current.id)}
                      >
                        {" "}
                        Edit
                      </button>
                      <button
                        className="delete"
                        type="button"
                        onClick={() => handleDelete(current.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              )}
            </table>
          </form>
        </div>
      </div>
    </div>
  );
  function handleEdit(id: any) {
    setUpdateState(id);
  }

  function handleDelete(id: any) {
    const newlist = lists.filter((li) => li.id !== id);
    setList(newlist);
  }
  function handleSubmit(event: any) {
    event.preventDefault();
    const platform = event.target.elements.platform.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const newlist = lists.map((li) =>
      li.id === updateState
        ? { ...li, platform: platform, email: email, password: password }
        : li
    );
    setList(newlist);
    setUpdateState(-1);
  }
};
const EditList = ({
  current,
  lists,
  setList,
}: {
  current: any;
  lists: any;
  setList: any;
}) => {
  function handInputplatform(event: any) {
    const value = event.target.value;
    const newlist = lists.map((li: any) =>
      li.id === current.id ? { ...li, platform: value } : li
    );
    setList(newlist);
  }
  function handInputemail(event: any) {
    const value = event.target.value;
    const newlist = lists.map((li: any) =>
      li.id === current.id ? { ...li, email: value } : li
    );
    setList(newlist);
  }
  function handInputpassword(event: any) {
    const value = event.target.value;
    const newlist = lists.map((li: any) =>
      li.id === current.id ? { ...li, password: value } : li
    );
    setList(newlist);
  }
  return (
    <tr>
      <td>
        <input
          type="text"
          onChange={handInputplatform}
          name="platform"
          value={current.platform}
        />
      </td>
      <td>
        <input
          type="text"
          onChange={handInputemail}
          name="email"
          value={current.email}
        />
      </td>
      <td>
        <input
          type="password"
          onChange={handInputpassword}
          name="password"
          value={current.password}
        />
      </td>
      <td>
        <button type="submit">Update</button>
      </td>
    </tr>
  );
};

// const AddList = ({ setList }: { setList: any }) => {
//   const platformRef: React.LegacyRef<HTMLInputElement | undefined> = useRef();
//   const emailRef: React.LegacyRef<HTMLInputElement | undefined> = useRef();
//   const passwordRef: React.LegacyRef<HTMLInputElement | undefined> = useRef();

//   function handleSubmit(event: any) {
//     event.preventDefault();
//     const platform = event.target.elements.platform.value;
//     const email = event.target.elements.email.value;
//     const password = event.target.elements.password.value;
//     const newlist = {
//       id: 3,
//       platform,
//       email,
//       password,
//     };
//     setList((prevList: any) => {
//       return prevList.concat(newlist);
//     });

//     platformRef.current.value = "";
//     emailRef.current.value = "";
//     passwordRef.current.value = "";
//   }

//   return (
//     <form className="addForm" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="platform"
//         placeholder="Platform"
//         ref={platformRef}
//       ></input>
//       <input
//         type="text"
//         name="email"
//         placeholder="Email"
//         ref={emailRef}
//       ></input>
//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         ref={passwordRef}
//       ></input>
//       <button type="submit">Add</button>
//     </form>
//   );
// };
export default Home;