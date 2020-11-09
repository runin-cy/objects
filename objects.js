var movies= [{
    name: "The Mummy Series",
    year: "1999-2008",
    director: ["Stephen Sommers", "Rob Cohen"],
    picture: "https://i.pinimg.com/originals/94/b5/dd/94b5dd536393f1cf616c9997b81d54bb.jpg"
},
{
     name: "Eragon",
     year: "2006",
     director: "Stefen Fangmeier",
     picture: "https://images-na.ssl-images-amazon.com/images/I/51PcIS8Md3L._AC_.jpg"
},
{
    name: "Resident Evil",
    year: "2002",
    director: "Paul W. S. Anderson",
    picture: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Resident_evil_ver4.jpg/220px-Resident_evil_ver4.jpg"
},
{
    name: "The Mummy",
    year: "2017",
    director: "Alex Kurtzman",
    picture: "https://www.movieartarena.com/imgs/mummynf.jpg"
},
{
    name: "Tremors",
    year: "1990",
    director: "Ron Underwood",
    picture:"https://upload.wikimedia.org/wikipedia/en/f/f1/Tremors_official_theatrical_poster.jpg"
},
];
var list_items = movies.map((movie) => {
    var item = `<li>Name: ${movie["name"]}<br>
    Year: ${movie["year"]}<br>
    Name: ${movie["director"]}<br>
    <img src="${movie["picture"]}"/><br>
        </li><br>`;
return item;
});
var content = "";
list_items.forEach((item) => {
  content += item;
});
document.getElementById("mylist").innerHTML = content