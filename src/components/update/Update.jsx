import React from "react";
import Warning from "../warning/Warning";
import "./update.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { updateUser } from "../../redux/apiCalls";
import { updateuser2 } from "../../redux/userSlice";

export default function Update() {
  const user = useSelector(state=>state.user)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

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
                placeholder={user.userInfo.name}
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
              disabled={user.pending && !user.closeSuccess ? true : false}
            >
              Update
            </button>
            {user.pending && <span > Loading...</span>}
            {user.success && <span> Successfully Updated</span>}
            {user.error && <span> Error Occurred</span>}
          </form>
        </div>
      </div>
    </div>
  );
};
