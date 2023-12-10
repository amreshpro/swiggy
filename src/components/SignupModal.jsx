import { Link, Navigate } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isAuth } from "../store/authSlice";

const SignupModal = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth);
  const [signupDetail, setSignupDetail] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const onSingupHandler = (e) => {
    e.preventDefault();
    const { name, email, password } = signupDetail;
    if (email && name && password) {
      dispatch(isAuth(true));
    }
  };

  const guestLoginHandler = (e) => {
    e.preventDefault();

    dispatch(isAuth(true));
  };

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/product" replace={true} />
      ) : (
        <div className=" flex flex-col justify-center items-center">
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                className="mx-auto h-10 w-auto"
                src="/logo.png"
                alt="Your Company"
              />
              <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Create a new account
              </h2>
            </div>

            <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" method="POST">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      onChange={(e) => {
                        setSignupDetail((prev) => {
                          return { ...prev, name: e.target.value };
                        });
                      }}
                      className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      onChange={(e) => {
                        setSignupDetail((prev) => {
                          return { ...prev, email: e.target.value };
                        });
                      }}
                      className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                  </div>

                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      onChange={(e) => {
                        setSignupDetail((prev) => {
                          return { ...prev, password: e.target.value };
                        });
                      }}
                      className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Confirm Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      autoComplete="password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => onSingupHandler}
                  >
                    Sign up
                  </button>
                </div>
              </form>
              <div className="guest mt-4 text-center">
                <button
                  onClick={guestLoginHandler}
                  className=" rounded-lg bg-orange-500 text-white px-2 py-2 text-md text-center"
                >
                  Login as Guest
                </button>
              </div>
              <p className="mt-4 text-center text-sm text-gray-500">
                Already a member?
                <Link
                  to="/login"
                  className="font-semibold leading-6 text-orange-500 hover:text-orange-700"
                >
                  &nbsp; Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default SignupModal;
