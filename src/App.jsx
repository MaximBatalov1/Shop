import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import store from './redux/store';
import Navbar from './components/Navbar.jsx';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Footer from "./Footer.jsx";
import Pay from "./pages/Pay";




function App() {
    return (
        <Provider store={store}>
            <div className="wrapper dark:bg-blue-900">
                <Navbar />
                <Header />
                    <div className="container mx-auto">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/pay" element={<Pay />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div>
                <Footer />
            </div>
        </Provider>
    );
}

export default App;
