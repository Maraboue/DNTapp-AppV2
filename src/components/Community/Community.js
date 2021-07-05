import 'aos/dist/aos.css';
import React, {Component, useEffect, useState} from "react";
import axios from 'axios';
import './Community.css'
import './Coin.css'


function Community() {

    const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"

    const [price, setPrice] = useState({});


    useEffect(() => {
        getPrice();
    }, []);


    const getPrice = async () => {

        const response = await axios.get(url);
        setPrice(response.data);

    };

            return (

                <body>
                <div id="CommunityHeader" className="CommunityHeader">
                    <h1 className="gradient-text">Dynamic Network Community</h1>
                </div>
                <div id="CommunityContainer" className="CommunityContainer">
                    <div id="CommunityItem" className="CommunityItem">
                        <h2>DNT Holders</h2>

                    </div>
                    <div id="CommunityItem" className="CommunityItem">
                        <h2>DNT Price</h2>

                        <ul>
                            {
                                JSON.stringify(price.bitcoin.usd)
                            } $USD

                        </ul>
                    </div>
                    <div id="CommunityItem" className="CommunityItem">
                        <h2>DNT Transactions</h2>

                    </div>

                </div>

                </body>
            );

} export default Community;