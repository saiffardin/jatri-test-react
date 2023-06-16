import { Button,Modal } from "react-bootstrap";
import { IProduct } from "../../Interfaces/IProduct";

interface IProductDetailsModalProps {
  product:IProduct;
  modalShow:boolean;
  onHide: () => void;
}

const ProductDetailsModal = ({product,modalShow,onHide}:IProductDetailsModalProps) => {

  return (
    <Modal
      show={modalShow}
      size="lg"
      centered
    >
      <Modal.Header >
        <Modal.Title>
          View Details
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="row ">
          {/* left - text*/}
          <div className="col-md-6 ">
            <p><strong>Name:</strong> <span>{product.title}</span></p>
            <p><strong>Price:</strong> <span>{product.price}</span></p>
            <p><strong>Rating:</strong> <span>{product.rating}</span></p>
            <p><strong>Description:</strong> <span>{product.description}</span></p>
          </div>

          {/* right - img */}
          <div className="col-md-6">
            <img src={product.thumbnail} className="img-thumbnail" alt={product.title}/>
          </div>
        </div> 
      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductDetailsModal;