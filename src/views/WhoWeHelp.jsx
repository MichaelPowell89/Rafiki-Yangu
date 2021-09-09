import React from "react";
import DonateButton from "../components/DonateButton"
import FooterDonate from "../components/FooterDonate"

function WhoWeHelp (){
    return (
        <div>
            <div>
                <DonateButton/>
            </div>
            <header>
                <h1>
                    Who We Help Page
                </h1>
            </header>
            <FooterDonate/>
        </div>
    )
}

export default WhoWeHelp;