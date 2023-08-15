import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import "./search.styles.scss";

const SearchByName = ({employees,employeesToShow,setEmployeesToShow,setCurrentPage,setEmployees,data}) =>{

        const [searchName,setSearchName] = useState('');
       

            const initialEmployeeList = data;
           // const employeesCaseSensitive = initialEmployeeList.map((emp)=>({...emp,name:emp.name.toLowerCase()}));
        //    const employeesWithOffice = initialEmployeeList.filter((employee)=>employee.office !== null);
            const handleNameSearch = (event) =>{
               
                setSearchName(event.target.value);
              
                setEmployees(initialEmployeeList);
                
                if(event.target.value.length === 0){
                    setEmployeesToShow(initialEmployeeList);
                    setEmployees(initialEmployeeList);
                    setCurrentPage(0);
                    return;
                }
                
                else{
                //    employees = initialEmployeeList.filter((employee) => employee.name.toLowerCase().indexOf(event.target.value) !== -1);
                employees = initialEmployeeList.filter((employee) => employee.name.toLowerCase().includes(event.target.value.toLowerCase()));

                    setEmployeesToShow(employees);
                    setEmployees(employees);
                    setCurrentPage(0);
                }
                
                
            }
    
    return(
        
            <div>
                <input placeholder='Search by name or office'  value={searchName} onChange={handleNameSearch}/>
                {/* <ImSearch /> */}
            </div>
    
    )
}

export default SearchByName;