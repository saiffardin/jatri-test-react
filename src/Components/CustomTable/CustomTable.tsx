import { useEffect,useState } from 'react';
import { Table } from 'react-bootstrap';
import { IProduct } from '../../Interfaces/IProduct';
import { getAllProductsUrl } from '../../utils/apiUrls';
import CustomPagination from '../CustomPagination/CustomPagination';
import TableRow from '../TableRow/TableRow';
import './CustomTable.css';

const tableHeaders = ['SL','Name','Rating','Price','Action'];
const productsPerPage = 5;

const CustomTable = () => {
  const [allProducts,setAllProducts] = useState<IProduct[]>([])
  const [currentPage,setCurrentPage] = useState<number>(1)
  const [currentPageProducts,setCurrentPageProducts] = useState<IProduct[]>([])


  useEffect(() => {
    fetch(getAllProductsUrl())
      .then(res=>res.json())
      .then(data=> setAllProducts(data.products))
  
  }, [])

  useEffect(() => {
    const indexOfLastProduct   = currentPage * productsPerPage; // 5
    const indexOfFirstProduct  = indexOfLastProduct - productsPerPage; // 0
    const currentProducts      = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    setCurrentPageProducts(currentProducts);

  }, [allProducts,currentPage])
  

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
            currentPageProducts.map(product=> <TableRow key={product.id} product={product}/>)
          }
        </tbody>
      </Table>

      <CustomPagination 
        totalPages = {Math.ceil(allProducts.length/productsPerPage)}
        currentPage = {currentPage}
        setCurrentPage = {setCurrentPage}
      />
    </div>
  );
};

export default CustomTable;