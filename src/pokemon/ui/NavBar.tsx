import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-black">
      <ul className=" flex h-16 max-w-6xl m-auto text-white items-center">
        <div className=" mx-5 font-bold text-[25px]  ">
          P<span className="text-orange-600">O</span>KE
          <span className="text-orange-600 text-[29px]">APP</span>
        </div>
        <li className="mx-5 text-lg">
          <Link to="/">Home</Link>
        </li>

        <li className="mx-5 text-lg">
          <Link to="search">Search</Link>
        </li>
        <li className="mx-5 text-lg     ">
          <Link to="favorites">favorites</Link>
        </li>
        {/* <li className="mx-5">
          <a href="">favorites</a>
        </li>
        <li className="mx-5">
          <a href="">favorites</a>
        </li> */}
      </ul>
    </div>
  );
};

export default NavBar;
