var arrayOfQuotes =[
{
    imge:"https://images.gr-assets.com/authors/1216826209p8/114059.jpg" ,
    author:"Elbert Hubbard",
    quote:"“A friend is someone who knows all about you and still loves you.”",
},
{
    imge:"https://images.gr-assets.com/authors/1429114964p8/9810.jpg" ,
    author:"Albert Einstein",
    quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
},
{
    imge:"https://images.gr-assets.com/authors/1197881416p8/13755.jpg" ,
    author:"Marcus Tullius Cicero",
    quote:"“A room without books is like a body without a soul..”",
},
{
    imge:"https://images.gr-assets.com/authors/1331977133p8/5768330.jpg" ,
    author:"Bernard M. Baruch",
    quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
},
{
    imge:"https://images.gr-assets.com/authors/1193930952p8/61105.jpg" ,
    author:"Dr. Seuss",
    quote:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
},
{
    imge:"https://images.gr-assets.com/authors/1356810912p8/5810891.jpg" ,
    author:"Mahatma Gandhi",
    quote:"“Be the change that you wish to see in the world.”",
},
{
    imge:"https://images.gr-assets.com/authors/1198518558p8/23924.jpg" ,
    author:"Martin Luther King Jr.",
    quote:"“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”",
},
{
    imge:"https://images.gr-assets.com/authors/1424119198p8/7617.jpg" ,
    author:"Andre Gide",
    quote:"“It is better to be hated for what you are than to be loved for what you are not.”",
},

]
function changeQutoes(){
    
    var count = Math.floor(Math.random()*arrayOfQuotes.length)
    document.getElementById("1").src=  arrayOfQuotes[count].imge
    document.getElementById("2").innerHTML=  arrayOfQuotes[count].author
    document.getElementById("3").innerHTML=  arrayOfQuotes[count].quote   
}