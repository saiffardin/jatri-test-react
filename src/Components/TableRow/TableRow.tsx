import { useState } from "react";
import { Button } from "react-bootstrap";
import { IProduct } from "../../Interfaces/IProduct";
import ProductDetailsModal from "../ProductDetailsModal/ProductDetailsModal";

interface ITableRowProps {
  product:IProduct
}

const TableRow = ({product}:ITableRowProps) => {

  const [modalShow, setModalShow] = useState<boolean>(false);

  const showDetailsHandler = (product:IProduct) => {
    console.log('showDetailsHandler:',product);
    setModalShow(true)
  }

  return (
    <>
    <tr>
      <td>{product.id}</td>
      <td>{product.title}</td>
      <td>{product.rating}</td>
      <td>{product.price}</td>
      <td><Button variant="primary" onClick={()=>showDetailsHandler(product)}>Show</Button> </td>   
                          
    </tr>
    <ProductDetailsModal 
      product={product}
      modalShow={modalShow}
      onHide={() => setModalShow(false)} />
    </>
    
  );
};

export default TableRow;