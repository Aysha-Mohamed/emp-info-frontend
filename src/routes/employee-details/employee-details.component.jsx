import { Link, useLocation } from "react-router-dom";
import PageTitle from "../../components/page-title/page-title.component";
import {
  AiOutlineGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";
import "./employee-details.styles.scss";
import comingSoonImage from "../../assets/blank-profile-picture-coming-soon.png";
const EmployeeDetails = () => {
  const location = useLocation();
  const selectedEmployee = location.state.employee;
  const mainText = selectedEmployee.mainText;

  // console.log(selectedEmployee);
  return (
    <div className="employee-details-wrapper">
      <PageTitle pageTitle={selectedEmployee.name} />

      <div className="employee-details">
        <div className="employee-image-wrapper">
          {selectedEmployee.imageWallOfLeetUrl === null &&
          selectedEmployee.imagePortraitUrl === null ? (
            <img src={comingSoonImage} alt="Profile pic not available" />
          ) : (
            <img
              src={selectedEmployee.imageWallOfLeetUrl}
              alt={selectedEmployee.name}
            />
          )}
        </div>
        <div className="employee-info">
          <div dangerouslySetInnerHTML={{ __html: mainText }} />
          <div className="employee-contact">
            <p>{selectedEmployee.email}</p>
            <p>{selectedEmployee.phoneNumber}</p>
            <div className="social-media-icons">
              {selectedEmployee.gitHub && (
                <a
                  href={`https://github.com/${selectedEmployee.gitHub}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineGithub />
                </a>
              )}
               {selectedEmployee.twitter && (
                <a
                  href={`https://twitter.com/${selectedEmployee.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillTwitterCircle />
                </a>
              )}
               {selectedEmployee.linkedIn && (
                <a
                  href={`https://linkedin.com${selectedEmployee.linkedIn}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin />
                </a>
              )}
              
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
