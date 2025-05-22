import React from 'react';
import { Link } from 'react-router-dom';
import './styleLogIn.css';


export function LogIn() {
    return (
        <div id="wrappLogIn-DD">
            <div id="leftL-DD">
                <button id="backBnt-DD">
                    <img src="backBtn-DD.png" alt="Back" />
                </button>
                <div id="divForH1-DD">
                    <h1 id="titleLogIn-DD">Заповніть вхід до облікового запису</h1>
                </div>
            </div>

            <div id="right-DD">
                <form className="main-DD">
                    <label className="inp-DD">Електронна пошта або мобільний номер:</label> <br />
                    <input type="text" className="first-DD" /><br />
                    <div id="divForText1-DD">
                        <p className="text-DD">
                            By entering your mobile number and one-time code sign-in option, <br />
                            you agree to receive a one-time verification code via SMS from IKEA. <br />
                            Message and data rates may apply.
                        </p>
                    </div>
                    <p className="text2-DD">More info about Private Policy</p>
                    <label className="inp-DD">Пароль:</label> <br />

                    <div id="pass-DD">
                        <input type="password" id="inputPass-DD" /><br />
                        <button id="buttonPass-DD">
                            <img src="/Vector-DD.png" alt="Show password" id="ies-DD" />
                        </button>
                    </div>

                    <div id="divForBtnForgotPass-DD">
                        <a id="butforgotPass-DD">Забули свій пароль?</a>
                        {/* <Link to="/forgot-password" id="butforgotPass">Забули свій пароль?</Link> */}
                    </div>
                    <br />
                    <div id="divForSaveInfo-DD">
                        <div id="divForCheckbox-DD">
                            <input type="checkbox" value="1" id="saveInfo-DD" />
                        </div>
                        <div id="divForTextSaveInfo-DD">
                            <p>Зберегти інформацію</p>
                        </div>
                        <div id="divForInfo-DD">
                            <img src="/info-DD.png" alt="Info" />
                        </div>
                    </div>
                    <br />

                    <button className="Akk-DD">Продовжити</button>
                    <Link id='LinkStyle-DD' to='./register'> Створити аккаунт </Link>
                </form>
            </div>
        </div>
    );
}