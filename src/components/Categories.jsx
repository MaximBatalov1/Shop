import React from 'react';

function Categories({ value, onChangeCategory }) {
    const categories = ['Все', 'Telegram', 'Всё для сайтов', 'Приложения'];
    const buttonClasses = [
        'btn btn-neutral',
        'btn btn-primary',
        'btn btn-secondary',
        'btn btn-accent',
    ];

    return (
        <div className="categories flex justify-center w-full mt-8">
            <ul className="flex gap-4 w-full justify-evenly px-4">
                {categories.map((categoryName, i) => (
                    <li key={i} className="flex-grow">
                        <button
                            onClick={() => onChangeCategory(i)}
                            className={`${buttonClasses[i % buttonClasses.length]} ${value === i ? 'btn-active' : ''} w-full`}
                        >
                            {categoryName}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Categories;
