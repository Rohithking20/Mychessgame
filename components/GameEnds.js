import { Status } from './constants';
import { useAppContext } from './context';
import { setupNewGame } from './game';
import './GameEnds.css';

const GameEnds = ({ onClosePopup }) => {
    const { appState: { status }, dispatch } = useAppContext();

    if (status === Status.ongoing || status === Status.promoting)
        return null;

    const newGame = () => {
        dispatch(setupNewGame());
    };

    const isWin = status.endsWith('wins');
    const winner = isWin ? (status.startsWith('white') ? 'White' : 'Black') : 'Nobody';
    
    // Display a simple alert message indicating the winner or draw
    window.alert(isWin ? `${winner} wins!` : 'It\'s a draw.');

    return (
        <div className="popup--inner popup--inner__center">
            {/* This part won't be rendered as the alert will take precedence */}
            {/* <h1>{isWin ? status : 'Draw'}</h1>
            <p>{!isWin && status}</p>
            <div className={`${status}`} />
            <button onClick={newGame}>New Game</button> */}
        </div>
    );
};

export default GameEnds;
