import { useEffect,useState } from 'react';
import { Table } from 'react-bootstrap';
import { IProduct } from '../../Interfaces/IProduct';
import { getAllProductsUrl } from '../../utils/apiUrls';
import TableRow from '../TableRow/TableRow';
import './CustomTable.css';

const tableHeaders = ['SL','Name','Rating','Price','Action'];
const productsPerPage = 5;

/**
 *  const indexOfLastPost   = this.state.currentPage * postsPerPage;
    const indexOfFirstPost  = indexOfLastPost - postsPerPage;
    const currentPosts      = this.state.posts.slice(indexOfFirstPost, indexOfLastPost);
 */

const CustomTable = () => {
  // const [tableHeaders] = useState(['SL','Name','Rating','Price','Action']);

  const [allProducts,setAllProducts] = useState<IProduct[]>([])
  const [currentPage,setCurrentPage] = useState<number>(1)
  const [currentPageProducts,setCurrentPageProducts] = useState<IProduct[]>([])


  useEffect(() => {
    fetch(getAllProductsUrl())
      .then(res=>res.json())
      .then(data=> setAllProducts(data.products))
  
  }, [])

  useEffect(() => {
    console.clear();
    console.log('allProducts:',allProducts)

    const indexOfLastProduct   = currentPage * productsPerPage; // 5
    const indexOfFirstProduct  = indexOfLastProduct - productsPerPage; // 0
    const currentProducts      = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    setCurrentPageProducts(currentProducts);

  }, [allProducts])

  useEffect(() => {
    console.log('currentPageProducts:',currentPageProducts)
  
  }, [currentPageProducts])
  

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
      
    </div>
  );
};

export default CustomTable;