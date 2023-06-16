import { useState } from 'react';
import { Table } from 'react-bootstrap';
import './CustomTable.css';

const CustomTable = () => {
  const [tableHeaders] = useState(['SL','Name','Rating','Price','Action']);
  const [products] = useState({
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "images": [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ]
})

  return (
    // align-items-center
    // 
    <div className='table-parent d-flex align-items-center flex-column'>
      <div className='table-filter'>
        <h1>Inside CustomTable</h1>

      </div>

      
      <Table responsive="lg" className='main-table text-center'>
        <thead>
          <tr>
            {tableHeaders.map((header,indx)=><th key={indx}>{header}</th>)}
          </tr>
        </thead>
        
        <tbody>
          <tr>
            <td>{products.id}</td>
            <td>{products.title}</td>
            <td>{products.rating}</td>
            <td>{products.price}</td>
            <td>Show Button</td>
            
            
          </tr>
          <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          
          </tr>
          <tr>
            <td>3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            
          </tr>
        </tbody>
      </Table>
      
    </div>
  );
};

export default CustomTable;