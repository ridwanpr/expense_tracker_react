import {
  HiBars4,
  HiChartBar,
  HiCreditCard,
  HiCurrencyDollar,
  HiHome,
  HiTag,
} from "react-icons/hi2";
import { Link } from "react-router";

export default function Dashboard() {
  return (
    <div className="md:grid md:grid-cols-[250px_1fr] xl:grid-cols-[300px_1fr] min-h-screen relative">
      <div
        id="dekstop-menu"
        className="hidden bg-white border-r border-r-gray-200 p-4 gap-4 md:flex md:flex-col"
      >
        <Link
          to="/dashboard"
          className="text-center text-xl font-bold text-blue-500"
        >
          Expense Tracker
        </Link>
        <hr className="border-gray-300" />
        <nav>
          <ul className="flex flex-col">
            <li className="w-full bg-gray-200 p-3 rounded">
              <a href="" className="flex items-center gap-2 text-lg">
                <HiHome className="text-gray-400" /> Dashboard
              </a>
            </li>
            <li className="w-full font-semibold p-3 rounded">
              <a
                href=""
                className="flex items-center gap-2 font-normal text-lg"
              >
                <HiCreditCard className="text-gray-400" /> Expense
              </a>
            </li>
            <li className="w-full font-semibold p-3 rounded">
              <a
                href=""
                className="flex items-center gap-2 font-normal text-lg"
              >
                <HiTag className="text-gray-400" /> Category
              </a>
            </li>
            <li className="w-full font-semibold p-3 rounded">
              <a
                href=""
                className="flex items-center gap-2 font-normal text-lg"
              >
                <HiCurrencyDollar className="text-gray-400" /> Budget
              </a>
            </li>
            <li className="w-full font-semibold p-3 rounded">
              <a
                href=""
                className="flex items-center gap-2 font-normal text-lg"
              >
                <HiChartBar className="text-gray-400" /> Report
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div
        id="mobile-menu"
        className="absolute bg-white w-[75%] h-full flex flex-col p-4 gap-4 md:hidden"
      >
        <Link
          to="/dashboard"
          className="text-center text-xl font-bold text-blue-500"
        >
          Expense Tracker
        </Link>
        <hr className="border-gray-300" />
        <nav>
          <ul className="flex flex-col">
            <li className="w-full bg-gray-200 p-3 rounded">
              <a href="" className="flex items-center gap-2 text-lg">
                <HiHome className="text-gray-400" /> Dashboard
              </a>
            </li>
            <li className="w-full font-semibold p-3 rounded">
              <a
                href=""
                className="flex items-center gap-2 font-normal text-lg"
              >
                <HiCreditCard className="text-gray-400" /> Expense
              </a>
            </li>
            <li className="w-full font-semibold p-3 rounded">
              <a
                href=""
                className="flex items-center gap-2 font-normal text-lg"
              >
                <HiTag className="text-gray-400" /> Category
              </a>
            </li>
            <li className="w-full font-semibold p-3 rounded">
              <a
                href=""
                className="flex items-center gap-2 font-normal text-lg"
              >
                <HiCurrencyDollar className="text-gray-400" /> Budget
              </a>
            </li>
            <li className="w-full font-semibold p-3 rounded">
              <a
                href=""
                className="flex items-center gap-2 font-normal text-lg"
              >
                <HiChartBar className="text-gray-400" /> Report
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <main>
        <section
          id="navbar"
          className="border-b-2 border-b-gray-200 h-14 flex items-center justify-between px-2 py-4"
        >
          <div className="flex items-center gap-2">
            <button className="border border-gray-400 text-gray-500 p-2 rounded md:hidden">
              <HiBars4 />
            </button>
            <div className="font-semibold text-sm">Budget: Rp.10.000.000</div>
          </div>
          <div className="flex gap-2">
            <div className="text-sm">Profile</div>
          </div>
        </section>
        <section id="content"></section>
      </main>
    </div>
  );
}
