import { useState } from "react";
import {LuLayoutGrid} from "react-icons/lu";
import {CiGrid2H} from "react-icons/ci";

const LayoutChange = ({isGridRow,setIsGridRow}) =>{

   


    const handleLayoutChange = (event) => {
        setIsGridRow(!isGridRow);
    }


    return(
        <div className="layout-change" onClick={handleLayoutChange}>
            {
                isGridRow ? <LuLayoutGrid/>
                :
                <CiGrid2H />

            }
             
        </div>
       
    )
}

export default LayoutChange;