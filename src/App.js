import React, {useState} from 'react';
import "./App.css";
import Header from "./header/header";
import Search from "./search/search";
import Result from "./results/results";

const name=require("@rstacruz/startup-name-generator");

const App = () => {
    const [head, setHead] = useState("Name It!");
    const[inputBool,setInputBool]=useState(false);
    const[suggestedName,setSuggestedName]=useState([]);

    const inputChangeHandler = (inputText) => {
        inputText.length>0?setInputBool(true): setInputBool(false);
        inputText.length>0?setSuggestedName(name(inputText)):setSuggestedName([]);
    }

    return (
        <div>
            <Header heading={head} inputBool={inputBool}/>
            <Search onInputChange={inputChangeHandler}/>
            <Result suggestedName={suggestedName}/>
        </div>
    );
};
export default App;