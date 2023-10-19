import { useEffect, useState } from "react";
import refreshIcon from "../assets/desktop/icon-refresh.svg";

export default function Quote() {
  const [quoteData, setQuoteData] = useState("");

  useEffect(() => {
    async function getData() {
      const quote = await getQuoteData();
      setQuoteData(quote);
    }

    getData();
  }, []);

  async function handleOnClick(e) {
    e.preventDefault();
    const quote = await getQuoteData();
    setQuoteData(quote);
  }

  async function getQuoteData() {
    const response = await fetch("https://api.quotable.io/quotes/random");
    const [quote] = await response.json();

    return quote;
  }

  return (
    <div className='w-[573px] h-[125px] relative'>
      <div className="w-[540px] left-0 top-0 absolute text-white text-lg font-normal font-['Inter'] leading-7">
        "{quoteData.content}"
      </div>
      <img
        onClick={handleOnClick}
        className='w-[16.67px] h-[16.67px] left-[555.67px] top-[10.67px] absolute cursor-pointer'
        src={refreshIcon}
      />
      <div className="w-[540px] left-0 top-[97px] absolute text-white text-lg font-bold font-['Inter'] leading-7">
        {quoteData.author}
      </div>
    </div>
  );
}
