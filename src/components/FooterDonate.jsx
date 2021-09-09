import React from 'react';

const FooterDonate = () => {
    return (
        <div class="footerDonateContainer">
            <div class="container">
                <div class="footerHeader">
                    <a class="navbar-brand" href="/">
                    <img src="%PUBLIC_URL%/images/Rafiki-Yangu-Logo.png" class="nav-logo image"></img>
                    <img src="%PUBLIC_URL%/images/Rafiki-Yangu-Text.png" class="nav-text"></img>
                    </a>
                    <a class="footerDonateButton" href="/Donate">
                    <button type="button" class="btn btn-primary btn-lg btn-dark">Donate</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FooterDonate;
