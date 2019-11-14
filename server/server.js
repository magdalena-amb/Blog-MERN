const express = require ('express');
const cors = require ('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/api/posts', (req, res)=> {
    const data = [
        {id: 'jdhf5g1', title: 'Post One', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'},
        {id: 'loysj83', title: 'Post Two', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'}
    ]

    res.json(data);
});

app.listen(8000, () => {
    console.log('Server is running on port:', 8000 );
});