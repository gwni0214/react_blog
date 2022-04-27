import React from "react";
import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
    return (
        <>
            <div className="contents">
                <h2 className="ir_so">컨텐츠 영역</h2>
                <section id="blog-type" className="section center type">
                    <div className="container">
                        <h3 className="section__title">블로그 포스트</h3>
                        <p className="section__desc">블로그 포스트 영역입니다.</p>
                        <div className="post">
                            <Post />
                            <Post />
                            <Post />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
