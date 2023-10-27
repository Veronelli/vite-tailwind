import React from "react";
import { NavLink } from "react-router-dom";
import { TGlobalContext, globalContext } from "../../contexts";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";

function Navbar() {
  const activeStyle = "underline";
  const { count, openCheckoutDetail } = React.useContext<TGlobalContext>(globalContext);

  return (
    <nav className="flex bg-white justify-between items-center fixed z-10 w-full py-5 px-8 font-light text-sm top-0">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink
            to="/"
            className={({ isActive }: any) =>
              isActive ? activeStyle : undefined
            }
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }: any) =>
              isActive ? activeStyle : undefined
            }
            to="/"
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }: any) =>
              isActive ? activeStyle : undefined
            }
            to="/clothes"
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }: any) =>
              isActive ? activeStyle : undefined
            }
            to="/electronics"
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }: any) =>
              isActive ? activeStyle : undefined
            }
            to="/furnitures"
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }: any) =>
              isActive ? activeStyle : undefined
            }
            to="/toys"
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }: any) =>
              isActive ? activeStyle : undefined
            }
            to="/others"
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li>facu2000veronelli@outlook.com</li>
        <li>
          <NavLink
            className={({ isActive }: any) =>
              isActive ? activeStyle : undefined
            }
            to="/my-orders"
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }: any) =>
              isActive ? activeStyle : undefined
            }
            to="/my-account"
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }: any) =>
              isActive ? activeStyle : undefined
            }
            to="/sign-in"
          >
            Sign In
          </NavLink>
        </li>
        <li>
          <button

            className={({ isActive }: any) =>
              isActive ? activeStyle : undefined
            }
            onClick={openCheckoutDetail}
          >
            <div className="flex">
              <ShoppingCartIcon className="w-6 h-6 text-black mr-2"></ShoppingCartIcon>{" "}
              {count}
            </div>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };
