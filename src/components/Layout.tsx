import * as React from "react";
import Footer from "./Footer.tsx";
import HeaderResponsive from "./HeaderResponsive.tsx";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
    return (
        <>
            <HeaderResponsive />
            <div className="container mx-auto min-h-[96vh] pt-24">
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout;