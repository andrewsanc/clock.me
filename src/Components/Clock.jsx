import { useEffect, useState } from "react";
import Button from "./Button/Button";

export default function Clock(props) {
  const {
    userInfo: { ip, timezone, location },
    hideQuote,
    setHideQuote,
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
        <div className='w-[1110px] h-72  relative flex flex-row items-center justify-between m-8'>
          <div className='w-[575px] h-72 relative'>
            <div className='w-[575px] h-[200px] left-0 top-[44px] absolute flex flex-row'>
              <div className="left-0 top-0 text-white text-[200px] font-bold font-['Inter'] leading-[200px]">
                {formatTime(timezone.current_time)}
              </div>
              <div className="left-[560px] top-[145px] absolute text-white text-[40px] font-light font-['Inter'] uppercase leading-7">
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
          <Button
            onClick={() => setHideQuote(false)}
            toggled={hideQuote ? true : false}
            text={["Less", "More"]}
            style='self-end'
          />
        </div>
      )}
      {hideQuote && (
        <div className='w-[1110px] h-[400px] bg-white bg-opacity-75 backdrop-blur-[40.77px] flex flex-row justify-center items-center'>
          <div className='w-[844px] h-[252px] relative'>
            <div className='w-[423px] h-[105px] left-0 top-0 absolute'>
              <div className="left-0 top-0 absolute text-zinc-800 text-[15px] font-normal font-['Inter'] uppercase leading-7 tracking-[3px]">
                CURRENT TIMEZONE
              </div>
              <div className="left-0 top-[37px] absolute text-zinc-800 text-[56px] font-bold font-['Inter']">
                Europe/London
              </div>
            </div>
            <div className='w-44 h-[105px] left-0 top-[147px] absolute'>
              <div className="left-0 top-0 absolute text-zinc-800 text-[15px] font-normal font-['Inter'] uppercase leading-7 tracking-[3px]">
                Day of the year
              </div>
              <div className="left-0 top-[37px] absolute text-zinc-800 text-[56px] font-bold font-['Inter']">
                295
              </div>
            </div>
            <div className='w-[179px] h-[105px] left-[665px] top-0 absolute'>
              <div className="left-0 top-0 absolute text-zinc-800 text-[15px] font-normal font-['Inter'] uppercase leading-7 tracking-[3px]">
                Day of the week
              </div>
              <div className="left-0 top-[37px] absolute text-zinc-800 text-[56px] font-bold font-['Inter']">
                5
              </div>
            </div>
            <div className='w-36 h-[105px] left-[665px] top-[147px] absolute'>
              <div className="left-0 top-0 absolute text-zinc-800 text-[15px] font-normal font-['Inter'] uppercase leading-7 tracking-[3px]">
                Week number
              </div>
              <div className="left-0 top-[37px] absolute text-zinc-800 text-[56px] font-bold font-['Inter']">
                42
              </div>
            </div>
            <div className='w-px h-[252px] left-[570px] top-0 absolute opacity-25 bg-zinc-800' />
          </div>
        </div>
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
