import { useDispatch } from 'react-redux';
import { addItem } from "../../redux/cartSlice";

const ScriptBlock = ({ id, title, price, imageUrl, description }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addItem({ id, title, price, imageUrl }));
    };

    return (
        <div className="dark:bg-gray-800 p-4 rounded-2xl shadow-lg">
            <img className="w-full h-32 sm:h-48 object-cover mb-4 rounded-t-2xl" src={imageUrl} alt={title} />
            <div className="tooltip text-4xl" data-tip={description}>
                <h3 className="text-lg font-bold mb-2dark:text-white">{title}</h3>
            </div>
            <p className="text-sm mb-4 dark:text-white">Цена: {price} ₽</p>
            <button
                onClick={handleAddToCart}
                className="w-full bg-purple-800 dark:bg-purple-700 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
                Добавить в корзину
            </button>
        </div>
    );
};

export default ScriptBlock;