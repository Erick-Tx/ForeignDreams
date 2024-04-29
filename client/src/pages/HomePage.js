// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const listings = [
    // Datos de las viviendas similares a los de la imagen
    {
      id: 1,
      name: 'Casa Acogedora en el Bosque',
      owner: 'Juan Pérez',
      description: 'Encantadora casa de campo rodeada de naturaleza.',
      price: '$100 mensual',
      pet:'Si',
      area: 'Si',
      personas: '2',
      imageUrl: 'https://www.plusvalia.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg',
    },
    {
      id: 2,
      name: 'Departamento Via Yachay',
      owner: 'Erick Téquiz',
      description: 'Encantadora casa de campo rodeada de naturaleza.',
      price: '$130 mensual',
      pet:'Si',
      area: 'No',
      personas: '4',
      imageUrl: 'https://e.nexoinmobiliario.pe/customers/paz-centenario-s-a/561-ciudad-verde/departamentos-puente-piedra-63781589b8a97_b.jpg',
    },
      {
        id: 3,
        name: 'Cuarto Barrio La Merced',
        owner: 'Jamil Andi',
        description: 'Encantadora casa de campo rodeada de naturaleza.',
        price: '$90 mensual',
        pet:'No',
        area: 'Si',
        personas: '1',
        imageUrl: 'https://taleinmobiliaria.com/wp-content/uploads/2023/04/decoracion-departamento-vista-panoramica.jpg',
      },
      {
        id: 4,
        name: 'Minidepartamento San Vicente',
        owner: 'Victoria Hidalgo',
        description: 'Encantadora casa de campo rodeada de naturaleza.',
        price: '$150 mensual',
        pet:'Si',
        area: 'Si',
        personas: '2',
        imageUrl: 'https://u-storage.com.mx/wp-content/uploads/2019/02/departamento-01.jpg',
      },
      {
        id: 5,
        name: 'Casa Acogedora en el Bosque',
        owner: 'Juan Pérez',
        description: 'Encantadora casa de campo rodeada de naturaleza.',
        price: '$100 por noche',
        imageUrl: 'https://departamentosdeventaenquito.top/imgcliente/tipos-departamentos.jpg',
      },
      {
        id: 6,
        name: 'Casa Acogedora en el Bosque',
        owner: 'Juan Pérez',
        description: 'Encantadora casa de campo rodeada de naturaleza.',
        price: '$100 por noche',
        imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/298857591.jpg?k=aec68c4bebf843d262b6ded933b5fde13463943485163c0e617c7e88da6d823e&o=&hp=1',
      },
      {
        id: 7,
        name: 'Casa Acogedora en el Bosque',
        owner: 'Juan Pérez',
        description: 'Encantadora casa de campo rodeada de naturaleza.',
        price: '$100 por noche',
        imageUrl: 'https://edifica.com.pe/blog/wp-content/uploads/departamento-flat-necesitas-saber.jpg',
      },
      {
        id: 8,
        name: 'Casa Acogedora en el Bosque',
        owner: 'Juan Pérez',
        description: 'Encantadora casa de campo rodeada de naturaleza.',
        price: '$100 por noche',
        imageUrl: 'https://www.arkiplus.com/wp-content/uploads/2019/03/minidepartamentos.jpg',
      },
      {
        id: 9,
        name: 'Casa Acogedora en el Bosque',
        owner: 'Juan Pérez',
        description: 'Encantadora casa de campo rodeada de naturaleza.',
        price: '$100 por noche',
        imageUrl: 'https://bosquedelacosta.com.ec/wp/wp-content/uploads/2022/06/7-G-1-1.webp',
      },
      {
        id: 10,
        name: 'Casa Acogedora en el Bosque',
        owner: 'Juan Pérez',
        description: 'Encantadora casa de campo rodeada de naturaleza.',
        price: '$100 por noche',
        imageUrl: 'https://edifica.com.pe/blog/wp-content/uploads/ideas-decoracion-novedosa.jpg',
      },
      {
        id: 11,
        name: 'Casa Acogedora en el Bosque',
        owner: 'Juan Pérez',
        description: 'Encantadora casa de campo rodeada de naturaleza.',
        price: '$100 por noche',
        imageUrl: 'https://puntodestino.com.mx/wp-content/uploads/2021/05/departamentos-pequenos.jpg',
      },
      
    // Agregar más viviendas
    // ...
    {
      id: 12,
      name: 'Cabaña Romántica junto al Río',
      owner: 'Carlos Ramírez',
      description: 'Romántica cabaña para escapadas en pareja.',
      price: '$90 por noche',
      imageUrl: 'https://optimainmobiliaria.com/wp-content/uploads/2022/08/Optima-Inmobiliaria-%C2%A1Vive-en-un-gran-espacio-con-un-Mini-Departamento.jpg',
    },
  
  ];

  const renderListings = () => {
    return listings.map((listing) => (
      <div className="card" key={listing.id}>
        <img src={listing.imageUrl} alt={listing.name} className="card-image" />
        <div className="card-details">
          <h3>{listing.name}</h3>
          <p><b>Propietario:</b> {listing.owner}</p>
          <p><b>Pet Friendly:</b> {listing.pet}</p>
          <p><b>Área Verde:</b> {listing.area}</p>
          <p><b># Personas:</b> {listing.personas}</p>
          <p><b>Precio:</b> {listing.price}</p>
          <Link to={`/vivienda/${listing.id}`} className="btn">
            Ver Detalles
          </Link>
        </div>
      </div>
    ));
  };

  return (
    <div className="home-container">
      <header>
        
        <div className="hero-section">
          <h1>Descubre tu hogar perfecto</h1>
          <p>Encontramos las mejores opciones de vivienda para ti.</p>
          <div className="search-bar">
            <input type="text" placeholder="Buscar ubicación, ciudad o código postal" />
            <button className="search-button">Buscar</button>
          </div>
        </div>
      </header>

      <section className="listings">
        <h2>Viviendas Recientes</h2>
        <div className="card-container">{renderListings()}</div>
      </section>

      <section className="categories">
        <h2>Categorías</h2>
        {/* Aquí puedes mostrar las categorías de viviendas */}
      </section>

      <section className="featured">
        <h2>Viviendas Destacadas</h2>
        {/* Aquí puedes mostrar las viviendas destacadas */}
      </section>

      <footer>
        {/* Contenido del footer */}
      </footer>
    </div>
  );
}

export default Home;