import { useEffect,useState } from 'react';
import { Table } from 'react-bootstrap';
import { IProduct } from '../../Interfaces/IProduct';
import { getAllProductsUrl } from '../../utils/apiUrls';
import CustomPagination from '../CustomPagination/CustomPagination';
import FilterTable from '../FilterTable/FilterTable';
import TableRow from '../TableRow/TableRow';
import './CustomTable.css';

const tableHeaders = ['SL','Name','Rating','Price','Action'];
const productsPerPage = 5;
const filterPriceCol = 'price';
const filterRatingCol = 'rating';

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
    console.log('%c=================','color:yellow')
    console.log('indexOfLastProduct:',indexOfLastProduct)
    console.log('indexOfFirstProduct:',indexOfFirstProduct)
    console.log('currentProducts:',currentProducts)
    setCurrentPageProducts(currentProducts);

  }, [allProducts,currentPage])
  

  return (
    // align-items-center
    // 
    <div className='m-2 d-flex align-items-center flex-column'>

      <div className='table-parent'>
        <div className='d-flex justify-content-end' >
          <FilterTable allProducts={allProducts} setAllProducts={setAllProducts} filterColumn={filterPriceCol} />
          <div className='mx-4'></div>
          <FilterTable allProducts={allProducts} setAllProducts={setAllProducts} filterColumn={filterRatingCol}/>
        </div>

        <Table 
          className='main-table' 
          responsive="lg" 
          bordered
          hover  
        >
          <thead>
            <tr>
              {tableHeaders.map((header,indx)=><th key={indx} className={header==='Action' ? 'text-center' : ''}>{header}</th>)}
            </tr>
          </thead>
          
          <tbody>
            {
              currentPageProducts.map(product=> <TableRow key={product.id} product={product}/>)
            }
          </tbody>
        </Table>  
      </div>

      <CustomPagination 
          totalPages = {Math.ceil(allProducts.length/productsPerPage)}
          currentPage = {currentPage}
          setCurrentPage = {setCurrentPage}
        />
      
    </div>
  );
};

export default CustomTable;