const Footer = () => {
    const currentYear: number = new Date().getFullYear()
    return (
        <>
            <footer className="bg-cf-gray">
                <div className="text-white text-center py-4">
                    Copyright © {currentYear}, Coding Factory 7. All right reserved.
                </div>
            </footer>
        </>
    )
}

export default Footer;