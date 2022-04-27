import React from "react";
import "./Login.css";
export default function Login() {
    return (
        <>
            <div className="contents">
                <h2 class="ir_so">컨텐츠 영역</h2>
                <section class="join_type gray">
                    <div class="member-form">
                        <form action="#" name="join" method="post">
                            <fieldset>
                                <legend class="ir_so">로그인 입력 폼</legend>
                                <div class="join-box">
                                    <div>
                                        <label for="youEmail">이메일</label>
                                        <input
                                            type="email"
                                            id="youEmail"
                                            name="youEmail"
                                            placeholder="Sample@naver.com"
                                            autocomplete="off"
                                            autofocus
                                            required
                                        ></input>
                                    </div>
                                    <div>
                                        <label for="youPass">비밀번호</label>
                                        <input
                                            type="password"
                                            id="youPass"
                                            name="youPass"
                                            maxlength="20"
                                            placeholder="비밀번호를 적어주세요!"
                                            autocomplete="off"
                                            required
                                        ></input>
                                    </div>
                                </div>
                                <button id="joinBtn" class="join-submit" type="submit">
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
