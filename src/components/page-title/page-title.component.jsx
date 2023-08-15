import "./page-title.styles.scss";

const PageTitle = ({pageTitle="Our People"}) =>{
    return(
        <div className="page-title">
            <h1>{pageTitle}</h1>
        </div>
    )
}

export default PageTitle;