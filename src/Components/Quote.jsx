import { useEffect, useState } from "react";

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
    <>
      <h1>{quoteData && `${quoteData.content} by ${quoteData.author}`}</h1>
    </>
  );
}
