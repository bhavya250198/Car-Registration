import React, { useState, useEffect } from "react"
// import FontAwesome from "react-fontawesome";
 import DatePicker from "react-datepicker";
 import './styles.css'
 import "react-datepicker/dist/react-datepicker.css";
 const Planning = ()=>{
    const [startDate, setStartDate] = useState(new Date("2020/02/08"));
    const [endDate, setEndDate] = useState(new Date("2020/02/10"));
    return (
      <div>
        <DatePicker
          className="from"
          selected={startDate}
          onChange={date => setStartDate(date)}
          // selectsStart
          startDate={startDate}
          endDate={endDate}
        />
        <br/>
        <div className="form-group">
                    <label>Renter Return: </label> 
                    <br/>
         <DatePicker
          className="to"
          selected={endDate}
          onChange={date => setEndDate(date)}
          // selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        /> 
        </div>
      </div>
    );
  };
  export default Planning;