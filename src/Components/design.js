import React from 'react';
import { Link } from 'react-router-dom';
import './styleDesing.css';


export function Desing() {
    return (
        <div id='wrappDesing'>
            <div id='divForBgImg'>
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
            </div>

            <div id='firstSec'>
                <div id='upFirstSec'>
                    <div id='threeCards'>
                        <div className='cardsInFirstSec'>
                            <img src='photoForFirstCardSection1.png' alt='' className='photoForCardInSection' />
                            <h1 className='h1InCardFirstSec'>Як обрати стиль</h1>
                            <p className='pInCardFirstSec'>Lorem ipsum dolor sit amet consectetur. Habitasse consequat egestas lectus consequat egestas lectus blandit consequat. A sed  blandit consequat. A sed placerat sapien amet...</p>
                        </div>
                        <div className='cardsInFirstSec'>
                            <img src='photoForSecondCardSection1.jpg' alt='' className='photoForCardInSection' />
                            <h1 className='h1InCardFirstSec'>наші поради</h1>
                            <p className='pInCardFirstSec'>Lorem ipsum dolor sit amet consectetur. Habitasse consequat egestas lectus consequat egestas lectus  placerat sapien amet...</p>
                        </div>
                        <div className='cardsInFirstSec'>
                            <img src='photoForThirdCardSection1.jpg' alt='' className='photoForCardInSection' />
                            <h1 className='h1InCardFirstSec'>як спланувати</h1>
                            <p className='pInCardFirstSec'>Lorem ipsum dolor sit amet consectetur. Habitasse consequat egestas lectus consequat egestas lectus blandit consequat. A sed  blandit consequat. A sed
                                Lorem ipsum dolor sit amet consectetur. Habitasse
                                Lorem ipsum dolor sit amet consectetur. Habitasse  placerat sapien amet...</p>
                        </div>
                    </div>
                </div>
                <div id='downFirstSec'>
                    <img src='photoForThirdIn1Sec.jpg' alt='' id='a' />
                    <div id='rightDivInFouesCard'>
                        <h1 id='h1InFoursCard'>інформація</h1>
                        <p id='pInFoursCard'>Lorem ipsum dolor sit amet consectetur. Bibendum neque at em integer integer. Tempus a mi in enim dui rhoncus vulputate nulla et. Ornare sed cursus
                            Lorem ipsum dolor sit amet consectetur. Bibendum neque at em integer integer. Tempus a mi in enim dui rhoncus vulputate nulla et. Ornare sed cursus sed viverra.</p>
                    </div>
                </div>
            </div>

            <div id='secindSec'>
                <h1 id='h1ForSecondSec'>варіанти оформлення</h1>
                {/* Слайдер */}
            </div>

            <div id='thirdSec'>
                <h1>Поради</h1>
                <div className='cardInThirdSec'>
                    <img src='imgForFirstCardInThirdSec.jpg' alt='' id='imgInCardThirdSec' />
                    <div id='divInCardThirdSec'>
                        <h1 id='h1InCardThirdSec'>інформація</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Bibendum neque at em integer integer. Tempus a mi in enim dui rhoncus vulputate nulla et. Ornare sed cursus sed viverra.Lorem ipsum dolor sit amet consectetur. Bibendum neque at em integer integer. Tempus a mi in enim dui rhoncus vulputate nulla et.

                            Оrnare sed cursus sed viverra.Lorem ipsum dolor sit amet consectetur. Bibendum neque at em integer integer. Tempus a mi in enim dui rhoncus vulputate nulla et. Ornare sed cursus sed viverra.Lorem ipsum dolor sit amet consectetur. Bibendum neque at em integer integer. Tempus a mi in enim dui rhoncus vulputate nulla et. Ornare sed cursus sed viverra.</p>
                    </div>
                </div>
                <div className='cardInThirdSec'>
                    <img src='imgForSecondCardInThirdSec.jpg' alt='' id='imgInCardThirdSec' />
                    <div id='divInCardThirdSec'>
                        <h1 id='h1InCardThirdSec'>інформація</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Bibendum neque at em integer integer. Tempus a mi in enim dui rhoncus vulputate nulla et. Ornare sed cursus sed viverra.Lorem ipsum dolor sit amet consectetur. Bibendum neque at em integer integer. Tempus a mi in enim dui rhoncus vulputate nulla et.

                            Оrnare sed cursus sed viverra.Lorem ipsum dolor sit amet consectetur. Bibendum neque at em integer integer. Tempus a mi in enim dui rhoncus vulputate nulla et. Ornare sed cursus sed viverra.Lorem ipsum dolor sit amet consectetur. Bibendum neque at em integer integer. Tempus a mi in enim dui rhoncus vulputate nulla et. Ornare sed cursus sed viverra.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}