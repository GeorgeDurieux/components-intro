import CodingFactoryLogo from "./CodingFactoryLogo.tsx";
import { Link } from "react-router";

const Header = () => {
    return (
        <>
            <header className='bg-cf-dark-red fixed w-full'>
                <div className="container mx-auto flex items-center justify-between">
                    <CodingFactoryLogo />

                    <nav className='flex gap-4'>
                        <Link
                            className="text-white hover:underline hover:underline-offset-4"
                            to="/"
                        >Home
                        </Link>
                        <Link
                            className="text-white hover:underline hover:underline-offset-4"
                            to="/examples/name-changer"
                        >Name Changer
                        </Link>
                    </nav>

                </div>
            </header>
        </>
    )
}

export default Header