import { useEffect, useState } from "react";
import refreshIcon from "../assets/desktop/icon-refresh.svg";

export default function Quote() {
  const [quoteData, setQuoteData] = useState(null);
  useEffect(() => {
    async function getQuoteData() {
      const response = await fetch("https://api.quotable.io/quotes/random");
      const [quote] = await response.json();

      setQuoteData(quote);
    }

    getQuoteData();
  }, []);
  return (
    <div className='w-[573px] h-[125px] relative'>
      <div className="w-[540px] left-0 top-0 absolute text-white text-lg font-normal font-['Inter'] leading-7">
        "{quoteData.content}"
      </div>
      <img
        className='w-[16.67px] h-[16.67px] left-[555.67px] top-[10.67px] absolute opacity-50 cursor-pointer'
        src={refreshIcon}
      />
      <div className="w-[540px] left-0 top-[97px] absolute text-white text-lg font-bold font-['Inter'] leading-7">
        {quoteData.author}
      </div>
    </div>
  );
}
