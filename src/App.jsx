import { useEffect, useState } from "react";
import Clock from "./Components/Clock";
import Quote from "./Components/Quote";
import Weather from "./Components/Weather";

export default function App(props) {
  const { supabaseClient } = props;
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    async function getIpData() {
      const response = await fetch(
        `https://ipgeolocation.abstractapi.com/v1?api_key=${
          import.meta.env.VITE_IPGEOLOCATION_API_KEY
        }`
      );
      const data = await response.json();
      setUserInfo(data);
    }

    getIpData();
  }, []);

  async function handleOnSignOutBtn(e) {
    e.preventDefault();
    const { error } = await supabaseClient.auth.signOut();
  }

  return (
    <>
      <div className='absolute top-0 right-0 m-4'>
        <button
          class='inline-block rounded border-2 border-white px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:border-primary-accent-100 hover:bg-neutral-500 hover:bg-opacity-10 focus:border-primary-accent-100 focus:outline-none focus:ring-0 active:border-white-accent-200 dark:text-primary-100 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10'
          onClick={handleOnSignOutBtn}
        >
          Sign Out
        </button>
      </div>
      <Quote />
      {userInfo && (
        <>
          <Clock userInfo={userInfo} />
          <Weather userInfo={userInfo} />
        </>
      )}
    </>
  );
}
