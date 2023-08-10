import { useState } from "react";
import ReactPaginate from "react-paginate";

const HomePage = (props) =>{
    console.log("props",props);
    const employees = props.employees;

    const [currentPage, setCurrentPage] = useState(0);

    const pageChangeHandler = ({ selected }) =>{
        setCurrentPage(selected);
    }

    const itemsPerPage = 10;
    const startItemIndex = currentPage * itemsPerPage;
    const endItemIndex = startItemIndex + itemsPerPage;
    const employeesToShow = employees.slice(startItemIndex,endItemIndex);


    return(
        <div className="App">
        <h1>Fetching Data from Backend !!!</h1>
        <ul>
          {employeesToShow.map((employee, index) => (
            <li key={index}>
              Name: {employee.name}, Email: {employee.email}
            </li>
          ))}
        </ul>
         <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          pageCount={Math.ceil(employees.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={pageChangeHandler}
          containerClassName={'pagination'}
          activeClassName={'active'}
        /> 
        </div>
    )
}

export default HomePage;