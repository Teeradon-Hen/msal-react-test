import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./styles/theme";

import { BrowserRouter } from "react-router-dom";

import App from './App';
import { EventType, PublicClientApplication } from '@azure/msal-browser';
const pca = new PublicClientApplication({
    auth: {
        clientId: '7dc9f4e0-25ca-423f-ae70-acab93fd5bdd',
        authority: 'https://login.microsoftonline.com/common/',
        redirectUrl: '/'
    }
}
)

pca.addEventCallback(e => {
    if(e.eventType == EventType.LOGIN_SUCCESS){
        console.log(e);
        pca.setActiveAccount(e.payload.account)
    }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App msalInstance={pca} />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
