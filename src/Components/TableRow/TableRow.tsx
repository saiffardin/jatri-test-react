import { useState } from "react";
import { Button } from "react-bootstrap";
import { IProduct } from "../../Interfaces/IProduct";
import ProductDetailsModal from "../ProductDetailsModal/ProductDetailsModal";

interface ITableRowProps {
  product:IProduct
}

const TableRow = ({product}:ITableRowProps) => {
  const [modalShow, setModalShow] = useState<boolean>(false);

  return (
    <>
      <tr>
        <td>{product.id}</td>
        <td>{product.title}</td>
        <td>{product.rating}</td>
        <td>{product.price}</td>
        <td className="text-center">
          <Button variant="primary" onClick={()=>setModalShow(true)}>Show</Button> 
        </td>                   
      </tr>

      {/* open modal when SHOW btn is clicked */}
      <ProductDetailsModal 
        product={product}
        modalShow={modalShow}
        onHide={() => setModalShow(false)} />
    </>
  );
};

export default TableRow;