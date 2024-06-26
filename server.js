var express = require("express")
var app = express()

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended:false}))

const cardList = [
    {
        title: "Research with us",
        image: "images/kitten2.jpg",
        link: "Explore our events and get involved",
        desciption: "xxxxxxxxxxxxx"
    },
    {
        title: "Find your career",
        image: "images/kitten3.jpg",
        link: "Career stories, Read our student success stories",
        desciption: "xxxxxxxxxxxxx"
    }
]
// const cardList = [
//     {
//     title: "Kitten 2",
//     image: "images/kitten-2.jpg",
//     link: "About Kitten 2",
//     desciption: "Demo desciption about kitten 2"
//     },
//     {
//     title: "Kitten 3",
//     image: "images/kitten-3.jpg",
//     link: "About Kitten 3",
//     desciption: "Demo desciption about kitten 3"
//     }
//     ]


    app.get('/api/projects',(req,res) => {
    res.json({statusCode: 200, data: cardList, message:"Success"})
    })
    var port = process.env.port || 3000;
    app.listen(port,()=>{
    console.log("App listening to: "+port)
    })
    
// var port = process.env.port || 3000;

// app.listen(port,()=>{
// console.log("App listening to: "+port)
// })
