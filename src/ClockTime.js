import { Component } from "react";

export default class ClockTime extends Component {
    constructor(props){
        super(props);
        this.state = {
            time:new Date().toLocaleTimeString()
        }
    }

componentDidMount(){
    this.timerID = setInterval (() => 
    this.tick(),1000)
}

componentWillUnmount(){
    clearInterval(this.timerID)
}

tick(){ 
    this.setState({
        time: new Date().toLocaleTimeString()
    })
}
    render() {
        return (
        <h2>{this.state.time}</h2>
        )
    }
}
