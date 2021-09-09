import React from 'react';
import Content from '../components/Content'
import workExamples from "../workExamples"
import DonateButton from "../components/DonateButton"
import FooterDonate from '../components/FooterDonate';

const Home = () => {
    return (
        <div>
            <DonateButton/>
            <header>
                <h1>Home Page</h1>
            </header>
            {/* <dl className="dictionary">
            {workExamples.map((work) => (
                <Content
                    key={work.id}
                    gameTitle={work.title}
                    // name={work.name}
                    // description={work.meaning}
                />
                ))}
            </dl> */}
            <FooterDonate/>
        </div>
    )
}

export default Home;