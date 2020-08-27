import React, { Component } from 'react';
import AcmeElement from './AcmeElement';



// class AcmeColumn extends Component{
//     constructor(props){
//         console.log(props);
//         super();
//         this.state = {
//             employees : [],
//             departments : []
//         }
//     }

//     componentDidMount(){
//         //this.setState({employees:props.employees});
//     }

//     render(){
//         return(
//             <div>hello
//                 {console.log(this.state.employees)}
//             </div> 
            
//         )
//     }
// }

const AcmeColumn = ({departments, employees}) =>{
    //probably should've done this type of mapping in my router with different querying?
    const obj = {};
    departments.forEach(dept => obj[`${dept.department}`]=employees.reduce((acc,employee)=>{
        if(employee.department===dept.department){
            acc.push(employee);
        }
        return acc;
    },[]));
    return(
        Object.keys(obj).map(key=>{
            return (
            <div className='childDiv' id={key}>
            <AcmeElement passedObj={obj[key]} /> 
            </div>
            )
          })
    );
}

export default AcmeColumn;