import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
const Add = () => {
  const users = {
    fname: "",
    lname: "",
    email: "",
    position: "",
    number: "",
    status: "true",
  };
  const [user, setUser] = useState(users);

  // console.log(user);
  const navigate = useNavigate();
  const inputHandler = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .post("https://backendserver-rsdt.onrender.com/api/create", user)
      .then((response) => {
        toast.success(response.data.msg, { position: "top-right" });
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container bg-white rounded-lg py-6">
      <div className="flex left">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 m-4"
        >
          <Link to="/">Back</Link>
        </button>
      </div>
      <h1 className="text-3xl font-bold py-2">Add New Employer Details</h1>

      <form className="max-w-sm mx-auto" onSubmit={submitForm}>
        <div className="mb-5">
          <label
            htmlFor="fname"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          ></label>
          <input
            type="text"
            id="fname"
            name="fname"
            onChange={inputHandler}
            placeholder="First Name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required=""
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="lname"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          ></label>
          <input
            type="text"
            id="lname"
            name="lname"
            onChange={inputHandler}
            placeholder="Last Name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required=""
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          ></label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={inputHandler}
            placeholder="Email address"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required=""
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          ></label>
          <input
            type="number"
            id="phone"
            name="number"
            onChange={inputHandler}
            placeholder="Phone number"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required=""
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="position"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          ></label>
          <input
            type="text"
            id="position"
            name="position"
            onChange={inputHandler}
            placeholder="Job position"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required=""
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add New User
        </button>
      </form>
    </div>
  );
};

export default Add;
