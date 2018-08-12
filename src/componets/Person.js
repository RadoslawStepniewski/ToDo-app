import React from 'react';


const Person =(props)=>{

    return( 
        <div>
            <h1 onClick={props.click}>Cześc {props.name} masz {props.age} lat</h1>
            <p>{props.children}</p>
            <input type="text" onChange={props.change}/>
        </div>
        )

}

export default Person;