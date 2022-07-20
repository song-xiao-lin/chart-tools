import React from 'react'
import './login.css'

export default function Login() {
  return (
    <div class="login-container">
        <div class="login-model">
            <div class="left-box">
                <div class="en">Welcome to</div>
                <div class="title">Z b 聊天室</div>
            </div>
            <div class="right-box">
                <div class="label">用户名</div>
                <div class="content-group">
                    <input type="text" id="name" class="input-inner">
                </div>
                <div class="label">选择头像</div>
                <div class="content-group">
                    <div id="avatar-select" class="avatar-list">
                        <img src="./images/avatar1.png" data-index="1" alt="">
                        <img src="./images/avatar2.png" data-index="2" alt="">
                        <img src="./images/avatar3.png" data-index="3" alt="">
                        <img src="./images/avatar4.png" data-index="4" alt="">
                        <img src="./images/avatar5.png" data-index="5" alt="">
                        <img src="./images/avatar6.png" data-index="6" alt="">
                        <img src="./images/avatar7.png" data-index="7" alt="">
                        <img src="./images/avatar8.png" data-index="8" alt="">
                        <img src="./images/avatar9.png" data-index="9" alt="">
                        <img src="./images/avatar10.png" data-index="10" alt="">
                        <img src="./images/avatar11.png" data-index="11" alt="">
                        <img src="./images/avatar12.png" data-index="12" alt="">
                        <img src="./images/avatar13.png" data-index="13" alt="">
                        <img src="./images/avatar14.png" data-index="14" alt="">
                    </div>
                </div>
                <div class="bottom-btn">
                    <button type="button" id="login-submit" class="login-button">登 录</button>
                </div>
            </div>
        </div>
    </div>
  )
}
