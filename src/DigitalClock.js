import React, { Component } from 'react';
class Digitalclock extends Component {

    constructor(props){
        super(props)

        this.state={
            currentTime:new Date().toLocaleString()
        }
        this.updateTime();
    }
    updateTime(){
      //const{currentTime}=this.state;
      setInterval(()=>{
        this.setState({currentTime:new Date().toLocaleString()})
      },1000)
    }
  render() {
    return (
      <div className="Digitalclock">
       <h1>{this.state.currentTime}</h1>
       
      </div>
    );
  }
}

export default Digitalclock;