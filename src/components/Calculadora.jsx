import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import { useState } from "react";
import './Calculadora.css';

const Calculadora = () => {
    const [num, setNum] = useState(0);

    function handleClick(e) {
        let input = e.target.value;
        if (num === 0) {
            setNum(input)
        } else {
            setNum(num + input)
        }
    }
    function clearDisplay() {
        setNum(0)
    }

    return (
        <div className="container">
            <Box m={5} />
            <h1 className="title">Calculadora</h1>
            <Container maxWidth='xs'>
                <div className="wrapper">
                    <Box m={5} />
                    <div className="resultado">{num}</div>
                    <div className="btnsCalculadora">
                        <button className="btnSuperior" onClick={clearDisplay}>AC</button>
                        <button className="btnSuperior">+/-</button>
                        <button className="btnSuperior">%</button>
                        <button className="btnLateralDireita">/</button>
                        <button className="btnNumPad" onClick={handleClick} value={7} >7</button>
                        <button className="btnNumPad">8</button>
                        <button className="btnNumPad">9</button>
                        <button className="btnLateralDireita">X</button>
                        <button className="btnNumPad">4</button>
                        <button className="btnNumPad">5</button>
                        <button className="btnNumPad">6</button>
                        <button className="btnLateralDireita">-</button>
                        <button className="btnNumPad">1</button>
                        <button className="btnNumPad">2</button>
                        <button className="btnNumPad">3</button>
                        <button className="btnLateralDireita">+</button>
                    </div>
                    <div className="btnsUltimaFileira">
                        <button className="btnNumPad btnZero">0</button>
                        <button className="btnNumPad">,</button>
                        <button className="btnLateralDireita"> = </button>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default Calculadora;