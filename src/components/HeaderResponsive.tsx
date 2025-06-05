import CodingFactoryLogo from "./CodingFactoryLogo.tsx";
import { Link } from "react-router";
import {useState} from "react";
import {Menu, X} from "lucide-react";

const HeaderResponsive = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header className='bg-cf-dark-red fixed w-full'>
                <div className="container mx-auto flex items-center justify-between">
                    <CodingFactoryLogo />

                    <button
                        className="text-white md:hidden pr-4"
                        onClick={()  => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={36} /> : <Menu size={36} />}
                    </button>

                    <nav className={`${menuOpen ? "block" : "hidden"} md:flex md:w-auto md:static gap-4 absolute top-24 left-0 bg-cf-dark-red text-white w-full p-4 md:p-0`}>
                        <Link
                            className="block md:inline hover:underline hover:underline-offset-4"
                            to="/"
                            onClick={()  => setMenuOpen(false)}
                        >Home
                        </Link>
                        <Link
                            className="block md-inline hover:underline hover:underline-offset-4"
                            to="/examples/name-changer"
                            onClick={()  => setMenuOpen(false)}
                        >Name Changer
                        </Link>
                    </nav>

                </div>
            </header>
        </>
    )
}

export default HeaderResponsive