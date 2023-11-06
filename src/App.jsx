import { useEffect, useState } from "react";
import Clock from "./Components/Clock";
import Quote from "./Components/Quote";
import Weather from "./Components/Weather";

export default function App() {
  const [userInfo, setUserInfo] = useState(null);
  const [bgHeroData, setBgHeroData] = useState(null);

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

  useEffect(() => {
    async function getHeroData() {
      const response = await fetch(
        `https://api.unsplash.com/photos/random/?client_id=${
          import.meta.env.VITE_UNSPLASH_API_KEY
        }&query=nature&orientation=landscape`
      );
      const { urls } = await response.json();
      setBgHeroData(urls);
    }

    getHeroData();
  }, []);

  return (
    <div
      className='h-screen overflow-hidden bg-cover bg-no-repeat flex flex-col items-center justify-center gap-5'
      style={{ backgroundImage: `url(${bgHeroData?.full})` }}
    >
      <Quote />
      {userInfo && (
        <>
          <Clock userInfo={userInfo} />
          <Weather userInfo={userInfo} />
        </>
      )}
    </div>
  );
}
