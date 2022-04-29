import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header id="header">
            <h1 className="logo">
                <Link to="/">
                    React <em>Blog</em>
                </Link>
            </h1>
            <nav className="menu">
                <h2 className="ir_so">메인 메뉴</h2>
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/login">LOGIN</Link>
                    </li>
                    <li>
                        <Link to="/join">JOIN</Link>
                    </li>
                    <li>
                        <Link to="/write">WRITE</Link>
                    </li>
                    <li>
                        <Link to="/">LOGOUT</Link>
                    </li>
                </ul>
            </nav>
            <div className="member">
                <Link to="/mypage">
                    <img
                        src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt="1"
                    />
                </Link>
                <Link to="/mypage">
                    <span>Gwni님 반갑습니다.</span>
                </Link>
            </div>
        </header>
    );
}
