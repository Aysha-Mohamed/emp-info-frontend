const SearchByOffice = ({employees,employeesToShow,setEmployeesToShow,setCurrentPage,setEmployees,data}) =>{
    const initialEmployeeList = data;
    console.log("initi",initialEmployeeList);
    const employeesWithOffice = initialEmployeeList.filter((employee)=>employee.office !== null);
    const handleOfficeSearch = (event) =>{
        setEmployees(initialEmployeeList);
        if(event.target.value === "Search by office"){
            setEmployeesToShow(initialEmployeeList);
            setEmployees(initialEmployeeList);
            setCurrentPage(0);
            return;
        }

        employees = employeesWithOffice.filter((employee) => employee.office === event.target.value);
        console.log("employeesoff",employees);
        setEmployeesToShow(employees);
        setEmployees(employees);
        setCurrentPage(0);
        
    }
    
    return(
        <div>
            <select onChange={handleOfficeSearch}>
                <option defaultValue>Search by office</option>
                <option value="Lund">Lund</option>
                <option value="Stockholm">Stockholm</option>
                <option value="Helsingborg">Helsingborg</option>
                <option vlaue="Ljubljana">Ljubljana</option>
                <option value="Borlänge">Borlänge</option>
            </select>
        </div>
    )
}


export default SearchByOffice;