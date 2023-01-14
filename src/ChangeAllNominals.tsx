
type MainScreenType = {
    value: string
};


export const MainScreen = (props:MainScreenType) => {

    return (
        <div className={'mainScreen'}>
            {props.value}
        </div>
    )
};



