import './Files.css'
import {getCharacter} from './help'

const Files = ({files}) => 
    <div className="files">
        {files.map(file => <span key={file}>{getCharacter(file)}</span>)}
    </div>

export default Files