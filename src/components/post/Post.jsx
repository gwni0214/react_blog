import React from "react";

export default function Post() {
    return (
        <>
            <div className="blog__inner">
                <div className="blog__cont">
                    <article className="blog">
                        <figure className="blog__header" aria-hidden="true">
                            <img src="https://source.unsplash.com/800x600/?nature,water" alt="이미지" />
                        </figure>
                        <div className="blog__body">
                            <span className="blog__cate">javascript</span>
                            <div className="blog__title">포스트 제목입니다.</div>
                            <div className="blog__desc">포스트 설명입니다.포스트 설명입니다.포스트 설명입니다.</div>
                            <div className="blog__info">
                                <span className="author">박근희</span>
                                <span className="date">2022-04-27</span>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
}
