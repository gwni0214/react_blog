import React from "react";
import "./header.css";

export default function Header() {
    return (
        <header id="header">
            <h1 className="logo">
                <a href="../../index.html">
                    React <em>Blog</em>
                </a>
            </h1>
            <nav className="menu">
                <h2 className="ir_so">메인 메뉴</h2>
                <ul>
                    <li>
                        <a href="#!">HOME</a>
                    </li>
                    <li>
                        <a href="#!">LOGIN</a>
                    </li>
                    <li>
                        <a href="#!">CONTACT</a>
                    </li>
                    <li>
                        <a href="#!">WRITE</a>
                    </li>
                    <li>
                        <a href="#!">LOGOUT</a>
                    </li>
                </ul>
            </nav>
            <div className="member">
                <img
                    src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt="1"
                />
                <span>Gwni님 반갑습니다.</span>
            </div>
        </header>
    );
}
