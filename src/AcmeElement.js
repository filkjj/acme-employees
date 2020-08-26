import React from 'react';
import axios from 'axios';

const deleteUser = async ({id, department}) =>{
    axios.delete(`/api/employees/${id}`);
    document.getElementById(department).removeChild(document.getElementById(id));
}

// class AcmeElement extends Component{
//     constructor({passedObj}){
//         super();
//         this.state = {
 
//         };
//     }
// }

const AcmeElement = ({passedObj}) =>{
    return (
        passedObj.map(ele=>{
           return( 
            <div id={ele.id}>
            {ele.name}
            <button onClick={()=>{deleteUser(ele)}}>Delete User!</button>
            </div>)
        })
    );
}

export default AcmeElement;