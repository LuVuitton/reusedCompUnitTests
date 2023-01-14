import React from "react";

type ReusButtonType = {
    title:string
    callback:()=>void
}

export const ReusButton = (props:ReusButtonType)=> {

    const onClickHandler = ()=>{
        props.callback()
    }

    return <button onClick={onClickHandler}>{props.title}</button>
}
