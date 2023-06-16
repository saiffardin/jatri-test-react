import { Button } from "react-bootstrap";
import { IProduct } from "../../Interfaces/IProduct";

interface ITableRowProps {
  product:IProduct
}

const TableRow = ({product}:ITableRowProps) => {

  const showDetailsHandler = (product:IProduct) => {
    console.log('showDetailsHandler:',product)
  }

  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.title}</td>
      <td>{product.rating}</td>
      <td>{product.price}</td>
      <td><Button variant="primary" onClick={()=>showDetailsHandler(product)}>Show</Button> </td>   
                          
    </tr>
  );
};

export default TableRow;