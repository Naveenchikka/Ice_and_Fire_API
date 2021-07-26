
const apiUrl = 'https://www.anapioficeandfire.com/api/books';

async function getData()
{
  try
   { 
       var resp = await fetch(apiUrl,{
           method: 'GET',
           headers:
           {
               'Accept': 'application/json',
       }});
       
       console.log(resp);
       var data = await resp.json();
       console.log(data);
       data.forEach((element) => {
        createColumn(element.name,element.isbn,element.numberOfPages,element.authors,element.publisher,element.released,element.characters);
    });
}
   catch(error)
   {
        console.log(error);
   }
}


var header2 = document.createElement('h2');
header2.innerHTML = "Books List";
header2.setAttribute("id","list");


var header = document.createElement('h1');
header.innerHTML = "Fetch Data";
header.setAttribute("onclick","getData()");
header.style.cursor="pointer";
header.setAttribute("id","fetch");
document.body.append(header2,header);

var contnr = document.createElement('div');
contnr.setAttribute("class","container");

var row = document.createElement('div');
row.setAttribute("class","row");
contnr.append(row);
document.body.append(contnr);

    

function createColumn(name,isbn,pages,authors,publisher,released,characters)
{

let colxs3 = document.createElement('div');
    colxs3.setAttribute("class","col-6");
    row.append(colxs3);

    let card = document.createElement('div');
    card.setAttribute("class","card h-100 w-100");
    colxs3.append(card);

    let cardbody = document.createElement('div');
    cardbody.setAttribute("class","card-body");
    card.append(cardbody);

    let cardtitle = document.createElement('h5');
    cardtitle.setAttribute("class","card-title qtitle fw-bold");
    cardtitle.setAttribute("id","white");
    cardtitle.style.fontSize = "30px";
    cardtitle.innerHTML = "Book Name:    "+name;
    cardbody.append(cardtitle);

   let cardtext = document.createElement('p');
   cardtext.setAttribute("class","card-text qtext fw-lighter");
   cardtext.setAttribute("id","white");
   cardtext.innerHTML = "ISBN:    "+isbn;
   cardbody.append(cardtext);


 let cardtext2 = document.createElement('p');
  cardtext2.setAttribute("class","card-text qtext fw-lighter");
  cardtext2.setAttribute("id","white");
  cardtext2.innerHTML = "no. of Pages:    "+pages;
  cardbody.append(cardtext2);

  let cardtext3 = document.createElement('p');
  cardtext3.setAttribute("class","card-text qtext fw-lighter");
  cardtext3.setAttribute("id","white");
  cardtext3.innerHTML = "Authors:    "+authors;
  cardbody.append(cardtext3);

  let cardtext4 = document.createElement('p');
  cardtext4.setAttribute("class","card-text qtext fw-lighter");
  cardtext4.setAttribute("id","white");
  cardtext4.innerHTML = "Publisher:    "+publisher;
  cardbody.append(cardtext4);

  let cardtext5 = document.createElement('p');
  cardtext5.setAttribute("class","card-text qtext fw-lighter");
  cardtext5.setAttribute("id","white");
  const cleanedDate = released;
  cardtext5.innerHTML = "Released Date:    "+new Date(cleanedDate).toDateString();
  cardbody.append(cardtext5);

  let cardtext6 = document.createElement('p');
  cardtext6.setAttribute("class","card-text qtext fw-lighter");
  cardtext6.setAttribute("id","white");
 

  const character = characters.slice(0,5);
  console.log(character);
  cardtext6.innerHTML = "Characters:    ";
  for (i=0;i<character.length;i++)
 {
 cardtext6.innerHTML += character[i]+ "<br>";
 }
 cardbody.append(cardtext6);


}
