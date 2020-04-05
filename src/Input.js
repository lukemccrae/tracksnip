import React from 'react';
import styled from 'styled-components';
import Slider from 'react-input-slider';
import MapWindow from './MapWindow';
import {Grid, Row, Col} from './Grid';

class Input extends React.Component {
    constructor(props) {
      console.log(props);
      
      super(props);
      this.state = {
        value: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      

    }

    componentWillReceiveProps(newProps) {
      this.setState({value: newProps.value});
  }
  
    handleChange(event) {      
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      event.preventDefault();
      this.props.gpxToJson(this.state.value)
      this.props.resetSlider();
    }
  
    render() {
      return (
        <Grid>
          <form onSubmit={this.handleSubmit}>
            <Row>
              <Col size={1}></Col>
                <textarea rows="10" cols="50" type="text" value={this.state.value} onChange={this.handleChange} />
              <Col size={1}></Col>
            </Row>
            <Row>
              <Col size={1}></Col>  
                <input type="submit" value="Load Track" />
              <Col size={1}></Col>
            </Row>
          </form>
          <Row>
            <Col size={1}></Col>
              <Slider
                axis="x"
                xstep={0.01}
                xmin={0}
                xmax={1}
                x={this.props.x}
                onChange={({ x }) => this.props.moveSlider(x)}
              />
            <Col size={1}></Col>
          </Row>
          <Row>
            <Col size={1}></Col>
              <button onClick={() => {this.props.jsonToGpx()}} value="Snip">Snip</button>
            <Col size={1}></Col>
          </Row>


        </Grid>
      );
    }
  }

  export default Input;