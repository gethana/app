import HanaSolo from "../assets/hana_logo_solo.png";
import { Link } from "wouter";

function Sidebar() {
  return (
    <nav className="flex flex-col justify-between p-5 bg-neutral-800 h-full w-[20rem] border-r border-r-neutral-600">
      <Link href="/" className="w-auto text-white font-bold text-2xl">
        <img src={HanaSolo} alt="Hana Solo" className="w-12 h-12" />
      </Link>
      <p className="text-neutral-400">
        Hana. A simple, private and secure todo app.
      </p>
    </nav>
  );
}

export default Sidebar;
