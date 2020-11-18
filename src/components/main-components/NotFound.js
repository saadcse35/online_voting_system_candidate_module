import React from "react";
import {Link} from "react-router-dom";

const NotFound = () => {
    return (

        <div className="not-found">
            <Link className="btn btn-outline-info btn-lg mr-4" to="/division"> Back to Home </Link>
            <h1 className="display-1 mr-4"> 404 - Page Not Found </h1>
            <Link className="btn btn-outline-info btn-lg" to="/division"> Back to Home </Link>
        </div>


    )
}
export default NotFound;