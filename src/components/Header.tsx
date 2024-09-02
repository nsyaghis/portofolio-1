import Link from "next/link"
import { Button } from "./ui/button"

//components 
import Nav from "./Nav"; 
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <a href="/">
          <h1 className="text-4xl font-semibold">
           nsyaghis<span className="text-accent"></span>
          </h1>
        </a>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav /> {/* Panggil komponen Nav dengan huruf kapital */}
          <a href="/contact">
            <Button>Connect</Button>
          </a>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />

        </div>
      </div>
    </header>
  );
};

export default Header;