import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import { ThreeCircles } from "react-loader-spinner";

import Stack from "@mui/material/Stack";

function Login() {
  const [errMsg, setErrMsg] = useState();
  const [loginSkl, setLoginSkl] = useState(false);

  const navigate = useNavigate();
  const [existingUser, setExistingUser] = useState({
    email: "",
    password: "",
  });
  const [isFailedLogin, setisFailedLogin] = useState(false);
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const url = "https://news-app-server-lb75.onrender.com/login";
      await axios.post(url, existingUser).then(async (res) => {
        setErrMsg(res.data.message);
        setisFailedLogin(true);
        console.log(res.data.message);
        localStorage.setItem("user", JSON.stringify(res.data));
        const foundUSer = res.data.user;
        console.log(foundUSer);

        if (foundUSer) window.location = "/";
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const api = "https://news-app-server-lb75.onrender.com/";
      const data = await axios.get(api);
      if (data.data) setLoginSkl(true);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="singupCont">
        <section className="bg-gray-50">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            {loginSkl ? (
              <a
                href="/"
                className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
              >
                <img className="w-8 h-8 mr-2 rounded-lg" src="da-logo3.png" alt="logo" />
                Daily Articles
              </a>
            ) : (
              <ThreeCircles
                height="60"
                width="60"
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor="orange"
                innerCircleColor="black"
                middleCircleColor="gray"
              />
            )}
            {loginSkl ? (
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign in to your account
                  </h1>
                  <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your email
                      </label>
                      <input
                        onChange={(e) =>
                          setExistingUser({
                            ...existingUser,
                            email: e.target.value,
                          })
                        }
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        onChange={(e) =>
                          setExistingUser({
                            ...existingUser,
                            password: e.target.value,
                          })
                        }
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                      />
                    </div>
                    {isFailedLogin && <div className="errorMsg">{errMsg}</div>}
                    <div className="flex items-center justify-between">
                      <a
                        href="/"
                        className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <button
                      onClick={handleClick}
                      type="submit"
                      className="w-full text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Sign in
                    </button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don't have an account yet?{" "}
                      <a
                        href="/signup"
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Sign up
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            ) : (
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <Skeleton variant="text" sx={{ fontSize: "2rem" }} />

                  <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                      <Stack spacing={1}>
                        <Skeleton variant="rounded" width={210} height={20} />
                        <Skeleton variant="rounded" height={40} />
                      </Stack>
                    </div>
                    <div>
                      <Stack spacing={1}>
                        <Skeleton variant="rounded" width={210} height={20} />
                        <Skeleton variant="rounded" height={40} />
                      </Stack>
                    </div>
                    <div className="flex items-center justify-between">
                      <Skeleton variant="rounded" width={210} height={20} />
                    </div>
                    <button
                      onClick={handleClick}
                      type="submit"
                      className="w-full text-white bg-sky-600 hover:bg-sky-700  rounded-lg text-lg text-center "
                    >
                      <Skeleton variant="rounded" height={40} />
                    </button>
                    <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                  </form>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export default Login;
