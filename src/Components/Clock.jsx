import { useEffect, useState } from "react";

export default function Clock(props) {
  const {
    userInfo: { ip, timezone, location },
    hideQuote,
  } = props;
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

  // TODO - Refactor. Needs to be changed to when the BTN is clicked.
  // useEffect(() => {
  //   async function getClockData() {
  //     const response = await fetch(`http://worldtimeapi.org/api/ip/${ip}`);
  //     const data = await response.json();
  //     setClockInfo(data);
  //   }

  //   getClockData();
  // }, [ip]);

  return (
    <div>
      {timezone && location && (
        <div className='w-[575px] h-72 relative'>
          <div className='w-[575px] h-[200px] left-0 top-[44px] absolute'>
            <div className="left-0 top-0 absolute text-white text-[200px] font-bold font-['Inter'] leading-[200px]">
              {formatTime(timezone.current_time)}
            </div>
            <div className="left-[498px] top-[145px] absolute text-white text-[40px] font-light font-['Inter'] uppercase leading-7">
              {timezone.code}
            </div>
          </div>
          <div className='w-[484px] h-7 left-0 top-0 absolute'>
            <div className="left-[40px] top-0 absolute text-white text-xl font-normal font-['Inter'] uppercase leading-7 tracking-[4px]">
              GOOD MORNING, IT’S CURRENTLY
            </div>
            <div className='w-6 h-6 left-0 top-[2px] absolute' />
          </div>
          <div className="left-0 top-[260px] absolute text-white text-2xl font-bold font-['Inter'] uppercase leading-7 tracking-[4.80px]">
            in {location.city.name}, {location.region.name}
          </div>
        </div>
      )}
      {hideQuote && (
        <>
          <h1>Day of the year</h1>
          <h1>Day of the week</h1>
          <h1>Current timezone</h1>
          <h1>Week Number</h1>
        </>
      )}
    </div>
  );
}

function formatTime(date) {
  const newDate = new Date(date);

  let hour = newDate.getHours();
  hour = ("0" + hour).slice(-2);

  let minute = newDate.getMinutes();
  minute = ("0" + minute).slice(-2);

  return `${hour}:${minute}`;
}
