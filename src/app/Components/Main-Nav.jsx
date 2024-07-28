import { CalendarIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Calendar from "./ui/Calendar";
import { useState } from "react";

export default function Nav({ showNav, setShowNav, handleShowNav }) {
  return (
    <header className="navigation">
      <div className="nav-item" onClick={handleShowNav}>
        <HamburgerMenuIcon setShowNav={setShowNav} showNav={showNav} />
      </div>
      <div className="nav-item">
        <CalendarIcon />
      </div>
    </header>
  );
}
