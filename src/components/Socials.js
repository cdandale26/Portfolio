import React from "react";
import CV from "../assets/Resume/ChaitaliDSoftware_Engineer.pdf";

// import icons
import { social } from "../data";

const Socials = () => {
  return (
    <ul className="flex space-x-6 ">
      {social.map((item, index) => {
        return (
          <li
            className="flex justify-center items-center text-accent"
            key={index}
          >
            {item.href === "" ? (
              <a className="text-base" href={CV} download={CV}>
                {item.icon}
              </a>
            ) : (
              <a className="text-base" href={item.href}>
                {" "}
                {item.icon}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
