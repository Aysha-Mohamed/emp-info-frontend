import { useState } from 'react';
import { ImSearch } from 'react-icons/im'

const Search = ({employeesToShow,setEmployeesToShow,employees}) =>{

    
    const [searchText , setSearchText] = useState('');
    let employeeSearch = [];

    const searchHandler = (event) =>{
        employeeSearch = employees;
        setSearchText(event.target.value);
        employeeSearch.filter((employee) => {

            console.log("employeeSeaerch",employee.office,employee.name)
                if((employee.name != null && employee.name.indexOf(searchText) !== -1) || (employee.office !== null && employee.office.indexOf(searchText) !== -1)){
                    console.log("searchemp",employee);
                }
          
               
            
            
        })

    }
    return(
        
            <div>
                <input placeholder='Search by name or office' value={searchText} onChange={searchHandler}/>
                <ImSearch />
            </div>
    
    )
}

export default Search;