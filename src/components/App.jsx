import React from 'react';
import Tenzies from './tenzies/Tenzies';
import Description from './description/Description';

export default function App() {
    return (
        <div className='wrapper'>
            <Description />
            <Tenzies />
        </div>
    );
}
