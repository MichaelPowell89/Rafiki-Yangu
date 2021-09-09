import React from "react";
import DonateButton from "../components/DonateButton"
import FooterDonate from "../components/FooterDonate"

function About (){
    return (
        <div>
            <div>
                <DonateButton/>
            </div>
            {/* Page Banner */}
            <header>
                    <div class="banner">
                    {/* Add Image here */}
                        <div class="container">
                            <div class="row">
                                <div class="wishesBanner col-10 offset-1 col-md-5">
                                       <div class="wishBannerHeading">About Rafiki Yangu</div>
                                       <div class="wishBannerText">
                                       Rafiki Yangu is a not-for-profit organisation aimed at helping and/or making a positive impact 
                                       for disadvantaged kids/families that are going through a hard time.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page content */}
                {/* Content 01 - Text Align Left*/}
                <section class="container">
                    <div class="row">
                        <div class="wishesBanner content-col col-12 col-md-10 col-xl-5 offset-xl-0">
                            <div class="ContentHeading">Inspiration</div>
                                <div class="ContentText">
                                Rafiki Yangu means ‘My friend’ in Swahili. Our team were fortunate enough to travel to 
                                Africa for a few months and it was a word that has stuck with us since then.
                                <br/>
                                <br/>
                                Rafiki Yangu also ties into a quote that resonates with us and is part of the inspiration behind this 
                                whole idea of giving back and helping others in need.
                                </div>
                        </div>
                        <div class="image-col d-xl-flex col-xl-6 offset-xl-1 breakout-image">
                        {/* Add Image Here */}
                        {/* <image class="image image--bg"/> */}
                        </div>
                    </div>
                </section>

                {/* Content 02 - Text Align Right*/}
                <section class="container">
                    <div class="row">
                        <div class="wishesBanner content-col col-12 col-md-10 col-xl-5 offset-xl-1 order-xl-1">
                            <div class="ContentHeading">Founder</div>
                                <div class="ContentText">
                                This concept evolved from my community engagement 
                                experience. This started back in high school where I was 
                                involved with Jim Stynes REACH program and more recently 
                                as a firefighter with Fire Rescue Victoria and a volunteer with 
                                the disability support service Gateways.
                                <br/>
                                <br/>
                                I have learnt a lot in these roles and have been able to 
                                identify areas where I believe we can make a difference. I 
                                decided to start something from the ground up but it would 
                                be nothing more than an idea still if I hadn't received the help 
                                from my close friends and other members of RY. Collectively 
                                as a team, we have made something that we believe can do a 
                                lot of good and spread a lot of joy to those who need it most 
                                and hopefully create a positive experience in their lives
                                </div>
                        </div>
                        <div class="image-col d-xl-flex col-xl-6  breakout-image">
                        {/* Add Image Here */}
                        {/* <image class="image image--bg"/> */}
                        </div>
                    </div>
                </section>

                {/* Content 03 - Text Align Right*/}
                <section class="container">
                    <div class="row">
                        <div class="wishesBanner content-col col-12 col-md-10 col-xl-5 offset-xl-0">
                            <div class="ContentHeading">Why Rafiki Yangu?</div>
                                <div class="ContentText">
                                There are so many people that are falling through the cracks of society. Volunteering 
                                at Gateways, we have noticed that whilst disadvantaged kids receive NDIS funding, 
                                some of the carers or family members do not. This is where Rafiki Yangu fills the 
                                gap. We want to make them feel noticed, special and valued. We want to say 
                                thanks and we see YOU.
                                <br/>
                                <br/>
                                Rafiki Yangu is made up of 6 volunteers. We are not special in any way which is the whole 
                                point that we want to get across. You don’t have to be special to be able to make a 
                                difference in someone's life that is going through a hard time. Sometimes it's the small 
                                things that make the biggest difference.
                                <br/>
                                <br/>
                                Our input is tailored to the specific families, individuals or groups we choose to help and 
                                their needs and desires. Internally we are fully transparent with collective decision 
                                making and sign off on all decisions and financials.
                                </div>
                        </div>
                        <div class="image-col d-xl-flex col-xl-6  breakout-image">
                        {/* Add Image Here */}
                        {/* <image class="image image--bg"/> */}
                        </div>
                    </div>
                </section>


            <FooterDonate/>
        </div>
    )
}

export default About;