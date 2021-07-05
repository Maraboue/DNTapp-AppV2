import 'aos/dist/aos.css';
import React, {Component} from "react";

import './Community.css'

class Community extends Component {

    render() {

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
                </div>
                <div id="CommunityItem" className="CommunityItem">
                    <h2>DNT Transactions</h2>
                </div>

            </div>

            </body>
        )

    }


} export default Community;