import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import './App.css';
import {Money} from "./Money";


function App() {

    const showInputValueOnMainScreen = (inputValue:string)=>{
        console.log('showInputValueOnScreen ' + inputValue)
    }

    return (
        <div className="App">
            {/*<MainScreen/>*/}
            <Money/>
            <ReusInput callback={showInputValueOnMainScreen}/>
        </div>
    );
}

export default App;


type ReusInputType = {
    callback: (inputValue:string) => void
}
const ReusInput = (props: ReusInputType) => {
    const [inputValue, setInputValue] = useState('')

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)

    }
    const onPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            props.callback(inputValue)
        }
    }

    return <input onChange={onChangeInputHandler} onKeyPress={onPressHandler} placeholder={'then press enter'}/>
}