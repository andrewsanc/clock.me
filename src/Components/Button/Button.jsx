import ArrowDown from "../../assets/desktop/icon-arrow-down.svg";
import ArrowUp from "../../assets/desktop/icon-arrow-up.svg";

export default function Button(props) {
  const { text, onClick, toggled, style } = props;

  return (
    <div
      className={`w-[146px] h-14 relative cursor-pointer ${style && style}`}
      onClick={onClick}
    >
      <div className='w-[146px] h-14 left-0 top-0 absolute bg-white rounded-[28px]' />
      <div className="left-[21px] top-[15px] absolute opacity-50 text-black text-base font-bold font-['Inter'] uppercase leading-7 tracking-[5px]">
        {toggled ? text[0] : text[1]}
      </div>
      <div className='w-10 h-10 left-[97px] top-[8px] absolute'>
        <div className='w-10 h-10 left-0 top-0 absolute bg-zinc-800 hover:bg-neutral-400 rounded-full flex justify-center items-center'>
          <img src={toggled ? ArrowUp : ArrowDown} />
        </div>
      </div>
    </div>
  );
}
