import { useEffect, useState } from "react";

export default function Clock(props) {
  const { ipAddress } = props;
  const [clockInfo, setClockInfo] = useState(null);

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  useEffect(() => {
    async function getClockData() {
      const response = await fetch(
        `http://worldtimeapi.org/api/ip/${ipAddress}`
      );
      const data = await response.json();
      setClockInfo(data);
    }

    getClockData();
  }, [ipAddress]);

  return (
    <div>
      {clockInfo && (
        <>
          <h1>{clockInfo.datetime}</h1>
          <h1>{clockInfo.abbreviation}</h1>
          <h1>{days[clockInfo.day_of_week - 1]}</h1>
        </>
      )}
    </div>
  );
}
