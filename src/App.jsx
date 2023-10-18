import { useEffect, useState } from "react";
import Clock from "./Components/Clock";
import Quote from "./Components/Quote";

export default function App() {
  const [hideQuote, setHideQuote] = useState(false);
  const [userInfo, setUserInfo] = useState("");

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
    <>
      {!hideQuote && <Quote />}
      {userInfo && <h1>{userInfo.ip}</h1>}
      {userInfo && <Clock ipAddress={userInfo.ip} hideQuote={hideQuote} />}
      <button onClick={() => setHideQuote(!hideQuote)}>
        {hideQuote ? "Less" : "More"}
      </button>
    </>
  );
}
