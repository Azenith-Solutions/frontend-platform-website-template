import React from "react";
import ExampleParametersWrapper from "./styled";

const ExampleParameters = (props)=>{
    return (
        <ExampleParametersWrapper>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </ExampleParametersWrapper>
    )
}

export default ExampleParameters;