import { NavLink } from "react-router-dom";

function Navbar() {
    const activeStyle = "underline";
    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 font-light text-sm top-0">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink
                        to="/"
                        className={({isActive}: any) => isActive ? activeStyle : undefined}
                        >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({isActive}: any) => isActive ? activeStyle : undefined}
                        to="/">
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({isActive}: any) => isActive ? activeStyle : undefined}
                        to="/clothes">
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({isActive}: any) => isActive ? activeStyle : undefined}
                        to="/electronics">
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({isActive}: any) => isActive ? activeStyle : undefined}
                        to="/furnitures">
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({isActive}: any) => isActive ? activeStyle : undefined}
                        to="/toys">
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({isActive}: any) => isActive ? activeStyle : undefined}
                        to="/others">
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li>
                    facu2000veronelli@outlook.com
                </li>
                <li>
                    <NavLink
                        className={({isActive}: any) => isActive ? activeStyle : undefined}
                        to="/my-orders">
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({isActive}: any) => isActive ? activeStyle : undefined}
                        to="/my-account">
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({isActive}: any) => isActive ? activeStyle : undefined}
                        to="/sign-in">
                        Sign In
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({isActive}: any) => isActive ? activeStyle : undefined}
                        to="/furnitures">
                        🛒 0
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export { Navbar }