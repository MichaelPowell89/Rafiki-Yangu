import React from "react";
import DonateButton from "../components/DonateButton"
import FooterDonate from "../components/FooterDonate"

function HowYouHelp (){
    return (
        <div>
            <div>
                <DonateButton/>
            </div>
            <section>
                <div class="banner">
                    <div class="container">
                        <div class="howYouHelpHeader">
                            How you can support
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-4 content-container">
                            {/* Add Image Here */}
                            <div class="placeHolder"></div>
                            <div class="ContentHeading centreAlign">
                                Donate 
                            </div>
                            <div class="ContentText centreAlign">
                                You can donate through 
                                monetary support or 
                                offering your time. This 
                                will help us provide to 
                                more families in need.
                            </div>
                        </div>
                        <div class="col-4 content-container">
                            {/* Add Image Here */}
                            <div class="placeHolder"></div>
                            <div class="ContentHeading centreAlign">
                                Specialty
                            </div>
                            <div class="ContentText centreAlign">
                                Do you have a 
                                specialty that can 
                                bring joy to a person 
                                or family? We would 
                                love to hear more!
                            </div>   
                        </div>
                        <div class="col-4 content-container">
                            {/* Add Image Here */}
                            <div class="placeHolder"></div>
                            <div class="ContentHeading centreAlign">
                                Business
                            </div>
                            <div class="ContentText centreAlign">
                                Are you a business 
                                that can donate items 
                                of goods or services 
                                that will bring joy to 
                                families in need? 
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterDonate/>
        </div>
    )
}

export default HowYouHelp;