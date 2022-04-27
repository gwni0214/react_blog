import React from "react";
import "./Login.css";
export default function Login() {
    return (
        <>
            <div className="contents">
                <h2 className="ir_so">컨텐츠 영역</h2>
                <section className="join_type gray">
                    <div className="member-form">
                        <form action="#" name="join" method="post">
                            <fieldset>
                                <legend className="ir_so">로그인 입력 폼</legend>
                                <div className="join-box">
                                    <div>
                                        <label htmlFor="youEmail">이메일</label>
                                        <input
                                            type="email"
                                            id="youEmail"
                                            name="youEmail"
                                            placeholde="Sample@naver.com"
                                            autoComplete="off"
                                            autoFocus
                                            required
                                        ></input>
                                    </div>
                                    <div>
                                        <label htmlFor="youPass">비밀번호</label>
                                        <input
                                            type="password"
                                            id="youPass"
                                            name="youPass"
                                            maxLength="20"
                                            placeholder="비밀번호를 적어주세요!"
                                            autoComplete="off"
                                            required
                                        ></input>
                                    </div>
                                </div>
                                <button id="joinBtn" className="join-submit" type="submit">
                                    로그인 하기
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </section>
            </div>
        </>
    );
}
