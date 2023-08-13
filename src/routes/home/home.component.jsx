import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import SearchByName from "../../components/search/searchbyname.component";
import SearchByOffice from "../../components/search/searchbyoffice.component";
import { Link } from "react-router-dom";


const HomePage = ({employees,setEmployees,data}) =>{

 

    const [currentPage, setCurrentPage] = useState(0);

   

    const itemsPerPage = 10;
    const startItemIndex = currentPage * itemsPerPage;
    const endItemIndex = startItemIndex + itemsPerPage;

    
    const [employeesToShow,setEmployeesToShow] = useState([]);

    useEffect(() => {
      setEmployeesToShow(employees.slice(startItemIndex, endItemIndex));
    }, [employees, startItemIndex, endItemIndex]);



  

    const pageChangeHandler = ({ selected }) =>{
      console.log("selected",selected);
      setCurrentPage(selected);

  }

 

    return(
        <div className="App">
        <SearchByOffice employeesToShow={employeesToShow} setEmployeesToShow={setEmployeesToShow} data={data} employees={employees} setCurrentPage={setCurrentPage} setEmployees={setEmployees}/> 
        <SearchByName employeesToShow={employeesToShow} setEmployeesToShow={setEmployeesToShow} data={data} employees={employees} setCurrentPage={setCurrentPage} setEmployees={setEmployees}/>
        <ul>
          {employeesToShow.map((employee, index) => ( 
            <li key={index}>
              <Link to={'/details'} state = {{ employee }}>
              Name: {employee.name}, Email: {employee.email}
              </Link>
             
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