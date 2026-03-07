import {NavLink} from "react-router-dom"
function BusinessRegistrationForm() {
    return (
      <div>
        <form>
          <label>Business Name :</label>
          <input placeholder="Enter Business Name" />
          <label> Business Email </label>
          <input placeholder="Enter Business Email" />
          <label>Country</label>
          <input placeholder="Enter Country" />
          <label>City</label>
          <input placeholder="Enter City or Town" />
          <label>Choose Category</label>
          <select>
            <option>Agriculture & Farming</option>
            <option>Food & Beverage</option>
            <option>Technology</option>
            <option>Healthcare & Medical</option>
            <option>Finance & Insurance</option>
            <option>Real Estate & Construction</option>
          </select>
          <label> Business Creation Date</label>
          <input placeholder="Enter date"/>
          <label> Blessing Classification</label>
          <option>Big</option>
          <option>Medium</option>
          <option>Small</option>
          <label>Description</label>
          <input placeholder="Enter Description"/>
          <label>Password</label>
          <input placeholder="Enter Password"/>
        </form>
      </div>
    );
}

export default BusinessRegistrationForm
