import Link from "next/link";
import React from "react";

import { CalendarIcon } from "@radix-ui/react-icons";
import { Button } from "./Button";
import { Calendar } from "lucide-react";

const MainNav = () => {
  return (
    <nav className="flex flex-row w-full h-full m-auto max-w-2xl p-3 justify-between sticky top-0 z-50 bg-white border rounded-b-md">
      <Button variant="outline">Menu</Button>
      <Link href="/">
        <Button variant="outline">
          {/* <CalendarIcon className="w-6 h-6 text-primary" /> */}
          <Calendar />
        </Button>
      </Link>
    </nav>
  );
};

export default MainNav;
