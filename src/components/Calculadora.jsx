import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import { useState } from "react";
import './Calculadora.css';

const Calculadora = () => {
    const [num, setNum] = useState(0);
    const [numAntigo, setNumAntigo] = useState(0);
    const [operador, setOperador] = useState();
    // let res = document.getElementsByClassName(".resultado");

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

    function porcetagem() {
        setNum(num / 100)
    }

    function trocarOperador() {
        if (num > 0) {
            setNum(-num)
        } else {
            setNum(-num)
        }
    }

    function operacao(e) {
        let op = e.target.value;
        setOperador(op);
        setNumAntigo(num);
        setNum(0)
    }

    function calculo() {
        if (operador === "X") {
            setNum(numAntigo * num );
        }
        if (operador === "/") {
            setNum(numAntigo / num );
        }
        if (operador === "-") {
            setNum(numAntigo - num );
        }
        if (operador === "+") {
            let numOld = Number(numAntigo);
            let newNum = Number(num);
            let sum = numOld + newNum;
            setNum(sum);
        }
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
                        <button className="btnSuperior" onClick={trocarOperador}>+/-</button>
                        <button className="btnSuperior" onClick={porcetagem}>%</button>
                        <button className="btnLateralDireita" onClick={operacao} value={'/'}>/</button>
                        <button className="btnNumPad" onClick={handleClick} value={7} >7</button>
                        <button className="btnNumPad" onClick={handleClick} value={8}>8</button>
                        <button className="btnNumPad" onClick={handleClick} value={9}>9</button>
                        <button className="btnLateralDireita" onClick={operacao} value={'X'}>X</button>
                        <button className="btnNumPad" onClick={handleClick} value={4}>4</button>
                        <button className="btnNumPad" onClick={handleClick} value={5}>5</button>
                        <button className="btnNumPad" onClick={handleClick} value={6}>6</button>
                        <button className="btnLateralDireita" onClick={operacao} value={'-'}>-</button>
                        <button className="btnNumPad" onClick={handleClick} value={1}>1</button>
                        <button className="btnNumPad" onClick={handleClick} value={2}>2</button>
                        <button className="btnNumPad" onClick={handleClick} value={3}>3</button>
                        <button className="btnLateralDireita" onClick={operacao} value={'+'}>+</button>
                    </div>
                    <div className="btnsUltimaFileira">
                        <button className="btnNumPad btnZero" onClick={handleClick} value={0}>0</button>
                        <button className="btnNumPad" onClick={handleClick} value={"."}>,</button>
                        <button className="btnLateralDireita" onClick={calculo}> = </button>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default Calculadora;