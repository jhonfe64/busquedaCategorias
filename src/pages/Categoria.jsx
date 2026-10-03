import { useParams } from "react-router";

const Categoria = () => {
  const { nombreCategoria } = useParams();
  const nombresanitizado = `${nombreCategoria?.charAt(0).toUpperCase()}${nombreCategoria?.substring(1).replaceAll("_", " ")}`;

  const subcategorias = [
    { id: 1, nombre: "Café, cacao y su preparación", cantidad: 122 },
    { id: 2, nombre: "Cereales", cantidad: 10 },
    { id: 3, nombre: "Control de plagas", cantidad: 14 },
    { id: 4, nombre: "Cultivos", cantidad: 122 },
    { id: 5, nombre: "Flores y jardín", cantidad: 1 },
    { id: 6, nombre: "Frutos secos", cantidad: 100 },
    { id: 7, nombre: "Frutas en conserva", cantidad: 135 },
    { id: 8, nombre: "Frutas frescas", cantidad: 1117 },
    { id: 9, nombre: "Harinas", cantidad: 12 },
    { id: 10, nombre: "Productos a base de harina", cantidad: 12 },
    { id: 11, nombre: "Hongos comestibles y algas", cantidad: 2 },

    { id: 12, nombre: "Café, cacao y su preparación", cantidad: 41 },
    { id: 13, nombre: "Cereales", cantidad: 35 },
    { id: 14, nombre: "Control de plagas", cantidad: 37 },
    { id: 15, nombre: "Cultivos", cantidad: 36 },
    { id: 16, nombre: "Flores y jardín", cantidad: 21 },
    { id: 17, nombre: "Frutos secos", cantidad: 18 },
    { id: 18, nombre: "Frutas en conserva", cantidad: 12 },
    { id: 19, nombre: "Frutas frescas", cantidad: 9 },
    { id: 20, nombre: "Harinas", cantidad: 90 },
    { id: 21, nombre: "Productos a base de harina", cantidad: 22 },
    { id: 22, nombre: "Hongos comestibles y algas", cantidad: 2 },
  ];

  return (
    <div className="grid grid-cols-12 mx-auto px-8 ">
      <div className="col-span-12">
        <h1 className="font-bold">{nombresanitizado}</h1>
        <div className="w-22 rounded overflow-hidden mt-8">
          <img src="/default.png" alt="imagen por defecto" />
        </div>
      </div>
      <div
        className={`col-span-12 mt-16 ${subcategorias.length < 8 ? "sm:columns-1" : "lg:columns-3"}`}
      >
        <ul className={"list-disc pl-4"}>
          {subcategorias.map((subcategoria) => {
            return (
              <li>
                <a href={`${nombreCategoria}/${subcategoria.nombre}`}>
                  {subcategoria.nombre}{" "}
                  <span className="text-gray-500 font-semibold">
                    ({subcategoria.cantidad})
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Categoria;
