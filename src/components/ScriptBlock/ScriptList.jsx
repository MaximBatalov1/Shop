import React from 'react';
import ScriptBlock from './ScriptBlock';

function ScriptList() {
    const scripts = [
        { title: 'Сайт по накрутке Beelike', price: 2675, imageUrl: '/path/to/image1.jpg' },
        { title: 'PWA приложение для Gambling', price: 7500, imageUrl: '/path/to/image2.jpg' },
        { title: 'Сайт автопродаж на DLE', price: 4000, imageUrl: '/path/to/image3.jpg' },
        { title: 'Пак для дорвейных каналов', price: 4650, imageUrl: '/path/to/image4.jpg' },
    ];

    return (
        <div className=" mx-auto p-6">
            <header className="mb-6">
                <h1 className="text-4xl font-bold text-center text-primary">Все скрипты</h1>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {scripts.map((script, index) => (
                    <ScriptBlock
                        key={index}
                        title={script.title}
                        price={script.price}
                        imageUrl={script.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
}

export default ScriptList;
