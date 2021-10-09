const data = {
  mainTitle: "My Favourite Gif's - Day in a Life of a Developer!",
  cardContents: [
    {
      name: "In Bed",
      imageLink:
        "./milk-and-mocha-bear-couple.gif",
    },
    {
      name: "Early Morning",
      imageLink:
        "./bear-charging.gif",
    },
    {
      name: "Morning Walk",
      imageLink:
        "./milk-and-mocha-bear.gif",
    },
    {
      name: "Morning Coffee",
      imageLink:
        "./allitenor-bear.gif",
    },
    {
      name: "Mid Morning",
      imageLink:
        "./teddy-bear.gif",
    },
    {
      name: "Lunch Time",
      imageLink:
        "./milk-milk-and-mocha.gif",
    },
    {
      name: "Trying to work",
      imageLink:
        "./milk-and-mocha-hug.gif",
    },
    {
      name: "Afternoon Siesta zzz",
      imageLink:
        "./milk-and-mocha-tired.gif",
    },
    {
      name: "Early Morning",
      imageLink:
        "./give-me-attention-notice-me.gif",
    },
    {
      name: "Bed Time Approaching",
      imageLink:
        "./milk-and.gif",
    },
    {
      name: "Late Night",
      imageLink:
        "./bubu-dudu.gif",
    }
    
  ],
  userData: { name: "Crio.Do", tagLine: "Baby steps into the world of web!" },
};


// Plug in title data to HTML
let mainTitleElement = document.getElementById("main-title");
mainTitleElement.innerHTML += data.mainTitle;


// Create template for card content
let getCardStructure = (name, imageLink) => {
  return `<div class="col-12 col-sm-3 mb-4">
  <div class="tile">
    <div class="tile-text text-center">
      <h5>${name}</h5>
    </div>
    <img 
      src="${imageLink}" />
  </div>
</div>`;
};

let cardRow = document.getElementById("card-row");

// Plug in card data to HTML
data.cardContents.forEach((cardContent) => {
  let { name, imageLink } = cardContent;
  cardRow.innerHTML += getCardStructure(name, imageLink);
});

// Create template for footer content
let getFooterStructure = (name, tagLine) => {
  return `<h3 class="me-3"><i class="fas fa-heart"></i> Copyrights &copy; <a href="https://github.com/DionneNoellaBarretto" target="_blank"> DNB</a></h3>
    <p>${tagLine} <br> Image Credits - <a href="https://tenor.com" target="_blank">tenor.com</a></p> <h5><a href="https://crio.do" target="_blank"> ${name} </h5>`;
};

let footerContent = document.getElementById("footer");
let { name, tagLine } = data.userData;

// Plug in footer data to HTML
footerContent.innerHTML += getFooterStructure(name, tagLine);
