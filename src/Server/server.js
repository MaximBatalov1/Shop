// const express = require('express');
// const app = express();
// const data = require('./pizzas.json');
//
// app.use(express.json());
//
// app.post('/api/search', (req, res) => {
//     // Получение поискового запроса из тела запроса
//     const query = req.body.query;
//
//     // Фильтрация результатов поиска на основе запроса
//     const searchResults = data.results.filter(result =>
//         result.title.toLowerCase().includes(query.toLowerCase())
//     );
//
//     // Возвращение результатов поиска
//     res.json({ results: searchResults });
// });
//
// app.listen(5173, () => {
//     console.log('Mock API сервер запущен на порту 3001');
// });