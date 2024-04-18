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
    
    window.alert(isWin ? `${winner} wins!` : 'It\'s a draw.');

    return (
        <div className="popup--inner popup--inner__center">
            
        </div>
    );
};

export default GameEnds;
