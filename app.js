function bojaTeksta(boja) {
  // ELEMENT.style menja stilove kao da smo radili <p id="tekst" style="color: NEKA_BOJA">...</p>
  // ovakvo menjanje izgleda ima prednost u odnosu na sve druge načine npr. da smo u stil.css stavili p {color: white;}, a da smo preko ELEMENT.style.color = "black" TEKST BI BIO CRN
  document.querySelector("#tekst").style.color = boja;
}

let velicina = 16;
function velicinaTeksta(znak) {
  if (znak === "+") {
    velicina++;
    // ako se osobina iz CSS-a sastoji iz više reči npr. #tekst {font size: 16px} u JS bi se pisalo spojeno i svaka reč osim prve počinje velikim slovom npr. ELEMENT.style.fontSize = "16px";
    document.querySelector("#tekst").style.fontSize = velicina + "px";
  } else {
    velicina--;
    velicina = Math.max(0, velicina); // da ne bi dobili negativnu vrednost
    document.querySelector("#tekst").style.fontSize = velicina - 1 + "px";
  }
}

function rotirajSliku1(stepen) {
  // jedan način je da rotiramo sliku za 180 stepeni (180deg) korišćenjem CSS stila transform: rotateY(STEPENI);
  document.querySelector("#gornja-slika").style.transform = "rotateY(" + stepen + ")";
}

function rotirajSliku2() {
  // pošto je goksi dao dve slike (pobednik1 i pobednik2) možemo samo da promenimo src slike;
  // u ovom slučaju bi HTML izgledao: <img src="pobednik1.jpg" id="gornja-slika" onmouseenter="rotirajSliku2();" onmouseleave="rotirajSliku2();" />
  const slika = document.querySelector("#gornja-slika");
  if (slika.src === "pobednik1.jpg") slika.src = "pobednik2.jpg";
  else slika.src = "pobednik1.jpg";
}

function prikaziSliku(slika) {
  // klasama nekog elementa upravljamo pomoću ELEMENT.classList
  // postoji ELEMENT.classList.add("NAZIV_KLASE") BEZ TAČKE. Može se koristiti iako element već ima tu klasu.
  // postoji ELEMENT.classList.remove("NAZIV_KLASE") BEZ TAČKE. Može se koristiti iako elemnt već nema tu klasu.
  // postoji ELEMENT.classList.contains("NAZIV_KLASE") BEZ TAČKE. Vraća true ili false u zavisnosti od toga da li elemnt sadrži tu klasu.

  // postoji više načina, ali mislim da je najlakše dodati klasu elementu koji smo kliknuli, odnosno oduzeli klasu ako je već ima.
  // ovako možemo da unutar CSS-a menjamo izgled kliknutog elementa.
  if (slika.classList.contains("prikazi")) slika.classList.remove("prikazi");
  else slika.classList.add("prikazi");
  // U CSS smo jednostavno dodali više osobina (npr. position: absolute; width: 100%; itd.)
  // Da smo to radili u JS trebalo bi slika.style.position = "absolute"; slika.style.width = "100%"; itd.
}
