import React from "react";
import ExampleChildrenWrapper from "./style";

const ExampleChildren = (props)=>{ // properties coming from the main.jsx
    return(
        <ExampleChildrenWrapper>
            {props.children}
        </ExampleChildrenWrapper>
    )
}

export default ExampleChildren;