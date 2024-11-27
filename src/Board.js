import { useState } from "react"
import Cell from "./Cell";
import './Cell.css'

const Board = () => {
    const [board,setBoard] = useState([true, false, true, false, true])
    ();

    const toggleLight = (index) => {
       console.log ["Cell " + index] 
    }
    


    return (
        <div>
            {board.map((isOn, index) => (
                <Cell key={index} cell={index} isOn={isOn} toggleLight/>
            ))};
        </div>
);

};
export default Board