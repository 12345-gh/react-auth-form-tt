import React from "react";

import { AuthPage } from "@/pages/AuthPage";
import { GlobalStyles } from "@/styles/GlobalStyles";

const App: React.FC = () => {
    return (
        <>
            <GlobalStyles />
            <AuthPage />
        </>
    );
};

export default App;
