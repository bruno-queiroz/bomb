import { Link } from "react-router-dom";
import {
  GiRollingBomb as BombLogoIcon,
  GiGoldBar as GoldIcon,
} from "react-icons/gi";
import { useBombStore } from "../store/store";

const Header = () => {
  const golds = useBombStore((state) => state.golds);
  return (
    <>
      <header className="absolute p-4 right-0 left-0 bg-gray-900">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex text-4xl font-bold text-red-600 w-[max-content]"
          >
            B<BombLogoIcon className="text-white" />
            mb
          </Link>
        </div>
      </header>
      <div className="flex gap-1 fixed right-4 top-5 z-10">
        <GoldIcon className="text-3xl text-amber-500" />
        <div
          className="grid place-items-center text-white rounded bg-gray-800 min-w-[50px]"
          id="gold-item"
        >
          {golds}
        </div>
      </div>
    </>
  );
};

export default Header;
