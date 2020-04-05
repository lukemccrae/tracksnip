import React, {Component} from 'react';
import "./index.css";
import styled from 'styled-components';

class Route extends Component {
  constructor(props) {
    super(props)
    this.state = {
      path: []
    };



    console.log(props);
  }

  componentDidMount() {
    this.setState({
      path: this.props.path
    })
  }


  render(props) {
    
    return (
      <div></div>
      // <MapWrapper>
      //   <Map center={[45.4, -75.7]} zoom={15}>
      //   <TileLayer
      //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      //     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      //   />
      //   </Map>
      // </MapWrapper>
    );
  }
}

export default Route;