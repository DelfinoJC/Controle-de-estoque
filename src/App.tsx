import { useState } from "react";
import ProductFormUser from "./components/ProductForm/ProductFormUser";
import ListProduct from "./components/ProductList/ListProduct";
import { Product } from "./types";

function App() {
  const [productStock, setProduct] = useState<Product[]>([]);

  const addItemStock = (item: Product) => {
    setProduct([...productStock, item]);
    console.log(productStock)
  };

  const removeItemOfList = (id: number) => {
    const confirm = window.confirm("Quer mesmo excluir este produto ?");

    if (confirm) {
      setProduct(productStock.filter((i) => i.id !== id));
    }
  };

  return (
    <div className="BigDivGlobal">
      <ProductFormUser addItem={addItemStock} />
      <ListProduct
        arrayItem={productStock}
        functionRemoveItemArray={removeItemOfList}
      />
    </div>
  );
}

export default App;
