import React from 'react';
import Die from '../die/Die';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';

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

    const [tenzies, setTenzies] = React.useState(false);
    const [dice, setDice] = React.useState(allNewDice());

    React.useEffect(() => {
        const allHeld = dice.every((die) => die.isHeld);
        const firstValue = dice[0].value;
        const allSameValues = dice.every((die) => firstValue === die.value);
        if (allHeld && allSameValues) {
            setTenzies(true);
        }
    }, [dice]);

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

    function resetGame() {
        setDice((oldDice) =>
            oldDice.map((die) => {
                return {
                    ...die,
                    isHeld: !die.isHeld,
                    random: Math.floor(Math.random() * (6 - 1 + 1) + 1),
                };
            }),
        );
        setTenzies(false);
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
            <button
                onClick={tenzies ? () => resetGame() : () => handleRollDice()}
                className='rollDie'
            >
                {tenzies ? 'New Game' : 'Roll'}
            </button>
            {tenzies && <Confetti />}
        </main>
    );
}
