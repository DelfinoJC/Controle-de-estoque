import { Product } from "../../types";
import Stockitem from "../ProductItem/ItemProduct";
import { ListProductStyle } from '../ProductList/List.style'

interface Props {
  arrayItem: Product[];
  functionRemoveItemArray: (i: number) => void;
}

function ListProduct({ arrayItem, functionRemoveItemArray }: Props) {
  return (
    <ListProductStyle>
      {arrayItem.map((item) => (
        <Stockitem key={item.id} product={item} removeFunction={functionRemoveItemArray} />
      ))}
    </ListProductStyle>
  );
}

export default ListProduct;
