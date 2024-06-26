
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {BrowserRouter} from 'react-router-dom'
import {GoogleOAuthProvider} from "@react-oauth/google";
import {store} from "./redux/store.js";
import { Provider } from 'react-redux'


const googleAuthId = import.meta.env.VITE_GOOGLE_AUTH_ID;
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <GoogleOAuthProvider clientId={googleAuthId}>
                <App />
            </GoogleOAuthProvider>
        </BrowserRouter>
    </Provider>
);