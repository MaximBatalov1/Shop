import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/cartSlice';
import CartItem from './CartItem.jsx';
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const items = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handleCheckout = () => {
        navigate('/Pay');
    };

    const totalPrice = items.reduce((total, item) => total + item.price, 0);

    return (
        <div className="flex flex-col min-h-screen">
            <div className="container mx-auto mt-8 flex-grow">
                <h1 className="text-3xl font-bold mb-4">Корзина</h1>
                {items.length === 0 ? (
                    <p className="text-gray-500">Корзина пуста</p>
                ) : (
                    <>
                        <ul className="divide-y divide-gray-200">
                            {items.map(item => (
                                <CartItem
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    imageUrl={item.imageUrl}
                                />
                            ))}
                        </ul>
                        <div className="mt-6 flex justify-between">
                            <button onClick={handleClearCart} className="btn btn-primary">
                                Очистить корзину
                            </button>
                            <button onClick={handleCheckout} className="btn btn-primary">
                                Оформить покупку
                            </button>
                        </div>
                        <div className="mt-6">
                            <p className="font-bold">Итого: {totalPrice} ₽</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;