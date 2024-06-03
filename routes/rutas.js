const express = require("express"); //Importar
const router = express.Router();

router.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/public/index.html');
});

router.get("/datos", (req, res) => {
  res.send({
    mascotas: [
      {
        nombre:"Mojito",
        edad: "2 años",
        color: "marrón",
        raza: "Labrador Retriever",
        tiempo: "3 meses en el refugio",
        descrip: "El Labrador Retriever es conocido por ser amigable, leal y enérgico. Es excelente con niños y otros animales.",
        img: "assets/img/labrador.jpg"
      },
      {
        nombre:"Iggy",
        edad: "1 año",
        color: "negro y blanco",
        raza: "Bulldog Francés",
        tiempo: "1 mes en el refugio",
        descrip: "El Bulldog Francés es juguetón, cariñoso y leal. Se lleva bien con los niños y disfruta de la compañía humana.",
        img: "assets/img/bulldog.jpg"
      },
      {
        nombre:"Niebla",
        edad: "6 meses",
        color: "gris",
        raza: "Gato Doméstico",
        tiempo: "2 semanas en el refugio",
        descrip: "Este gato es muy curioso, juguetón y amistoso. Le encanta explorar y se lleva bien con otros gatos.",
        img: "assets/img/gato-gris.jpg"
      },
      {
        nombre:"Cruella",
        edad: "3 años",
        color: "blanco y negro",
        raza: "Dálmata",
        tiempo: "4 meses en el refugio",
        descrip: "El dálmata es un perro activo y enérgico. Es un gran compañero para personas que disfrutan del ejercicio y el aire libre.",
        img: "assets/img/dalmata.jpg"
      },
      {
        nombre: "Simba",
        edad: "1 año",
        color: "naranja y blanco",
        raza: "Siberiano",
        tiempo: "3 meses en el refugio",
        descrip: "Simba es un gato juguetón y cariñoso que disfruta explorando su entorno y acurrucándose en regazo. Busca un hogar amoroso donde pueda ser mimado.",
        img: "assets/img/siberiano-naranja.jpg"
      },
      {
        nombre:"Copito",
        edad: "4 años",
        color: "blanco",
        raza: "Samoyedo",
        tiempo: "2 meses en el refugio",
        descrip: "El Samoyedo es conocido por su personalidad amistosa y su pelaje blanco esponjoso. Es un excelente perro de compañía.",
        img: "assets/img/samoyedo.jpg"
      },
      {
        nombre: "Raccon",
        edad: "3 años",
        color: "Blanco y gris",
        raza: "Ragdoll",
        tiempo: "1 semana en el refugio",
        descrip: "Raccon es un gato amigable y cariñoso que busca un hogar donde pueda recibir mucho amor y atención. Se lleva bien con otros gatos.",
        img: "assets/img/ragdoll.jpg"
      },
      {
        nombre: "Eclipse",
        edad: "6 meses",
        color: "negro",
        raza: "Labrador Retriever",
        tiempo: "5 meses en el refugio",
        descrip: "Eclipse es una perrita activa y cariñosa que adora jugar y recibir caricias. Es ideal para familias con niños y otros perros.",
        img: "assets/img/labrador-negro.jpeg"
      },
      {
        nombre:"Wilson",
        edad: "2 años",
        color: "naranja",
        raza: "Gato Doméstico",
        tiempo: "3 semanas en el refugio",
        descrip: "Este gato es muy tranquilo y cariñoso. Disfruta de la compañía humana y es fácil de cuidar.",
        img: "assets/img/gato-naranja.jpg"
      },
      {
        nombre: "Bella",
        edad: "5 años",
        color: "marrón",
        raza: "Cocker Spaniel",
        tiempo: "6 meses en el refugio",
        descrip: "Bella es una perrita dulce y obediente que disfruta de largos paseos y de pasar tiempo en compañía de su familia. Está en busca de un hogar amoroso.",
        img: "assets/img/cocker.jpg"
      },
      {
        nombre: "Loki",
        edad: "4 meses",
        color: "gris oscuro",
        raza: "British Shorthair",
        tiempo: "2 semanas en el refugio",
        descrip: "Loki es un gatito juguetón y curioso que está buscando un hogar donde pueda explorar y recibir mucho cariño. Se adapta bien a otros gatos.",
        img: "assets/img/british.jpg"
      },
      {
        nombre: "Shine",
        edad: "3 años",
        color: "dorado naranjoso",
        raza: "Golden Retriever",
        tiempo: "4 meses en el refugio",
        descrip: "Shine es un Golden Retriever tranquilo y cariñoso que adora los paseos largos y jugar al aire libre. Está buscando una familia amorosa.",
        img: "assets/img/golden.jpeg"
      },
      {
        nombre: "Mia",
        edad: "2 años",
        color: "blanco y marrón",
        raza: "Bulldog Inglés",
        tiempo: "5 meses en el refugio",
        descrip: "Mia es una perrita Bulldog Inglés amigable y juguetona que busca un hogar donde pueda recibir mucho amor y atención. Se lleva bien con otros perros.",
        img: "assets/img/bulldog-frances.jpg"
      },
      {
        nombre: "Milo",
        edad: "1 año",
        color: "gris, blanco y café",
        raza: "Gato Doméstico",
        tiempo: "3 meses en el refugio",
        descrip: "Milo es un gato curioso y cariñoso que disfruta explorando su entorno y acurrucándose en regazo. Está en busca de un hogar amoroso donde pueda ser mimado.",
        img: "assets/img/gato-jack.jpg"
      },
      {
        nombre: "Stear",
        edad: "4 años",
        color: "blanco y negro",
        raza: "Border Collie",
        tiempo: "7 meses en el refugio",
        descrip: "Stear es un Border Collie inteligente y enérgico que adora correr y jugar al aire libre. Está buscando una familia activa que le proporcione mucho ejercicio y cariño.",
        img: "assets/img/border.jpg"
      }
  ]
  });
});

module.exports = router;