import React, { useState }from "react";
import DonateButton from "../components/DonateButton"
import FooterDonate from "../components/FooterDonate";
import Content from '../components/Content'
import workExamples from "../workExamples"

function Wishes (){
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
      setActive(!isActive);
    };


    return (
        <div>
            <div>
                <DonateButton/>
                <header>
                    <div class="banner">
                        <div class="container">
                            <div class="row">
                                <div class="wishesBanner col-10 offset-1 col-md-5">
                                    <div class="wishBannerHeading">Wishes</div>
                                    <div class="wishBannerText">From making unicorns fly, to sending kids to the moon, each child's Wish Journey is carefully planned and delivered to create a positive, lasting impact.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section class="container">
                    <div class="sectionHeader">
                        Hear Their Stories
                    </div>
                    <dl className="dictionary">
                    {workExamples.slice(0, isActive ? 3 : 5).map((wishes) => (
                        <Content
                            key={wishes.id}
                            // Image={wishes.thumbnailImage}
                            Title={wishes.title}
                            // name={work.name}
                            Description={wishes.description}
                        />
                        ))}
                    </dl>
                </section>
                <div class="showMore">
                    <button class="btn btn-primary" onClick={handleToggle}>
                        {isActive ? "Show More" : "Show Less"}
                    </button>
                </div>
                <FooterDonate/>
            </div>
        </div>
    )
}

export default Wishes;