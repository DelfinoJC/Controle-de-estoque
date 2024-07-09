import { Product } from "../../types";
import { ProductItem } from '../ProductItem/ProductItem.style'

interface ProductProps {
  product: Product;
  removeFunction: (i: number) => void;
}

function Stockitem({ product, removeFunction }: ProductProps) {
  return (
    <ProductItem>
      {product.name}
      {product.description}
      {product.amount}
      {product.price}
      <button type="button" onClick={() => removeFunction(product.id)}>
        Excluir
      </button>
    </ProductItem>
  );
}

export default Stockitem;
