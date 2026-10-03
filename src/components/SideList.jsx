const SideList = () => {
  return (
    <div>
      <h4 className="font-semibold text-blue-600 pb-4">Categorias</h4>
      <ul className="">
        <li className="pb-2">
          <a className="block truncate" href="/categoria/accesorios_de_moda">
            Accesorios de moda
          </a>
        </li>
        <li className="pb-2">
          <a className="block truncate" href="/categoria/agricultura">
            Agricultura
          </a>
        </li>
        <li className="pb-2">
          <a className="block truncate" href="/categoria/articulos_de_oficina">
            Artículos de oficina
          </a>
        </li>
        <li className="pb-2">
          <a className="block truncate" href="/categoria/belleza_y_cuidado_personal">
            Belleza y cuidado personal
          </a>
        </li>
        <li className="pb-2">
          <a className="block truncate" href="/categoria/cauchos_y_plasticos">
            Cauchos y plasticos
          </a>
        </li>
        <li className="pb-2">
          <a className="block truncate" href="/categoria/construccion">
            Construcción
          </a>
        </li>
        <li className="pb-2">
          <a className="block truncate" href="/categoria/electrodomesticos">
            Electrodomesticos
          </a>
        </li >
        <li className="pb-2">
          <a className="block truncate" href="/categoria/tecnologia">
            Tecnología
          </a>
        </li>
        <li className="pb-2">
          <a className="block truncate" href="/categoria/muebles_y_decoracion">
            Muebles y decoración
          </a>
        </li>
        <li className="pb-2">
          <a className="block truncate" href="/categoria/deportes">
            Deportes
          </a>
        </li>
        <li className="pb-2">
          <a className="block font-semibold text-blue-600 truncate" href="/categorias">
            Todas la categorías
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideList;
