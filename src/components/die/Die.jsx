import React from 'react';

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? '#59E391' : 'white',
    };

    return (
        <div
            id={props.id}
            style={styles}
            onClick={props.handleHold}
            className='die'
            index={props.index}
        >
            <h2 id={props.id} index={props.index}>
                {props.value}
            </h2>
        </div>
    );
}
