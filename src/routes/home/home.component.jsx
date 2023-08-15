import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import SearchByName from "../../components/search/searchbyname.component";
import SearchByOffice from "../../components/search/searchbyoffice.component";
import EmployeesList from "../../components/employees-list/employees-list.component";
import "./home.component.scss";
import PageTitle from "../../components/page-title/page-title.component";
import Logo from "../../components/logo/logo.component";


import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import SortByName from "../../components/sort/sortbyname.component";
import LayoutChange from "../../components/layout-change/layout-change.component";


const HomePage = ({ employees, setEmployees, data }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isGridRow, setIsGridRow] = useState(false);

 useEffect(()=>{
  setIsGridRow(isGridRow)
 },[isGridRow]);
  const itemsPerPage = 10;
  const startItemIndex = currentPage * itemsPerPage;
  const endItemIndex = startItemIndex + itemsPerPage;

  const [employeesToShow, setEmployeesToShow] = useState([]);

  const [sort,setSort] = useState(false);


  useEffect(() => {
    setEmployeesToShow(employees.slice(startItemIndex, endItemIndex));
  }, [employees, startItemIndex, endItemIndex,sort]);

  const pageChangeHandler = ({ selected }) => {
    setCurrentPage(selected);
  };

 

  return (
    <div className="App">
      <PageTitle />
      {/* <Logo />  */}

      <section className="search-section">
        <SearchByOffice
          employeesToShow={employeesToShow}
          setEmployeesToShow={setEmployeesToShow}
          data={data}
          employees={employees}
          setCurrentPage={setCurrentPage}
          setEmployees={setEmployees}
        />
        <SearchByName
          employeesToShow={employeesToShow}
          setEmployeesToShow={setEmployeesToShow}
          data={data}
          employees={employees}
          setCurrentPage={setCurrentPage}
          setEmployees={setEmployees}
        />
      </section>

      <section className="sort-section">
        <LayoutChange isGridRow={isGridRow} setIsGridRow={setIsGridRow}/>
        
        <SortByName 
        employeesToShow={employeesToShow}
        setEmployeesToShow={setEmployeesToShow}
        data={data}
        employees={employees}
        setCurrentPage={setCurrentPage}
        setEmployees={setEmployees}
        sort={sort}
        setSort={setSort}
        />


      </section>

     
     

      <EmployeesList employeesToShow={employeesToShow} isGridRow={isGridRow}/>
      <ReactPaginate
        previousLabel={<BsFillArrowLeftSquareFill />}
        nextLabel={<BsFillArrowRightSquareFill />}
        breakLabel={"..."}
        pageCount={Math.ceil(employees.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={pageChangeHandler}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default HomePage;
