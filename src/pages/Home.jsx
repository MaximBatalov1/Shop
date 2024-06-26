import React from 'react';
import Categories from '../components/Categories';
import ScriptBlock from '../components/ScriptBlock/ScriptBlock';
import Sort from '../components/Sort';
import Skeleton from '../components/ScriptBlock/Skeleton';

const Home = () => {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [categoryId, setCategoryId] = React.useState(0);
    const [sortType, setSortType] = React.useState({
        name: 'популярности',
        sortProperty: 'rating',
    });

    console.log(categoryId, sortType);

    React.useEffect(() => {
        setIsLoading(true);
        fetch(`https://65711e4a09586eff66423d12.mockapi.io/items?${
            categoryId > 0 ? `category=${categoryId}` : ''
        }&sortBy=${sortType.sortProperty}&order=desc`)
            .then((res) => res.json())
            .then((arr) => {
                setItems(arr);
                setIsLoading(false);
            });
        window.scrollTo(0, 0);
    }, [categoryId, sortType]);

    return (
        <>
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
                <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
            </div>
            <h2 className="text-2xl font-bold mb-4 dark:text-white">Все скрипты</h2>
            <h3 className="text-lg mb-6 dark:text-white">
                Тут вы сможете найти инструменты для оптимизации и автоматизации работы.
            </h3>
            <h4 className="text-base mb-6 dark:text-white">Чтобы узнать поподробнее о товаре просто наведите на него курсор.</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {isLoading
                    ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                    : items.map((obj) => (
                        <ScriptBlock
                            key={obj.id}
                            id={obj.id}
                            title={obj.name}
                            price={obj.price}
                            imageUrl={obj.imageUrl}
                            description={obj.description}
                        />
                    ))}
            </div>
        </>
    );
};

export default Home;
