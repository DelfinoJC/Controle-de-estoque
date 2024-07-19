import { useState } from "react";
import ProductFormUser from "./components/ProductForm/ProductFormUser";
import ListProduct from "./components/ProductList/ListProduct";
import { Product } from "./types";
import { ButtonMode, Container } from "./App.style";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "./context/themeContext";

function App() {
  const [productStock, setProduct] = useState<Product[]>([]);
  const [isDivApp, setIsDiv] = useState(true);

  const addItemStock = (item: Product) => {
    setProduct([...productStock, item]);
  };

  const editItemOfList = (id: number) => {
    // 1. qual item editar
    productStock.map((i) => {
      if(i.id === id){
        console.log(id)
      }
    });
    setIsDiv(!isDivApp);
  };

  const removeItemOfList = (id: number) => {
    const confirm = window.confirm("Quer mesmo excluir este produto ?");

    if (confirm) {
      setProduct(productStock.filter((i) => i.id !== id));
    }
  };

  const { modeMoment, handleModeMoment } = useTheme();

  return (
    <Container themeMode={modeMoment}>
      <ButtonMode
        themeMode={modeMoment}
        type="button"
        onClick={handleModeMoment}
      >
        {modeMoment ? <FaSun /> : <FaMoon />}
      </ButtonMode>
      <ProductFormUser addItem={addItemStock} />
      <ListProduct
        isDivList={isDivApp}
        arrayItem={productStock}
        functionRemoveItemArray={removeItemOfList}
        editItemFunction={editItemOfList}
      />
    </Container>
  );
}

export default App;
