import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AcmeColumn from './AcmeColumn';

class Main extends Component {
    constructor(){
        super();
        this.state = {
            employees : [],
            departments : []
        };
        
    }

    async componentDidMount(){
        const res = await axios.get('/api/employees');
        const employees = res.data;
        const res2 = await axios.get('/api/departments');
        const departments = res2.data;
        this.setState({employees, departments})
        console.log(`component did mount ree ${this.state}`);
    }

    render(){
        return(
        <div className='mainDiv'>
           <AcmeColumn employees={this.state.employees} departments={this.state.departments}/>
        </div>  
        );
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('app')
);