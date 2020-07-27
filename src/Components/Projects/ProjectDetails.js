import React, { Component } from 'react'

 const ProjectDetails =(props)=>{
     const id = props.match.params.id;
    return (
        <div className="container section Notification-Title">
            <div className="card z depth-0">
                <div className="card-content">
                    <span className="card-title">Notification Title-{id}</span>
                    <p> bfyufcuifwhhfofjijfnm</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>posted bt thobby</div>
                    <div>2nd septemmber</div>
                </div>
            </div>
            
        </div>
    )
 }
   

export default ProjectDetails
