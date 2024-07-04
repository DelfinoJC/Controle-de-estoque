import { Product } from "../../types";

interface ProductProps {
  product: Product;
  removeFunction: (i: number) => void;
}

function Stockitem({ product, removeFunction }: ProductProps) {
  return (
    <>
      {product.name}
      {product.description}
      {product.amount}
      {product.price}
      <button type="button" onClick={() => removeFunction(product.id)}>
        Excluir
      </button>
    </>
  );
}

export default Stockitem;
