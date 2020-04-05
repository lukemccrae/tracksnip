import React, {Component} from 'react';
import {Grid, Row, Col} from './Grid';
import styled from 'styled-components';

const Title = styled.div`
`

const NavBox = styled.div`
    height: 30px;
    background-color: #5e72e4;
    width: 100%;
    border-bottom: 1px solid black;

`



function Nav(props) {
    return (
        <NavBox>
            <Row>
                <Col size={1}></Col>
                <Col size={5}>TrackSnip</Col>
                <Col size={2}></Col>
            </Row>
        </NavBox>
    );
}
  
export default Nav;
  
