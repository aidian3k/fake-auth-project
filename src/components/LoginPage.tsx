import { FC, useState } from "react";
import { fakeAuthenticationProvider } from "../core/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginState } from "../core/loginState";

export const LoginPage: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleLoginSubmit = () => {
    fakeAuthenticationProvider.signIn(username, password, (status) => {
      console.debug(status);

      if (status === LoginState.SUCESS) {
        if (!!location.state?.historyPath) {
          navigate(location.state.historyPath);
        } else {
          navigate("/main");
        }
      } else {
        setError(true);
        setUsername("");
        setPassword("");
      }
    });
  };

  return (
    <div className={"h-screen flex justify-center items-center"}>
      <div
        className={"flex flex-col justify-center items-center w-1/2 border p-2"}
      >
        <h2 className="text-4xl font-extrabold text-black">
          Sign in to the page
        </h2>
        <div>
          <div className="relative mt-6">
            <input
              name="username"
              id="username"
              placeholder="Username"
              className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
              onChange={(event) => setUsername(event.target.value)}
            />
            <label
              htmlFor="username"
              className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
            >
              Username
            </label>
          </div>
          <div className="relative mt-6">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
              onChange={(event) => setPassword(event.target.value)}
            />
            <label
              htmlFor="password"
              className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
            >
              Password
            </label>
          </div>
          {error && (
            <p className={"text-red-500 font-bold"}>
              An error occurred while trying to login
            </p>
          )}
          <div className="my-6">
            <button
              type="submit"
              className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
              onClick={() => handleLoginSubmit()}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
