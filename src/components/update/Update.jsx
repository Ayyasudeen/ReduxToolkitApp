import React, { useEffect } from "react";
import Warning from "../warning/Warning";
import "./update.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { updateUser } from "../../redux/apiCalls";
import { updateuser2 } from "../../redux/userSlice";

export default function Update() {
  const user = useSelector(state=>state.user)
  const [name, setName] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("name");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [email, setEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const dispatch = useDispatch();

  function handleSuccessDisplay() {
    if (user.success === true) {
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
             }, 1000);
    };
    localStorage.setItem('name', JSON.stringify(name));
  }

  useEffect(() => {
      handleSuccessDisplay();
      const getname = JSON.parse(localStorage.getItem('name'));
      if (getname) {
        setName(getname);
      }
      
  }, [user])
  
  

  const userDetails = {
    name: name,
    email: email
  }

  function handleUpdate(e) {
    e.preventDefault();
    // updateuser({name,email}, dispatch)
    dispatch(updateuser2(userDetails))
  }

  function handleDelete(e) {
    e.preventDefault();
    // dispatch(remove())
  }


  return (
    <div className="update">
      <div className="updateWrapper">
        <h3 className="updateTitle">Update Your Account</h3>
        <Warning />
        <button className="delete" onClick={handleDelete}>Delete Account</button>
        <div className="updateContainer">
          <form>
            <div className="formItem">
              <label>Profile Picture</label>
              <div className="profilePic">
                <img
                  className="avatar"
                  src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <span className="change">Change</span>
              </div>
            </div>
            <div className="formItem">
              <label>Username</label>
              <input
                className="formInput"
                type="text"
                placeholder={name}
                onChange={e=>setName(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Email</label>
              <input
                className="formInput"
                type="text"
                placeholder={user.userInfo.email}
                onChange={e=>setEmail(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Password</label>
              <input className="formInput" type="password" />
            </div>
            <button
              className="updateButton"
              onClick={handleUpdate}
              disabled={user.pending || isSuccess}
            >
              Update
            </button>
            {user.pending && <span > Loading...</span>}
            {isSuccess && <span style={{color: "green"}}> Successfully Updated</span>}
            {user.error && <span style={{color: "red"}}> Error Occurred</span>}
          </form>
        </div>
      </div>
    </div>
  );
};
