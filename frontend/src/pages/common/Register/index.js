import React from "react";
import { Form, message } from "antd";
import { Link } from "react-router-dom";
import { registerUser } from "../../../apicalls/users";
import { useDispatch } from "react-redux";
import Navbar from '../Navbar/index.js'

import { HideLoading, ShowLoading } from "../../../redux/spinnerSlice";
import vote from "../../../Images/vote.jpg"
function Register() {
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await registerUser(values);
      dispatch(HideLoading());
      if (response.success) {
        message.success(response.message);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(ShowLoading());
      message.error(error.message);
    }
  };
  return (
    <div div className="bg ">
   <Navbar/>
    <div className="flex justify-center items-center h-screen su">
    <h1 className="gsi">Get <span className="special">Signed Up</span>  - to vote</h1>

      <div className="card w-400 p-3">
        <div className="flex flex-col">
          <h1 className="text-2xl text-center">Sign Up</h1>
          <div className="divider"></div>
          <Form layout="vertical" className="mt-2" onFinish={onFinish}>
            <Form.Item name="name" label="Name">
              <input type="text" className="ip" />
            </Form.Item>
            <Form.Item name="email" label="Email">
              <input type="text" className="ip" />
            </Form.Item>
            <Form.Item name="password" label="Password">
              <input type="password" className="ip" />
            </Form.Item>
            <div className="flex flex-col gap-2">
              <button
                type="submit"
                className="primary-contained-btn mt-2 w-100 sign"
              >
                Sign Up
              </button>
              <Link to="/login" className="underline">
                Already a member? Sign In
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Register;
