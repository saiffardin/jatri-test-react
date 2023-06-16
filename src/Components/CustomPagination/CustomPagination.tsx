import { useEffect,useState } from "react";
import { Pagination } from "react-bootstrap";

interface ICustomPaginationProps {
  totalPages:number;
  currentPage:number;
  setCurrentPage:React.Dispatch<React.SetStateAction<number>>;
}

const CustomPagination = ({totalPages,currentPage,setCurrentPage}:ICustomPaginationProps) => {
  const [paginatedItems,setPaginatedItems] = useState<JSX.Element[]>([])

  useEffect(() => {
    const items = [];
    for (let number = 1; number <= totalPages; number++) {
      items.push(
        <Pagination.Item key={number} active={number === currentPage} onClick={()=>setCurrentPage(number)}>
          {number}
        </Pagination.Item>,
      );
    }
    setPaginatedItems(items)
  }, [totalPages,currentPage])
  

  return (
    <div>
      <Pagination>
        <Pagination.Prev onClick={()=>setCurrentPage(prev=> prev > 1 ? prev-1 : prev)}/>
        {paginatedItems}
        <Pagination.Next onClick={()=>setCurrentPage(prev=> prev < totalPages ? prev+1 : prev)}/>
      </Pagination>
    </div>
  );
};

export default CustomPagination;