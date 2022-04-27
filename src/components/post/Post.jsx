import React from "react";
import "./post.css";
export default function Post() {
    return (
        <>
            <article className="blog">
                <figuer className="blog__header">
                    <img src="https://source.unsplash.com/800x600/?nature,water" alt="unsplash" />
                </figuer>
                <div className="blog__body">
                    <span className="blog__cate">java</span>
                    <div className="blog__title">제목입니다.</div>
                    <div className="blog__desc">설명란입니다.</div>
                    <div className="blog__info">
                        <span className="author">박근희</span>
                        <span className="date">2022-04-27</span>
                    </div>
                </div>
            </article>
        </>
    );
}
