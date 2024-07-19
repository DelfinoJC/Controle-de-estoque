import { useState } from "react";
import { Product } from "../../types";
import { FormAddProductStock, InputForm, ButtonForm } from "./ProductForm.style";
import { useTheme } from "../../context/themeContext";

interface AddItemProps {
  addItem: (i: Product) => void;
}

function ProductFormUser({ addItem }: AddItemProps) {
  const [name, setNameValue] = useState("");
  const [description, setDescriptionValue] = useState("");
  const [price, setPriceValue] = useState("");
  const [amount, setAmountValue] = useState("");

  const handleyAddList = () => {
    const newProducts = {
      id: Date.now(),
      name,
      description,
      price,
      amount,
    };

    addItem(newProducts);
  };

  // const  handleyChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
  //   setNameValue(e.target.value)
  //   console.log(e)
  // }
  const { modeMoment, handleModeMoment } = useTheme();

  return (


    <FormAddProductStock themeMode={modeMoment}>
      <h1>Controle de Estoque</h1>

      <InputForm
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setNameValue(e.target.value)}
      />

      <InputForm
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescriptionValue(e.target.value)}
      />

      <InputForm
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPriceValue(e.target.value)}
      />
      <InputForm
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmountValue(e.target.value)}
      />

      <ButtonForm  themeMode={modeMoment} type="button" onClick={handleyAddList}>Adicionar ao estoque</ButtonForm>
    </FormAddProductStock>
  );
}

export default ProductFormUser;
