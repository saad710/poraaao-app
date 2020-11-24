import React from 'react';
import "./SearchAssignment.css";
import SearchIcon from "@material-ui/icons/Search";

const SearchAssignment = () => {
    return (
        <div className="search-assignment">
            <div className="row">
                <div className="col-md-12" style={{padding:"70px",textAlign:"center"}}>
                   <h4 style={{color:"white"}}>Find 100+</h4>
                   <h4 style={{color:"white"}}>Assignment From Here</h4>
                   <p style={{color:"white", fontWeight:"400"}}>All Assignment are included in porao.com</p>
                   <div className="header_mid" style={{marginLeft:"24%"}}>   
                    <input
                        type="text"
                        placeholder="Search Courses by Topic, Subject etc"
                        className="search-input-assignment"
                    />
                    <SearchIcon className="header_inputbutton" />
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default SearchAssignment;