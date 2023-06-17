import { useState } from 'react';
import { Dropdown,DropdownButton } from 'react-bootstrap';
import { IProduct } from '../../Interfaces/IProduct';
import './FilterTable.css';

interface IFilterTableProps {
  allProducts:IProduct[];
  setAllProducts : React.Dispatch<React.SetStateAction<IProduct[]>>;
  filterColumn:keyof IProduct;
 
}

const DEFAULT ='Default';
const ASCENDING ='Ascending';
const DESCENDING='Descending';

const FilterTable = ({allProducts,setAllProducts,filterColumn}:IFilterTableProps) => {
  const [filter,setFilter] = useState(DEFAULT);

  const dropDownHandler = (eventKey:string|null) => {
    // console.clear();
    console.log('eventKey:',eventKey)
    console.log('filterColumn:',filterColumn)
    
    setFilter(eventKey || DEFAULT)
    const filterProducts : IProduct[] = sortByColumnName(filterColumn,eventKey);
    setAllProducts([...filterProducts])
  }

  const sortByColumnName = (filterColumn:keyof IProduct, sortingOrder:string|null) : IProduct[]  => {
    
    // console.log('allProducts:',allProducts.map(prod=>({title:prod.title,price:prod.price})))
    // const filterProducts = allProducts.sort((a, b) => (a[filterColumn] as number) - (b[filterColumn] as number));
    // console.log('filterProducts:',filterProducts.map(prod=>({title:prod.title,price:prod.price})))
    
    switch (sortingOrder) {
      case ASCENDING:
        return allProducts.sort((a, b) => (a[filterColumn] as number) - (b[filterColumn] as number))
      
      case DESCENDING:
        return allProducts.sort((b, a) => (a[filterColumn] as number) - (b[filterColumn] as number))

      default:
        return allProducts.sort((a, b) => (a['id'] as number) - (b['id'] as number));
    }
  }

  return (
    <div className="filter-table d-flex">
      {/* style={{'backgroundColor':'grey'}} */}
      <h6 className='my-auto mx-1 text-capitalize'>{filterColumn}</h6>
      <DropdownButton
        variant='success'
        size="sm"
        title={filter}
        onSelect={dropDownHandler}
      >
        <Dropdown.Item eventKey={DEFAULT}>{DEFAULT}</Dropdown.Item>
        <Dropdown.Item eventKey={ASCENDING}>{ASCENDING}</Dropdown.Item>
        <Dropdown.Item eventKey={DESCENDING}>{DESCENDING}</Dropdown.Item>
       
      </DropdownButton>
    </div>
  );
};

export default FilterTable;