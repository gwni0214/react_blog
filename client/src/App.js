import React from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import View from "./pages/view/View";
import Join from "./pages/join/Join";
import Write from "./pages/write/Write";
import Mypage from "./pages/mypage/Mypage";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/view">
                    <View />
                </Route>
                <Route path="/write">
                    <Write />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/join">
                    <Join />
                </Route>
                <Route path="/mypage">
                    <Mypage />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
