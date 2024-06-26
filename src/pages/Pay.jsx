import { Link } from "react-router-dom";

function Pay() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="w-full max-w-lg p-8 space-y-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-center">Для оплаты необходимо перейти в Telegram</h2>

                <form className="space-y-4 text-center">
                    <Link
                        to="https://t.me/volvowod"
                        className="text-red-600 hover:text-blue-600 font-bold hover:underline transition duration-500 text-xl" // Увеличиваем шрифт до xl
                    >
                        Telegram
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Pay;
