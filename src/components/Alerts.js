import React from 'react'

function Alerts(props) {
    // making first letter of type uppercase
    const cap = (word) => {
        let lower = word.toLowerCase();
        return lower[0].toUpperCase() + lower.slice(1);
    }
  
    return (
        // work only if props.alert is not null
        props.alert && (
            <div
                className={`alert alert-${props.alert.type} alert-dismissible fade show`}
                role='alert'
            >
                <strong>{cap(props.alert.type)}</strong>: {props.alert.message}
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>
    )
    )
   

}

export default Alerts
