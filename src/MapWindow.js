import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer, Polyline} from "react-leaflet";
import {Grid, Row, Col} from './Grid';
import styled from 'styled-components';

const MapWrapper = styled.div`
    margin: 10px;
    border: solid 1px black;
`

function  MapWindow(props) {
    if(props.centerLatLng) {
        return (
                    <MapWrapper>
                        <Map center={props.centerLatLng} zoom={15}>
                            <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Polyline positions={props.points}></Polyline>
                        </Map>
                    </MapWrapper>
        );
    }
    else {
        return (
            <div>No track data submitted - Paste your GPX data above.</div>
        )
    }
  }
  
  export default MapWindow;
  
