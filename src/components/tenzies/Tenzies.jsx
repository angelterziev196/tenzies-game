import React from 'react';
import Die from '../die/Die';
import { nanoid } from 'nanoid';

export default function Tenzies() {
    function allNewDice() {
        const numArray = [];
        for (let i = 0; i < 10; i++) {
            numArray.push({
                random: Math.floor(Math.random() * (6 - 1 + 1) + 1),
                isHeld: false,
                id: nanoid(),
            });
        }
        return numArray;
    }

    const [dice, setDice] = React.useState(allNewDice());

    function handleRollDice() {
        setDice((oldDice) =>
            oldDice.map((die) => {
                return die.isHeld
                    ? die
                    : {
                          random: Math.floor(Math.random() * (6 - 1 + 1) + 1),
                          isHeld: false,
                          id: nanoid(),
                      };
            }),
        );
    }

    function handleHoldDice(id) {
        setDice((oldDice) =>
            oldDice.map((die) => {
                return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
            }),
        );
    }

    return (
        <main className='tenziesContainer'>
            <div className='dieContainer'>
                {dice.map((die, i) => (
                    <Die
                        id={die.id}
                        index={i}
                        isHeld={die.isHeld}
                        handleHold={() => handleHoldDice(die.id)}
                        key={die.id}
                        value={die.random}
                    />
                ))}
            </div>
            <button onClick={() => handleRollDice()} className='rollDie'>
                Roll
            </button>
        </main>
    );
}
