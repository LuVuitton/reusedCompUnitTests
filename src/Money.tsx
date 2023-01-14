import React, {useState} from 'react';
import './App.css';



type BanknotesType = 'all' | 'euro' | 'dollar'

function App() {


    return (
        <div className="App">
            <Money/>
        </div>
    );
}


const Money = () => {

        let initState = [
            {id: 1, banknote: 'dollar', nominal: 100},
            {id: 1, banknote: 'dollar', nominal: 50},
            {id: 1, banknote: 'dollar', nominal: 20},
            {id: 1, banknote: 'euro', nominal: 200},
            {id: 1, banknote: 'euro', nominal: 100},
            {id: 1, banknote: 'euro', nominal: 500},
            {id: 1, banknote: 'uah', nominal: 500},
        ];
        const [filterValue, setFilterValue] = useState<BanknotesType>('all')

    if (filterValue === 'dollar') {
        initState = initState.filter(e => e.banknote === 'dollar')
    }
    if (filterValue === 'euro') {
        initState = initState.filter(e => e.banknote === 'euro')
    }

    const onClickHandler = (x: BanknotesType) => {
        setFilterValue(x)
    }

    return (
        <>
            {
                initState.map((e, i) => {
                    return (
                        <li key={i}>
                            <span>{e.nominal}</span>
                            <span>{e.banknote}</span>
                        </li>
                    )
                })
            }
            <button onClick={() => onClickHandler('dollar')}>dollar</button>
            <button onClick={() => onClickHandler('euro')}>euro</button>
            <button onClick={() => onClickHandler('all')}>all</button>
        </>
    )
}

export default App;
