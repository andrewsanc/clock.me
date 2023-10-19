import { useEffect, useState } from "react";
import Clock from "./Components/Clock";
import Quote from "./Components/Quote";
import backgroundDay from "./assets/desktop/bg-image-daytime.jpg";

export default function App() {
  const [hideQuote, setHideQuote] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    async function getIpData() {
      const response = await fetch(
        `https://api.ipbase.com/v2/info?apikey=${
          import.meta.env.VITE_IPBASE_KEY
        }&ip=`
      );
      const {
        data: { ip, location, timezone },
      } = await response.json();

      setUserInfo({
        ip,
        location,
        timezone,
      });
    }

    getIpData();
  }, []);

  return (
    <div
      className='bg-cover bg-no-repeat h-screen'
      style={{ backgroundImage: `url(${backgroundDay})` }}
    >
      {!hideQuote && <Quote />}
      {userInfo && (
        <Clock
          userInfo={userInfo}
          hideQuote={hideQuote}
          setHideQuote={setHideQuote}
        />
      )}
    </div>
  );
}
