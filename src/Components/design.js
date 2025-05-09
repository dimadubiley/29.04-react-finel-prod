import React from 'react';
import { Link } from 'react-router-dom';
import './styleDesing.css';


export function Desing() {
    return (
        <div id='wrappDesing'>
            <div id='heroImg'>
                <h1 id='titleDesing'>Створи дизайн своєї мрії</h1>
                <div id='divForThreeCards'>
                    <div className='card'>
                        <img src='photo for first card desing.png' alt='' className='imgForCard' />
                        <hr className='hrForCard' />
                        <h4 className='miniH4ForCard'>створи дизайн</h4>
                        <p className='textFor Card'>Habitasse consequat egestas lectus blandit </p>
                    </div>
                    <div className='card'>
                        <img src='photo for second card desing.png' alt='' className='imgForCard' />
                        <hr className='hrForCard' />
                        <h4 className='miniH4ForCard'>Комбінуй ідеї</h4>
                        <p className='textFor Card'>Habitasse consequat egestas </p>
                    </div>
                    <div className='card'>
                        <img src='photo for third card desing.png' alt='' className='imgForCard' />
                        <hr className='hrForCard' />
                        <h4 className='miniH4ForCard'>результат</h4>
                        <p className='textFor Card'>Habitasse tus consequat egestas lectus blandit tus </p>
                    </div>
                </div>

                <div id='boddomHeroImh'>
                    <h1>втілюй свої ідеї</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Habitasse consequat egestas lectus blandit consequat. A sed placerat sapien amet scelerisque ullamcorper amet. Elementum consequat risus nullam </p>
                </div>

            </div>

            <div id='firstSec'>
                <div id='threeCards'>
                    <div className='cardsInFirstSec'>
                        <img src='photoForFirstCardSection1.png' alt='' className='photoForCardInSection' />
                        <h1 className='h1InCardFirstSec'></h1>
                        <p className='pInCardFirstSec'></p>
                    </div>
                    <div className='cardsInFirstSec'>
                        <img src='photoForSecondCardSection1.jpg' alt='' className='photoForCardInSection' />
                        <h1 className='h1InCardFirstSec'></h1>
                        <p className='pInCardFirstSec'></p>
                    </div>
                    <div className='cardsInFirstSec'>
                        <img src='photoForThirdCardSection1.jpg' alt='' className='photoForCardInSection' />
                        <h1 className='h1InCardFirstSec'></h1>
                        <p className='pInCardFirstSec'></p>
                    </div>
                </div>
                <div id='foursCard'></div>
            </div>
        </div>
    );
}