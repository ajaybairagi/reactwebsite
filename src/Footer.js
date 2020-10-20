import React from 'react';

const Footer = () => {
    let year = new Date().getFullYear();
    return (
        <>
            <footer className="w-100 bg-light text-center">
             © {year} ThapaTechnical. All Rights Reserved | Terms and Conditions
            </footer>
        </>
    )
}

export default Footer;