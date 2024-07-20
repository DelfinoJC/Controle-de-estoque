import { useState } from "react";
import { Product } from "../../types";
import Stockitem from "../ProductItem/ItemProduct";
import { ListProductStyle } from "../ProductList/List.style";

interface Props {
  arrayItem: Product[];
  functionRemoveItemArray: (i: number) => void;
  editItemFunction: (i: number, newItem: Product) => void;
}

function ListProduct({
  arrayItem,
  functionRemoveItemArray,
  editItemFunction,
}: Props) {
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleGetId = (id: number) => {
    setEditingId((idItem) => (idItem === id ? null : id));
  };

  return (
    <ListProductStyle>
      {arrayItem.map((item) => (
        <Stockitem
          key={item.id}
          product={item}
          idProductIdFunction={handleGetId}
          isEditing={editingId === item.id}
          removeFunction={functionRemoveItemArray}
          editFunction={editItemFunction}
        />
      ))}
    </ListProductStyle>
  );
}

export default ListProduct;
