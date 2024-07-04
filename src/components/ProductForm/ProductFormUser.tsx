import { useState } from "react";
import { Product } from "../../types";

interface AddItemProps {
  addItem: (i: Product) => void;
}

function ProductFormUser({ addItem }: AddItemProps) {
  const [name, setNameValue] = useState("");
  const [description, setDescriptionValue] = useState("");
  const [price, setPriceValue] = useState("");
  const [amount, setAmountValue] = useState("");
  // const [item, setItem] = useState<Product[]>([]);

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

  return (
    <div>
      <h1>Controle de Estoque</h1>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setNameValue(e.target.value)}
      />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescriptionValue(e.target.value)}
      />

      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPriceValue(e.target.value)}
      />
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmountValue(e.target.value)}
      />

      <button onClick={handleyAddList}>Adicionar ao estoque</button>
    </div>
  );
}

export default ProductFormUser;
