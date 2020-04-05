import React, {Component} from 'react';
import Input from './Input';
import MapWindow from './MapWindow';
import Nav from './Nav';
import {Grid, Row, Col} from './Grid';
import styled from 'styled-components';



const MapWrapper = styled.div`
`




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 100,
      value: ''
    };
    this.jsonToGpx = this.jsonToGpx.bind(this);
    this.gpxToJson = this.gpxToJson.bind(this);
    this.moveSlider = this.moveSlider.bind(this);
    this.resetSlider = this.resetSlider.bind(this);
  }

  componentDidMount() {

  }

  resetSlider() {
    this.setState({
      x: 100
    })
  }

  jsonToGpx() {
    //new path
    let toGpx = this.state.data;
    toGpx.features[0].geometry.coordinates = this.state.points;
    this.setState({
      data: toGpx
    })

    //add snipped points to new path here
    fetch('https://banana-crumble-42815.herokuapp.com/gps/togpx', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        track: toGpx
      })
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.setState({
          value: data.gpx
        })
        
        
      })
      .catch((error) => {
      console.error('Error:', error);
    });
  }

  gpxToJson(gpx) {
    fetch('https://banana-crumble-42815.herokuapp.com/gps/togeojson', {
      method: 'POST',
      headers: {
          'Content-Type': 'text/xml; charset=utf-8',
      },
      body: gpx
      })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          //all data returned from server
          data: data.geoJson,

          //entire original path
          path: data.geoJson.features[0].geometry.coordinates,

          //points that will get snipped
          points: data.geoJson.features[0].geometry.coordinates,

          //make center of the map the final point of the last gps entry of the track
          centerLatLng: [data.geoJson.features[0].geometry.coordinates[data.geoJson.features[0].geometry.coordinates.length-1][0],data.geoJson.features[0].geometry.coordinates[data.geoJson.features[0].geometry.coordinates.length-1][1]]
        })
        
      })
      .catch((error) => {
      console.error('Error:', error);
    });
  }

  moveSlider(x) {
    this.setState({ 
      x: parseFloat(x.toFixed(2)),
      points: this.state.path.slice(0,parseFloat(x.toFixed(2))*this.state.path.length)
    })
  }


  render(props) {
    
    return (
      <Grid>
        <Row>
          <Nav></Nav>
        </Row>
        <Input x={this.state.x} value={this.state.value} resetSlider={this.resetSlider} moveSlider={this.moveSlider} gpxToJson={this.gpxToJson} jsonToGpx={this.jsonToGpx}></Input>
        <MapWindow value={this.state.value} points={this.state.points} centerLatLng={this.state.centerLatLng}></MapWindow>
      </Grid>
    );
  }
}

export default App;