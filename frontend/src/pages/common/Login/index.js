import React from "react";
import { Form,message } from "antd";
import { Link } from "react-router-dom";
import { loginUser } from "../../../apicalls/users";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../../../redux/spinnerSlice";
import vote from "../../../Images/vote.jpg"
import Navbar from '../Navbar/index.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Login() {
  const dispatch = useDispatch();
    const onFinish = async(values)=>{
      try {
        dispatch(ShowLoading());
        const response = await loginUser(values);
        dispatch(HideLoading());
        if (response.success) {
          message.success(response.message);
          localStorage.setItem("token", response.data);
          window.location.href = "/";
        } else {
          message.error(response.message);
        }
      } catch (error) {
        dispatch(HideLoading());
        message.error(error.message);
      }
    };
  return (
    <div className="bg">
   <Navbar/>
    <div className="flex justify-center items-center h-screen singin  ">
      <h1 className="gsi">Get <span className="special">Signed in</span>  - to vote</h1>
      <div className="card w-400 p-3 shadow">
        <div className="flex flex-col">
          <h1 className="text-2xl text-center">Sign In</h1>
          <div className="divider"></div>
          <Form layout="vertical" className="mt-2" onFinish={onFinish}>
            <Form.Item name="email" label="Email">
              <input type="text" className="ip" />
            </Form.Item>
            <Form.Item name="password" label="Password">
              <input type="password" className="ip" />
            </Form.Item>
            <div className="flex flex-col gap-2">
              <button
                type="submit"
                className="primary-contained-btn sign  mt-2 w-100"
              >
                Sign In
              </button>
              <Link to="/register" className="underline">Not a member? Sign Up</Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
