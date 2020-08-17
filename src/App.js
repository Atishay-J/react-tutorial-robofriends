import React, { Fragment, Component } from 'react';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import Scrollable from './Scroll';


    class App extends Component {

    constructor(){
        super()
        this.state = {
            robotName : [],
            searchfield : ''
        }
    }


componentDidMount(){
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => this.setState({robotName : users}));
    
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
                
                <Scrollable>

                <Cardlist robots={filteredRobots} />
                
                </Scrollable>
            </div>
        );
    }
}


export default App;