import React from "react";
import style from "./Style.css";
import truckImage from "../../Images/PunjabiTruckingLogo.png";
const navbarArray = [
  {
    icon: <i class="fa-solid fa-phone"></i>,
    navItems: "Contact",
    tooltipMessage: "1-877-806-2525",
  },

  {
    icon: <i class="fa-solid fa-envelope"></i>,
    navItems: "Email",
    tooltipMessage: "info@punjabitruckingusa.com",
  },
  // {
  //   icon: <i class="fa-solid fa-location-dot"></i>,
  //   navItems: "Location",
  //   tooltipMessage: "4709 N El Capitan, Suite #104, Fresno CA 93722",
  // },
];

const Navbar = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      <div className={`${style.navContainer}`}>
        <ul
          id="ul-items"
          style={{
            top: isOpen === true ? "4.9%" : " 6.3%",
            left: isOpen === true ? "69%" : "65%",
          }}
        >
          <div>
            <img
              className="truckImage"
              // src={`https://www.pngall.com/wp-content/uploads/2016/09/Cargo-Truck-Download-PNG.png`}
              src={truckImage}
              alt="headerImage"
            />
          </div>
          {navbarArray?.map((data) => (
            <li className="overflow-hidden cursor-pointer" id="li-items">
              <a>
                <div className="toltip">
                  <div className="Pulsate">
                    <div className="icon">
                      <div className="">{data?.icon}</div>
                      <div className="">{data?.icon}</div>
                    </div>
                    <div className="rxtooltip">{data?.tooltipMessage}</div>
                  </div>
                </div>

                <div className="name ">
                  <span datatype={data?.navItems}>{data?.navItems}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
