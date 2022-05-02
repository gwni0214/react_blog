import React from "react";

export default function Mypage() {
    return (
        <>
            <h2 className="ir_so">컨텐츠 영역</h2>
            <section className="join-type gray">
                <div className="member-form">
                    <h3>회원 정보</h3>
                    <div className="join-btn logout">
                        <a href="/">로그아웃</a>
                    </div>
                    <div className="join-intro">
                        <div className="face">
                            <img src="https://source.unsplash.com/800x580/?blog,water" alt="기본이미지"></img>
                        </div>

                        <div className="intro"></div>
                    </div>
                    <div className="join-info">
                        <ul>
                            <li>
                                <strong>이메일</strong>
                                <span>sbxjs6999@naver.com</span>
                            </li>
                            <li>
                                <strong>닉네임</strong>
                                <span>gwni</span>
                            </li>
                            <li>
                                <strong>이름</strong>
                                <span>박근희</span>
                            </li>
                            <li>
                                <strong>생일</strong>
                                <span>1997-02-14</span>
                            </li>
                            <li>
                                <strong>번호</strong>
                                <span>010-4104-6999</span>
                            </li>
                            <li>
                                <strong>성별</strong>
                                <span>남자</span>
                            </li>
                            <li>
                                <strong>사이트</strong>
                                <span>https://github.com/gwni0214/webs_class</span>
                            </li>
                        </ul>
                    </div>
                    <div className="join-btn">
                        <a href="/">수정하기</a>
                        <a href="/">탈퇴하기</a>
                    </div>
                </div>
            </section>
        </>
    );
}
