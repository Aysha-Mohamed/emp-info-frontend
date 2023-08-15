import { useEffect } from "react";
import "./sort.styles.scss";

const SortByName = ({employees,employeesToShow,setEmployeesToShow,setCurrentPage,setEmployees,data,sort,setSort}) =>{

    const initialEmployees = data;


    const employeesToSort = employees;
    useEffect(()=>{
        // console.log("refresh sort");
        setSort(false);
    },[employeesToShow])
   
    const handleSort = (event) =>{
        console.log("emps",employeesToSort);
       
        event.target.value === "nameAtoZ" || event.target.value === "Sort"? 
        employeesToSort.sort((a, b) => a.name.localeCompare(b.name)) :
        employeesToSort.sort((a, b) => b.name.localeCompare(a.name));

        // console.log("empsafter",employeesToSort);
        setEmployeesToShow(employeesToSort);
        setEmployees(employees);
        setSort(true);
        setCurrentPage(0);
        


    }

   
  
    return(
        <div>
            <select onChange={handleSort}>
                <option defaultValue>Sort</option>
                <option value="nameAtoZ">Sort by Name - A to Z</option>
                <option value="nameZtoA">Sort By Name - Z to A</option>
            </select>
        </div>
    )
}

export default SortByName;