import { useEffect, useState } from "react";
import Clock from "./Components/Clock";
import Quote from "./Components/Quote";

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
      className='h-screen overflow-hidden bg-cover bg-no-repeat flex items-center justify-center'
      style={{ backgroundImage: `url(${bgHeroData?.full})` }}
    >
      <div className='flex flex-col items-center gap-4 w-80'>
        <Quote />
        {userInfo && <Clock userInfo={userInfo} />}
      </div>
    </div>
  );
}
