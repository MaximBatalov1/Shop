import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from '../redux/cartSlice';

const CartItem = ({ id, title, price, imageUrl }) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeItem(id));
    };

    return (
        <li key={id} className="flex items-center justify-between py-4">
            <div className="flex items-center">
                <img src={imageUrl} alt={title} className="w-16 h-16 object-cover rounded mr-4" />
                <div>
                    <span className="font-bold">{title}</span> - {price} ₽
                </div>
            </div>
            <button
                onClick={handleRemove}
                className="btn btn-outline btn-accent"
            >
                Удалить
            </button>
        </li>
    );
};

export default CartItem;
