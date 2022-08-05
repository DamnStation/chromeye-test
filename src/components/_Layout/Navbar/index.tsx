import { Link, Outlet } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to={"/"}>
            <a className="btn btn-ghost normal-case text-xl">Chromeye</a>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to={"/task-pagination"}>Pagination Task</Link>
            </li>
            <li>
              <Link to={"/prime-dividers"}>Prime Dividers</Link>
            </li>
            <li>
              <Link to={"/validate-brackets"}>Validate Brackets</Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
