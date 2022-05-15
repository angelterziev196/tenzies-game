import React from 'react';
import Die from '../die/Die';

export default function Tenzies() {
    function allNewDice() {
        const numArray = [];
        for (let i = 0; i < 10; i++) {
            const randomNum = Math.floor(Math.random() * (6 - 1 + 1) + 1);
            numArray.push(randomNum);
        }
        return numArray;
    }

    const [dice, setDice] = React.useState(allNewDice());

    return (
        <main className='tenziesContainer'>
            <div className='dieContainer'>
                {dice.map((die, i) => (
                    <Die key={i} value={die} />
                ))}
            </div>
        </main>
    );
}
