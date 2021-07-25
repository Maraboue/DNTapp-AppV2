import React, {Component, useEffect,useRef} from 'react';
import VanillaTilt from 'vanilla-tilt';
import './Card.css'
import graph from "../../pictures/IMG_3699.PNG";

function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
        VanillaTilt.init(tilt.current, options);
    }, [options]);

    return <div ref={tilt} {...rest} />;
}

class Cards extends React.Component {

    render () {
        return (
            <section className="team_section" id="team">
                <body>
                <div id="teamHeader" className="teamHeader">
                    <h1 className="gradient-text">Dynamic Network Team</h1>
                </div>
                <div id="cardContainer" className="cardContainer" data-aos="fade-right">

                    <div id="TeamInfo" className="TeamInfo" data-aos="fade-right">
                        <h1>The Dynamic Team</h1>
                        <p>
                            The Dynamic Network Team is a small team with a large vision.
                            Consisting of three computer engineers from the Royal Institute of Technology in Sweden,
                            we have decided to take on the task of reducing volatility and provide a safer store of value
                            for the crypto community.
                        </p>

                    </div>

                    <Tilt div id="card" className="card">
                        <h2>Project Lead & Developer</h2>
                        <img src={graph} alt="loading..." />

                        <h3>Gustaf Sjölinder</h3>



                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.<br/>
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                            making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
                        <a href ="#">Read More</a>
                    </Tilt>
                    <Tilt div id="card" className="card">
                        <h2>Marketing & Design</h2>
                        <img src={graph} alt="loading..." />
                        <h3>Kajsa Gyllhamn</h3>

                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.<br/>
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                        making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
                        <a href ="#">Read More</a>
                    </Tilt>
                    <Tilt div id="card" className="card">
                        <h2>Developer & Advisor</h2>
                        <img src={graph} alt="loading..." />
                        <h3>Carl-Bernhard Hallberg</h3>

                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.<br/>
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                            making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
                        <a href ="#">Read More</a>
                    </Tilt>

                    <Tilt div id="card" className="card">
                        <h2>Marketing & Adivsor</h2>
                        <img src={graph} alt="loading..." />
                        <h3>Philip Retelius</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.<br/>
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                            making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
                        <a href ="#">Read More</a>
                    </Tilt>

                </div>

                </body>

            </section>
        )
    }
} export default Cards;