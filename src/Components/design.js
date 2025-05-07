import React from 'react';
import { Link } from 'react-router-dom';
import './styleDesing.css';


export function Desing() {
    return (
        <div id='wrappDesing'>
            <main>
                <h1 id='titleDesing'>Створи дизайн своєї мрії</h1>
                <div id='divForThreeCards'>
                    <div className='card'>
                        <img src='' alt='' className='imgForCard'/>
                        <br className='brForCard' />
                        <h4 className='miniH4ForCard'></h4>
                        <p className='textFor Card'></p>
                    </div>
                    <div className='card'>
                        <img src='' alt='' className='imgForCard'/>
                        <br className='brForCard' />
                        <h4 className='miniH4ForCard'></h4>
                        <p className='textFor Card'></p>
                    </div>
                    <div className='card'>
                        <img src='' alt='' className='imgForCard'/>
                        <br className='brForCard' />
                        <h4 className='miniH4ForCard'></h4>
                        <p className='textFor Card'></p>
                    </div>
                </div>
            </main>
        </div>
    );
}
