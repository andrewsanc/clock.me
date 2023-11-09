import { useEffect, useState } from "react";

export default function Hero(props) {
  const { children } = props;
  const [bgHeroData, setBgHeroData] = useState(null);

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
      className='h-screen overflow-hidden bg-cover bg-no-repeat flex flex-col items-center justify-center gap-5'
      style={{ backgroundImage: `url(${bgHeroData?.full})` }}
    >
      {children}
    </div>
  );
}
