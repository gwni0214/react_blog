import React from "react";
import "./write.css";
export default function Write() {
    return (
        <>
            <h2 className="ir_so">컨텐츠 영역</h2>
            <section id="blog-type" className="section center mb100">
                <div className="container">
                    <h3 className="section__title">게시글 작성하기</h3>
                    <p className="section__desc">자유로운 자연에 대해서 글을 써보세요!</p>
                    <div className="blog__inner">
                        <div className="blog__write">
                            <form
                                action="blogWriteSave.php"
                                name="blogWrite"
                                method="post"
                                encType="multipart/form-data"
                            >
                                <fieldset>
                                    <legend className="ir_so">블로그 게시글 작성 영역</legend>
                                    <div>
                                        <label htmlFor="blogCategory">카테고리</label>
                                        <select name="blogCategory" id="blogCategory">
                                            <option value="mountain">mountain</option>
                                            <option value="ocean">ocean</option>
                                            <option value="space">space</option>
                                            <option value="etc">etc</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="blogTitle">제목</label>
                                        <input
                                            type="text"
                                            name="blogTitle"
                                            id="blogTitle"
                                            placeholder="제목을 넣어주세요!"
                                            required
                                        ></input>
                                    </div>
                                    <div>
                                        <label htmlFor="blogContents">내용</label>
                                        <textarea
                                            name="blogContents"
                                            id="blogContents"
                                            placeholder="내용을 넣어주세요!"
                                            required
                                        ></textarea>
                                    </div>
                                    <div>
                                        <label htmlFor="blogImgFile">파일</label>
                                        <input
                                            type="file"
                                            name="blogImgFile"
                                            id="blogImgFile"
                                            accept=".jpg, .png, .gif, .jpeg"
                                            placeholder="사진을 넣어주세요! 사진은 jpg, gif, png만 가능합니다"
                                        ></input>
                                    </div>
                                    <button type="submit" value="저장하기">
                                        저장하기
                                    </button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
