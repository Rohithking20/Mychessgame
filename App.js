import './App.css';
import Board from './components/Board';
import { reducer } from './components/reducer'
import { useReducer } from 'react'
import { initGameState } from './components/constants';
import AppContext from './components/context'
import Control from './components/Control';
import TakeBack from './components/Control/bits/TakeBack';
import MovesList from './components/Control/bits/MovesList';

function App() {

    const [appState, dispatch ] = useReducer(reducer,initGameState);

    const providerState = {
        appState,
        dispatch
    }

    return (
        <AppContext.Provider value={providerState} >
            <div className="App">
                <Board/>
            </div>
        </AppContext.Provider>
    ); 
}

export default App;
