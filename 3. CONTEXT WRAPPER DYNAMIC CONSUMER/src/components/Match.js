import { useState, useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

function Match() {
    const {sign} = useContext(HoroscopeContext)
    const [match, setMatch] = useState(false)
    console.log(sign)
    return (
        <>
          <button onClick={() => setMatch(!match)}></button>
          <div>{match ? `Match:${sign.match}` : ""}</div>
        </>
     );
}

export default Match;
