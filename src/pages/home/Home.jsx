import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Side from "../../components/side/Side";
import Login from "../login/Login";

export default function Home() {
    return (
        <>
            <Header />
            <Login />
            <main id="main">
                <Posts />
                <Side />
            </main>
            <Footer />
        </>
    );
}
