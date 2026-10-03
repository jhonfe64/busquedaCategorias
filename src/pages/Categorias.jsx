import React from "react";
import Categoria from "./Categoria";

const Categorias = () => {
  const categorias = [
    {
      id: 1,
      nombre: "Accesorios de moda",
      slug: "accesorios_de_moda",
      subcategorias: [
        { id: 101, nombre: "Bolsos" },
        { id: 102, nombre: "Carteras" },
        { id: 103, nombre: "Cinturones" },
        { id: 104, nombre: "Gafas" },
      ],
    },
    {
      id: 2,
      nombre: "Agricultura",
      slug: "agricultura",
      subcategorias: [
        { id: 201, nombre: "Semillas" },
        { id: 202, nombre: "Fertilizantes" },
        { id: 203, nombre: "Herramientas agrícolas" },
        { id: 204, nombre: "Sistemas de riego" },
      ],
    },
    {
      id: 3,
      nombre: "Artículos de oficina",
      slug: "articulos_de_oficina",
      subcategorias: [
        { id: 301, nombre: "Papelería" },
        { id: 302, nombre: "Escritura" },
        { id: 303, nombre: "Archivadores" },
        { id: 304, nombre: "Organización" },
      ],
    },
    {
      id: 4,
      nombre: "Belleza y cuidado personal",
      slug: "belleza_y_cuidado_personal",
      subcategorias: [
        { id: 401, nombre: "Cuidado facial" },
        { id: 402, nombre: "Cuidado capilar" },
        { id: 403, nombre: "Maquillaje" },
        { id: 404, nombre: "Cuidado corporal" },
      ],
    },
    {
      id: 5,
      nombre: "Cauchos y plasticos",
      slug: "cauchos_y_plasticos",
      subcategorias: [
        { id: 501, nombre: "Tubos y mangueras" },
        { id: 502, nombre: "Envases plásticos" },
        { id: 503, nombre: "Láminas de caucho" },
        { id: 504, nombre: "Perfiles plásticos" },
      ],
    },
    {
      id: 6,
      nombre: "Construcción",
      slug: "construccion",
      subcategorias: [
        { id: 601, nombre: "Materiales de construcción" },
        { id: 602, nombre: "Herramientas" },
        { id: 603, nombre: "Pinturas" },
        { id: 604, nombre: "Acabados" },
      ],
    },
    {
      id: 7,
      nombre: "Electrodomesticos",
      slug: "electrodomesticos",
      subcategorias: [
        { id: 701, nombre: "Cocina" },
        { id: 702, nombre: "Refrigeración" },
        { id: 703, nombre: "Lavado" },
        { id: 704, nombre: "Climatización" },
      ],
    },
    {
      id: 8,
      nombre: "Tecnología",
      slug: "tecnologia",
      subcategorias: [
        { id: 801, nombre: "Computadores" },
        { id: 802, nombre: "Celulares" },
        { id: 803, nombre: "Accesorios tecnológicos" },
        { id: 804, nombre: "Componentes electrónicos" },
      ],
    },
    {
      id: 9,
      nombre: "Muebles y decoración",
      slug: "muebles_y_decoracion",
      subcategorias: [
        { id: 901, nombre: "Muebles" },
        { id: 902, nombre: "Decoración" },
        { id: 903, nombre: "Iluminación" },
        { id: 904, nombre: "Textiles para el hogar" },
      ],
    },
    {
      id: 10,
      nombre: "Deportes",
      slug: "deportes",
      subcategorias: [
        { id: 1001, nombre: "Fútbol" },
        { id: 1002, nombre: "Fitness" },
        { id: 1003, nombre: "Ciclismo" },
        { id: 1004, nombre: "Deportes acuáticos" },
      ],
    },
  ];

  return (
    <div>
  <h1 className="font-semibold mb-16 text-lg">
    Todas las categorias
  </h1>

  <div
    className={`mt-16 grid gap-6 ${
      categorias.length > 9
        ? "md:grid-cols-3"
        : "grid-cols-1"
    }`}
  >
    {categorias.map((categoria) => (
      <div key={categoria.id}>
        <h3 className="font-semibold mb-8">
          {categoria.nombre}
        </h3>

        <div className="flex">
          <div className="bg-gray-200 w-15 h-15 rounded"></div>
          <div>
            <ul className="ml-4 text-sm">
              {
                categoria.subcategorias.map((subcategoria)=> {
                  return (<li>{subcategoria.nombre}</li>)
                })
              }
              <li className="mt-1.5">
                <a href={`/categoria/${categoria.nombre}`} className="text-blue-500 font-semibold">Ver más {">"}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default Categorias;
