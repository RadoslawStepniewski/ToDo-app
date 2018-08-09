import React from 'react';


const Person =(props)=>{

    return <div>
        <h1>Cześc {props.name} masz {props.age} lat</h1>
        <p>{props.children}</p>
        </div>
}

export default Person;