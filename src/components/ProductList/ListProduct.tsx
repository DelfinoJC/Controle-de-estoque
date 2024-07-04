import { Product } from '../../types'

interface Props {
    productItem: Product
    arrayItem: []
}

function ListProduct({ arrayItem, productItem}: Props) {
  return (
    <div>
      {arrayItem.map((item) => productItem.name, productItem.price)}
    </div>
  )
}

export default ListProduct
