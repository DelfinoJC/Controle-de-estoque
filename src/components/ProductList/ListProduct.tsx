import { Product } from "../../types";
import Stockitem from "../ProductItem/ItemProduct";
import { ListProductStyle } from "../ProductList/List.style";

interface Props {
  arrayItem: Product[];
  isDivList: boolean;
  functionRemoveItemArray: (i: number) => void;
  editItemFunction: (i: number) => void;
}

function ListProduct({
  arrayItem,
  isDivList,
  functionRemoveItemArray,
  editItemFunction,
}: Props) {
  return (
    <ListProductStyle>
      {arrayItem.map((item) => (
        <Stockitem
          key={item.id}
          product={item}
          isDiv={isDivList}
          removeFunction={functionRemoveItemArray}
          editFunction={() => editItemFunction(item.id)}
        />
      ))}
    </ListProductStyle>
  );
}

export default ListProduct;
