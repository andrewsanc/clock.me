import { useEffect, useState } from "react";
import Clock from "./Components/Clock";
import Quote from "./Components/Quote";
import Weather from "./Components/Weather";

export default function App() {
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

  return (
    <>
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
