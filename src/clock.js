// function Clock() {
//     return <p>Hi-Clock</p>
// }
// export default Clock;



import { Component } from "react";
export default class Clock extends Component {
    constructor() {
        super();
this.state = {
    time: new Date().toLocaleTimeString()
}
    }
    componentDidMount() {
        this.timerID = setInterval(() =>
        this.tick(), 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timerID)
    }
    tick() {
        this.setState({
            time: new Date().toLocaleTimeString()
        })
    }
    render() {
        return(
            <div className="Time">
                <p>{this.state.time}</p>
                </div>
        )
    }

}