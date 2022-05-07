
const express = require('express');
const path = require('path');
const router = express.Router();
var app = express();
const port = process.env.PORT || 3000

app.use(express.static(__dirname));
app.set('views', './views')
app.set('view engine', 'pug')
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'))
  })

router.get("/all-blues", (req, res)=>{
    res.render("work", {
      title: "Work: All Blues Lounge",
      name: "All Blues",
      desc: "A simple website for a pub-lounge </br> to practice Design skills, React JS </br> and have fun with NPM packages.</br></br> Inspirated by the Dante's Cafe design. Created and styled with Reactjs and styled-component" , 
      front_img: "work2.webp",
      img_folder: "allBlues",
      img_extend: ".webp",
      code: "https://github.com/se64vet/allbluesLounge_reactWebsite",
      demo: "https://allblues.netlify.app/"
    })
})
router.get("/felix", (req, res)=>{
  res.render("work", {
    title: "Work: Felix E-commercial",
    name: "Felix",
    desc: "Full function E-commerce site </br> using E-commerce API management </br> and payment with StripJS.</br></br> Inspirated by lulu&Georgia's design. Created and styled with Reactjs and Material UI" , 
    front_img: "work1.webp",
    img_folder: "felix",
    img_extend: ".webp",
    code: "https://github.com/se64vet/React_Ecommerce_Web_App",
    demo: "https://felixhome.netlify.app/"
  })
})

app.use('/', router)
app.listen(port, ()=> {
    console.log('port launched')
})