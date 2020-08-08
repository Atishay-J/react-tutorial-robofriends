import React, { Fragment, Component } from 'react';
import Cardlist from './Cardlist';
import { robots } from './robots';
import Searchbox from './Searchbox';


class App extends Component {

    constructor(){
        super()
        this.state = {
            robotName : robots,
            searchfield : ''
        }
    }

onsearchChange = (event) => {
    this.setState( {searchfield: event.target.value })
    
    
}


    render() {
        const filteredRobots = this.state.robotName.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <Searchbox searchChange = {this.onsearchChange}/>
                <Cardlist robots={filteredRobots} />
            </div>
        );
    }
}


export default App;