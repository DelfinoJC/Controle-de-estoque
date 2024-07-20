import { useState } from "react";
import { Product } from "../../types";
import {
  ProductItem,
  ButtonDeleteStyled,
  ButtonEditStyled,
} from "../ProductItem/ProductItem.style";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useTheme } from "../../context/themeContext";

interface ProductProps {
  product: Product;
  isEditing: boolean;
  idProductIdFunction: (i: number) => void;
  removeFunction: (i: number) => void;
  editFunction: (i: number, newItem: Product) => void;
}

function Stockitem({
  product,
  isEditing,
  idProductIdFunction,
  removeFunction,
  editFunction,
}: ProductProps) {
  const [name, setNameValue] = useState("");
  const [description, setDescriptionValue] = useState("");
  const [price, setPriceValue] = useState("");
  const [amount, setAmountValue] = useState("");
  const [selectItem, setSelectItem] = useState("");

  const hadleEditProduct = () => {
    if (isEditing) {
      editFunction(product.id, {
        ...product,
        name,
        description,
        price,
        amount,
        selectItem,
      });
    }
    idProductIdFunction(product.id);
  };

  const { modeMoment, handleModeMoment } = useTheme();

  return (
    <ProductItem themeMode={modeMoment}>
      {isEditing ? (
        <>
          <ul>
            <li>
              <input
                placeholder={product.name}
                value={name}
                onChange={(e) => setNameValue(e.target.value)}
              />
            </li>
            <li>
              <input
                placeholder={product.description}
                value={description}
                onChange={(e) => setDescriptionValue(e.target.value)}
              />
            </li>
            <input
              placeholder={product.amount}
              value={amount}
              onChange={(e) => setAmountValue(e.target.value)}
            />
            <input
              placeholder={product.price}
              value={price}
              onChange={(e) => setPriceValue(e.target.value)}
            />
            <select
              value={selectItem}
              onChange={(e) => setSelectItem(e.target.value)}
            >
              <option value="">Selecione um categoria</option>
              <option value="comida">Comida</option>
              <option value="eletronico">Eletronico</option>
              <option value="movel">Movel</option>
              <option value="Não é comida">Não é comida</option>
            </select>
          </ul>
        </>
      ) : (
        <ul>
          <li>
            <h2>{product.name}</h2>
          </li>
          <li>
            <h4>R$ {product.price}</h4>
          </li>
          <li>{product.amount} und. disponíveis</li>
          <li>{product.description}</li>
          <li>{product.selectItem}</li>
        </ul>
      )}

      <div>
        <ButtonEditStyled type="button" onClick={hadleEditProduct}>
          <FaEdit></FaEdit>
        </ButtonEditStyled>

        <ButtonDeleteStyled
          type="button"
          onClick={() => removeFunction(product.id)}
        >
          <FaTrash></FaTrash>
        </ButtonDeleteStyled>
      </div>
    </ProductItem>
  );
}

export default Stockitem;
