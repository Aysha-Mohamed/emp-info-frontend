import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Search from "../search/search.component";
import SearchByOffice from "../search/searchbyoffice.component";

const HomePage = ({employees,setEmployees,data}) =>{


   //const employees = props.employees;

    
 

    const [currentPage, setCurrentPage] = useState(0);

   

    const itemsPerPage = 10;
    const startItemIndex = currentPage * itemsPerPage;
    const endItemIndex = startItemIndex + itemsPerPage;
    console.log("cuuuu",currentPage);
    console.log("startItemIndex",startItemIndex);
    console.log("endItemIndex",endItemIndex);
    
    const [employeesToShow,setEmployeesToShow] = useState([]);

    useEffect(() => {
      setEmployeesToShow(employees.slice(startItemIndex, endItemIndex));
    }, [employees, startItemIndex, endItemIndex]);


    //useEffect(()=>{setEmployeesToShow(employees.slice(startItemIndex,endItemIndex));},[])
    //setEmployeesToShow(employees.slice(startItemIndex,endItemIndex));

  

    const pageChangeHandler = ({ selected }) =>{
      console.log("selected",selected);
      setCurrentPage(selected);

  }


  

    return(
        <div className="App">
        <SearchByOffice employeesToShow={employeesToShow} setEmployeesToShow={setEmployeesToShow} data={data} employees={employees} setCurrentPage={setCurrentPage} setEmployees={setEmployees}/> 
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