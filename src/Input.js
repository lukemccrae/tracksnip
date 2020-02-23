import React from 'react';

class Input extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
      console.log(this.state);
      
    }
  
    handleSubmit(event) {
      event.preventDefault();

      fetch('http://localhost:3000/gps/convert', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'text/xml; charset=utf-8',
        },
        body: this.state.value
        })
        .then((response) => response.json())
        .then((data) => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
      });
    }

    
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <textarea rows="10" cols="50" type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default Input;