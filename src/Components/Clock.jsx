import { useEffect, useState } from "react";
import Button from "./Button/Button";

export default function Clock(props) {
  const {
    hideQuote,
    setHideQuote,
    userInfo: { timezone, ip_address, city, region_iso_code },
  } = props;

  const [time, setTime] = useState(splitTime(timezone.current_time));
  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setTime({
        minutes: date.getMinutes(),
        hours: date.getHours(),
        seconds: date.getSeconds(),
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className='w-[575px] h-72 relative'>
        <div className='w-[575px] h-[200px] left-0 top-[44px] absolute flex flex-col items-start'>
          <div className="left-0 top-0 text-white text-[200px] font-bold font-['Inter'] leading-[200px]">
            {`${time.hours}:${time.minutes}`}
          </div>
          <div className="left-[560px] top-[145px] absolute text-white text-[40px] font-light font-['Inter'] uppercase leading-7">
            {timezone.abbreviation}
          </div>
        </div>
        <div className="left-[40px] top-0 text-white text-xl font-normal font-['Inter'] uppercase leading-7 tracking-[4px]">
          GOOD MORNING, IT’S CURRENTLY
        </div>
        <div className="left-0 top-[260px] absolute text-white text-2xl font-bold font-['Inter'] uppercase leading-7 tracking-[4.80px]">
          in {city}, {region_iso_code}
        </div>
      </div>
      {/* <Button
          onClick={() => setHideQuote(false)}
          toggled={hideQuote ? true : false}
          text={["Less", "More"]}
          style='self-end'
        /> */}
    </>
  );
}

function splitTime(time) {
  const [hours, minutes, seconds] = time.split(":");

  return {
    minutes,
    hours,
    seconds,
  };
}
