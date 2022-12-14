import React, { useState } from "react";
import AppRouter from "./Router";
import fbase from "fbase";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <>
            <AppRouter isLoggedIn={isLoggedIn} />
            <footer>&copy; Nwitter</footer>
        </>
    );
}

export default App;