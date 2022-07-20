import React from 'react'

export default function Login() {
  return (
    <div class="index-container">
        <div class="chat-container">
            <div class="user-info">
                <div id="avatar" class="avatar"></div>
            </div>
            <div class="right-box">
                <div class="top-title">
                    <span>公共聊天室</span>
                    <span class="user-count">(0)</span>
                </div>
                <div class="bottom-content">
                    <div class="chat-room">
                        <div class="message-box">
                            <div id="message-list" class="message-list"></div>
                        </div>
                        <div class="input-container">
                            <div class="tools"></div>
                            <div class="input-box">
                                <textarea id="input-msg" wrap="hard" placeholder="Ctrl + Enter 换行" class="input-inner"></textarea>
                            </div>
                            <button type="button" id="send-msg" class="send-btn">发 送 (Enter) </button>
                        </div>
                    </div>
                    <div class="online-user" id="online-user"></div>
                </div>
            </div>
        </div>
    </div>
  )
}
