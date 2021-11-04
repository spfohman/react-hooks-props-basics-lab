import React from "react";


function Links(props){
    
    return(
        <>
        <h3>Links</h3>
        
        <a href={props.links.github}>GitHub</a>
        <a href={props.links.linkedin}>LinkedIn</a>
        </>
    )
}
export default Links;