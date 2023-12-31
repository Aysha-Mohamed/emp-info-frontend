import { Link } from "react-router-dom";
import blankProfilePic from "../../assets/blank-profile-picture.jpg";
import "./employees-list.styles.scss";

const EmployeesList = ({ employeesToShow ,isGridRow}) => {
  return (

    <ul className={`${isGridRow ? 'grid-rows-layout' : 'grid-cols-layout'} employees-list-wrapper`}>
      {employeesToShow.map((employee, index) => (
        <li key={index} className="employee-item">
          <Link to={"/details"} state={{ employee }}>
            {employee.imagePortraitUrl === null &&
            employee.imageWallOfLeetUrl === null ? (
              <img
                src={blankProfilePic}
                alt={`Portrait of ${employee.name} working in the ${employee.primaryRole} team.`}
              />
            ) : employee.imagePortraitUrl !== null ? (
              <img
                src={employee.imagePortraitUrl}
                alt={`Portrait of ${employee.name} working in the ${employee.primaryRole} team.`}
              />
            ) : (
              <img
                src={employee.imageWallOfLeetUrl}
                alt={`Portrait of ${employee.name} working in the ${employee.primaryRole} team.`}
              />
            )}
            <div className="employee-item-text">
              <p className="emp-name">{employee.name}</p>
              <p className="emp-role">{employee.primaryRole}</p>
              {employee.office !== null && (
                <p className="emp-office">{employee.office}</p>
              )}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default EmployeesList;
