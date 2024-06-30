import React from 'react';

const Sort = ({ value, onChangeSort }) => {
    const [open, setOpen] = React.useState(false);
    const sortOptions = [
        { name: 'популярности', sortProperty: 'rating' },
        { name: 'цене', sortProperty: 'price' },
        { name: 'алфавиту', sortProperty: 'name' },
    ];

    return (
        <div className="relative mt-8">
            <button
                onClick={() => setOpen(!open)}
                className="btn btn-outline"
            >
                Сортировка по: {value.name}
            </button>
            {open && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-10">
                    <ul>
                        {sortOptions.map((option, index) => (
                            <li key={index}>
                                <button
                                    className={`block w-full text-left px-4 py-2 dark:text-white ${option.sortProperty === value.sortProperty ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
                                    onClick={() => {
                                        onChangeSort(option);
                                        setOpen(false);
                                    }}
                                >
                                    {option.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Sort;
