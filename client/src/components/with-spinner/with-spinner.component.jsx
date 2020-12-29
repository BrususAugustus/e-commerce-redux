import React from "react";
import {SpinnerOverlay, SpinnerContainer} from "./with-spinner.styles";

//Higher order component. Takes an another component as an argument, and returns it if the page is done loading. 
//In other case (page is still loading), it returns the spinner component
const WithSpinner = WrappedComponent => ({isLoading, ...otherProps})=>{
    return isLoading ? ( 
    <SpinnerOverlay>
        <SpinnerContainer/>
    </SpinnerOverlay>
    ):(
    <WrappedComponent {...otherProps}/>
    )
}
 
export default WithSpinner;