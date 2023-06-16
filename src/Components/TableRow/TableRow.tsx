import { IProduct } from "../../Interfaces/IProduct";

interface ITableRowProps {
  product:IProduct
}

const TableRow = ({product}:ITableRowProps) => {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.title}</td>
      <td>{product.rating}</td>
      <td>{product.price}</td>
      <td>Show Button</td>                        
    </tr>
  );
};

export default TableRow;