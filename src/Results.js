
import React from 'react';
  
const Results = (props) => {
    return(
            <tr>
              {props.payments.map(payment => <td key={payment.id}>{payment}</td>)}
            </tr>
    )
}

export default Results;