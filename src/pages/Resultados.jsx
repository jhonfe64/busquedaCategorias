
import React, { useState } from "react";
import { useParams } from "react-router";
import ProductoCard from "../components/ProductoCard";
import ProveedorCard from "../components/ProveedorCard";

const Resultados = () => {

  const [productSupplier, setProductSupplier] = useState("productos");
  const {nombreSubcategoria} = useParams()


  const productos = [1,2,3,4,5,6,7,8,9];


  return (
    <>
      <div className="items-center rounded overflow-hidden border border-blue-500 inline-block mb-12 text-sm">
        <button
          className={`${productSupplier === "productos" ? "bg-blue-500 text-white": "text-black bg-white"} p-2`}
          onClick={() => setProductSupplier("productos")}
        >
          Productos
        </button>
        <button
          className={`${productSupplier != "productos" ? "bg-blue-500 text-white": "text-black bg-white"} p-2`}
          onClick={() => setProductSupplier("proveedores")}
        >
          Proveedores
        </button>
      </div>
      <h1 className="font-semibold mb-12">Resultados: {nombreSubcategoria}</h1>
      <div className={`${productSupplier === "productos" ? "grid": "hidden"} grid-cols-12 gap-5`}>
        {
          productos.map((producto)=> {
            return <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              <ProductoCard/>
            </div> 
          })
        }
      </div>
      <div className={`${productSupplier === "proveedores" ? "grid": "hidden"} grid grid-cols-12 gap-5`}>
        {
          productos.map((producto)=> {
            return <div className="col-span-12 sm:col-span-6 lg:col-span-4">
              <ProveedorCard/>
            </div> 
          })
        }
      </div>
    </>
  );
};

export default Resultados;
