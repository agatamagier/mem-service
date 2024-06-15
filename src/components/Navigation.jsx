import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to={"/regular"}>REGULAR</NavLink>
        </li>
        <li>
          <NavLink to={"/hot"}>HOT </NavLink>
        </li>
        <li>
          <NavLink to={"/add"}>ADD MEM</NavLink>
        </li>
      </ul>
    </div>
  );
};
