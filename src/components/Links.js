import React from "react";
import user from "../data/user";

function Links(props){
    return(
        <>
        <h3>Links</h3>
        <a href={user.links.github[0]}>GitHub</a>
        <a href={user.links.linkedin[1]}>LinkedIn</a>
        </>
    )
}
export default Links;