import Sidebar from "../components/Sidebar";
import {Link} from "wouter";


function Home() {
  return (
    <div className="p-5">
      <Sidebar />
      <h1 className="font-bold text-5xl">Home</h1>
      <p className="text-neutral-600">This is the home page.</p>
      <ul className="p-5">
        <li>
          <Link className="underline" href="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;