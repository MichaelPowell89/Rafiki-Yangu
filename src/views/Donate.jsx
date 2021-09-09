import React from 'react';
import Donations from '../components/Donations'

const Donate = () => {
    return (
        <div class="pageContent">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="row">
                            <img src="images/Rafiki-Yangu-Logo.png" class="donationLogo"></img>
                        </div>
                        <div class="row">
                            <p class="donationText">You can put a brief description about your organisation here. Keep your sentences short and snappy, remember web visitors will skim read!</p>
                            <p class="donationText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ad bona praeterita redeamus. Cur tantas regiones barbarorum pedibus obiit, tot maria transmisit? Duo Reges: constructio interrete.</p>
                        </div>
                    </div>
                    <div class="col">
                        <Donations/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donate;