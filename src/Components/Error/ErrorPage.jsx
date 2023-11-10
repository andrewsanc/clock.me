import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id='error-page'
      className='h-screen flex flex-col items-center justify-center'
    >
      <h1 className="text-black text-2xl font-bold font-['Inter'] uppercase leading-7 tracking-[4px] py-4">
        Oops!
      </h1>
      <p className="text-black text-xl font-normal font-['Inter'] uppercase leading-7">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-gray-500 text-xl font-normal font-['Inter'] uppercase leading-7 py-4">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
