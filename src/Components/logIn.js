import React from 'react';
import { Link } from 'react-router-dom';
import './styleLogIn.css';


export function LogIn() {
    return (
        <div id="wrappLogIn">
            <div id="leftL">
                <button id="backBnt">
                    <img src="backBtn.png" alt="Back" />
                </button>
                <div id="divForH1">
                    <h1 id="titleLogIn">Заповніть вхід до облікового запису</h1>
                </div>
            </div>

            <div id="right">
                <form className="main">
                    <label className="inp">Електронна пошта або мобільний номер:</label> <br />
                    <input type="text" className="first" /><br />
                    <div id="divForText1">
                        <p className="text">
                            By entering your mobile number and one-time code sign-in option, <br />
                            you agree to receive a one-time verification code via SMS from IKEA. <br />
                            Message and data rates may apply.
                        </p>
                    </div>
                    <p className="text2">More info about Private Policy</p>
                    <label className="inp">Пароль:</label> <br />

                    <div id="pass">
                        <input type="password" id="inputPass" /><br />
                        <button id="buttonPass">
                            <img src="/Vector.png" alt="Show password" id="ies" />
                        </button>
                    </div>

                    <div id="divForBtnForgotPass">
                        <a id="butforgotPass">Забули свій пароль?</a>
                        {/* <Link to="/forgot-password" id="butforgotPass">Забули свій пароль?</Link> */}
                    </div>
                    <br />
                    <div id="divForSaveInfo">
                        <div id="divForCheckbox">
                            <input type="checkbox" value="1" id="saveInfo" />
                        </div>
                        <div id="divForTextSaveInfo">
                            <p>Зберегти інформацію</p>
                        </div>
                        <div id="divForInfo">
                            <img src="/info.png" alt="Info" />
                        </div>
                    </div>
                    <br />

                    <button className="Akk">Продовжити</button>
                    <Link id='LinkStyle' to='./register'> Створити аккаунт </Link>
                </form>
            </div>
        </div>
    );
}