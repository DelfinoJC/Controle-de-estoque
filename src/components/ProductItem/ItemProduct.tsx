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
  isDiv: boolean;
  removeFunction: (i: number) => void;
  editFunction: (i:number) => void;
}

function Stockitem({
  product,
  isDiv,
  removeFunction,
  editFunction,
}: ProductProps) {
  const [name, setNameValue] = useState("");
  const [description, setDescriptionValue] = useState("");
  const [price, setPriceValue] = useState("");
  const [amount, setAmountValue] = useState("");

  const { modeMoment, handleModeMoment } = useTheme();

  return (
    <ProductItem themeMode={modeMoment}>
      {isDiv ? (
        <ul>
          <li>
            <h2>{product.name}</h2>
          </li>
          <li>
            <h4>R$ {product.price}</h4>
          </li>
          <li>{product.amount} und. disponíveis</li>
          <li>{product.description}</li>
        </ul>
      ) : (
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
          </ul>
        </>
      )}

      <div>
        <ButtonEditStyled type="button" onClick={() => editFunction(product.id)}>
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
