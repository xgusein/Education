import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {IoIosAlert} from 'react-icons/io';
import './page.css'

function Page() {
    return (
      <div className="box">
        <div className="box_header">
            <h1 className="heading">The Company</h1>
            <h2>Shipping Time <br /> Calculator</h2>
            <div className="inputs">
                <input type="date" />
                <input type="text" required="required"/>
                <span>Quantity<IoIosAlert className="Alert_icon"/></span>
                <select id="Fabric" name="Fabric">
                  <option value="">Fabric Type</option>
                  <option value="saab">Cotton</option>
                  <option value="fiat">Linen</option>
                </select>
            </div>
            <button className="calculate">Calculate</button>
        </div>
      </div>
    );
  }
  
  export default Page;
  