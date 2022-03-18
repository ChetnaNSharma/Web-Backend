const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');



app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride('_method'));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


let comments = [
    {
        id : 1,
        username : 'Leo',
        comment : 'so inspiring'
    },

    {
        id : 2,
        username : 'Edward',
        comment : 'I can see crystal clear'
    },

    {
        id : 3,
        username : 'Sandra',
        comment : 'I am changed this moment'
    },

    {
        id : 4,
        username : 'phlora',
        comment : 'Where was this my whole life'
    }
];


app.get('/comments',(req,res) => {
    res.render('comments/index', { ...comments });
});


app.get('/comments/new',(req,res) =>{
    res.render('comments/new');
});

app.post('/comments',(req,res) =>{
    const {username, comment} = req.body;
    comments.push({username, comment});
    res.redirect('/comments');
});


app.get('/comments/:id', (req,res) => {
    const {id}= req.params;
    const comment = comments.find(c => c.id === parseInt(id));
    res.render('comments/show', {comment});
});

app.patch('/comments/:id', (req,res) => {
    const {id}= req.params;
    const newComment = req.body.comment;
    const commentToChange = comments.find(c => c.id === parseInt(id));
    commentToChange.comment = newComment;
    res.redirect('/comments');
});

app.delete('/comments/:id', (req,res) => {
    const {id}= req.params;
    comments = comments.filter(c => c.id === parseInt(id));
    res.redirect('/comments');
});



app.get('/comments/:id/edit',(req,res) =>{
    const {id}= req.params;
    const comment = comments.find(c => c.id === parseInt(id));
    res.render('comments/edit',{comment});

});


app.get('/tacos', (req,res) =>{
    res.send("This is tacos page");
});


app.listen(3000, () =>{
    console.log("ON PORT 3000");
});