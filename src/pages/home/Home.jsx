import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Post from "../../components/post/Post";
import Side from "../../components/side/Side";
import Login from "../login/Login";

export default function Home() {
    return (
        <>
            <Header />
            {/* <Login /> */}
            <main id="main">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
              
                <Side />
            </main>
            <Footer />
        </>
    );
}
