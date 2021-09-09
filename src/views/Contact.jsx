import React from 'react';
import DonateButton from "../components/DonateButton"
import FooterDonate from '../components/FooterDonate'

const Contact = () => {
    return (
        <div>
            <div>
                <DonateButton/>
            </div>
            <header>
                <h1>
                    Contact Page
                </h1>
            </header>
            <FooterDonate/>
        </div>
    )
}

export default Contact;