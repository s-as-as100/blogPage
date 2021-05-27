import React from 'react';
import './Pol.css';


const Pol = () => {
    return ( 
        <div className="pol-container">
              <div className="cont-1">
              <button className="btn-1">view All poll</button>

              <h5>POLL</h5>

              <hr/>

              </div>
               
    <div className="cont-2">
        <span className="span-1">Do you think lockdown extension is good idea?</span>
    
   <div className="radios">
   <div className="rad-1">

<input type="radio" id="yes"  />
<label for="yes" >Yes</label><br/>
</div>
<div className="rad-2">

<input type="radio" id="no"  />
<label for="no" >No</label><br></br>
</div>
   </div>

    </div>
    

    <button className="btn-2">Login To Vote</button>



        </div>
     );
}
 
export default Pol;