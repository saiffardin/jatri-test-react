import { useEffect,useState } from 'react';
import { Table } from 'react-bootstrap';
import { IProduct } from '../../Interfaces/IProduct';
import { getAllProductsUrl } from '../../utils/apiUrls';
import TableRow from '../TableRow/TableRow';
import './CustomTable.css';

const tableHeaders = ['SL','Name','Rating','Price','Action'];

const CustomTable = () => {
  // const [tableHeaders] = useState(['SL','Name','Rating','Price','Action']);

  const [products,setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    fetch(getAllProductsUrl())
      .then(res=>res.json())
      .then(data=> setProducts(data.products))
  
  }, [])

  useEffect(() => {
    // console.clear();
    console.log('products:',products)
  }, [products])
  

  return (
    // align-items-center
    // 
    <div className='table-parent d-flex align-items-center flex-column'>
      <div className='table-filter'>
        <h1>Inside CustomTable</h1>

      </div>

      
      <Table responsive="lg" className='main-table '>
        <thead>
          <tr>
            {tableHeaders.map((header,indx)=><th key={indx}>{header}</th>)}
          </tr>
        </thead>
         
          
        <tbody>
          {
            products.map(product=> <TableRow key={product.id} product={product}/>)
          }
        </tbody>
      </Table>
      
    </div>
  );
};

export default CustomTable;