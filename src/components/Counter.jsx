import CountUp from "react-countup";
import { counterItems } from "../constants/index.js";

const Counter = () => {
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((items) => (
          <div className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
            <div
              key={items.label}
              className="counter-number text-white text-5xl font-bold mb-2"
            >
              <CountUp end={items.value} suffix={items.suffix} />
            </div>
            <div className="text-white-50 text-lg">{items.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
