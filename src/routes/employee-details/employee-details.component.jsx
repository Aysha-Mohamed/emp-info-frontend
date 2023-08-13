import { useLocation } from "react-router-dom";

const EmployeeDetails = () =>{

    const location = useLocation();
    const selectedEmployee = location.state.employee;
    const mainText = selectedEmployee.mainText;
    
    console.log(selectedEmployee)
    return(
        <div>
      <h2>Employee details</h2>
    
        <div>
          <p>Name: {selectedEmployee.name}</p>
          <p>Email: {selectedEmployee.email}</p>
          <div dangerouslySetInnerHTML={{ __html: mainText }} />
          <img src={selectedEmployee.imageWallOfLeetUrl} alt={selectedEmployee.name}/>
        </div>
    
    </div>
    )
}

export default EmployeeDetails;