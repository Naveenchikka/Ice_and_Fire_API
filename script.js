
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
       display(data);
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

var contnr = document.createElement('div');
contnr.setAttribute("class","container");




function display(data) {
   

    let row = document.createElement('div');
    row.setAttribute("class","row");
  
    data.forEach((element) => {
   
       let colxs3 = document.createElement('div');
       colxs3.setAttribute("class","col-6 mb-3");

       let card = document.createElement('div');
       card.setAttribute("class","card");

       let cardbody = document.createElement('div');
       cardbody.setAttribute("class","card-body");
 
       let cardtitle = document.createElement('h5');
       cardtitle.setAttribute("class","card-title qtitle fw-bold");
       cardtitle.setAttribute("id","white");
       cardtitle.style.fontSize = "30px";
       cardtitle.innerHTML = "Book Name:    "+element.name;

      let cardtext = document.createElement('p');
      cardtext.setAttribute("class","card-text qtext fw-lighter");
      cardtext.setAttribute("id","white");
      cardtext.innerHTML = "ISBN:    "+element.isbn;



     let cardtext1 = document.createElement('p');


    let cardtext2 = document.createElement('p');
     cardtext2.setAttribute("class","card-text qtext fw-lighter");
     cardtext2.setAttribute("id","white");
     cardtext2.innerHTML = "no. of Pages:    "+element.numberOfPages;

     let cardtext3 = document.createElement('p');
     cardtext3.setAttribute("class","card-text qtext fw-lighter");
     cardtext3.setAttribute("id","white");
     cardtext3.innerHTML = "Authors:    "+element.authors;

     let cardtext4 = document.createElement('p');
     cardtext4.setAttribute("class","card-text qtext fw-lighter");
     cardtext4.setAttribute("id","white");
     cardtext4.innerHTML = "Publisher:    "+element.publisher;

     let cardtext5 = document.createElement('p');
     cardtext5.setAttribute("class","card-text qtext fw-lighter");
     cardtext5.setAttribute("id","white");
     const cleanedDate = element.released;
     cardtext5.innerHTML = "Released Date:    "+new Date(cleanedDate).toDateString();

     let cardtext6 = document.createElement('p');
     cardtext6.setAttribute("class","card-text qtext fw-lighter");
     cardtext6.setAttribute("id","white");
     const character = element.characters.slice(0,5);
     console.log(character);
     cardtext6.innerHTML = "Characters:    ";
     for (i=0;i<character.length;i++)
    {
    cardtext6.innerHTML += character[i]+ "<br>";
    }


    cardbody.append(cardtitle,cardtext,cardtext2,cardtext3,cardtext4,cardtext5,cardtext6);
    card.append(cardbody);
    colxs3.append(card);
    row.append(colxs3);
});
    contnr.append(row);

}

document.body.append(header2,header,contnr);


