import './App.css';
import React, {useState} from "react";
import Time from "./component/useState/time";
import Input from "./component/useState/input";
import UseEffectTest from "./component/useEffect/useEffect";
import CleanUp from "./component/useEffect/cleanUp";

function App() {

    return (<div>
        <Time></Time>
        <Input></Input>
        <hr/>
        <UseEffectTest></UseEffectTest>
        <hr/>
        <CleanUp></CleanUp>
    </div>);
}

export default App;
