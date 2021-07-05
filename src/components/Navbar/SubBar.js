import React, { Component } from 'react';
import { items } from "./Items";
import {Link} from "react-router-dom";
import styled from "styled-components";

const SideBarLink = styled(Link)`
    display: flex;
    color: #fff;
`;

const SideBarLabel = styled.span``;


const SubBar  = ({item}) =>{

    return (
        <>
            <SideBarLink to={item.path}>
                <div>
                    {item.icon}
                    <SideBarLabel>
                        {item.title}
                    </SideBarLabel>

                </div>
            </SideBarLink>
            </>

    )


}
export default SubBar;