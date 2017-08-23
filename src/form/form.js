import React, { Component } from 'react';
//importing Moment
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import MyService from './service.js'

class MyForm extends Component {
   constructor(props) {
      super(props);
      this.state = {startDay: moment(), endDay : moment(), diff : null, selectedDate :0};
      this.handleChange = this.handleChange.bind(this);
      this.handleEndChange = this.handleEndChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handle firstDate Input Change
    handleChange(date) {
        console.log( "date : ", date, "this :", this.state.selectedDate);
        this.setState({startDate: date});
    }
    // handle SecondDate Input Change
    handleEndChange(date) {
        this.setState({endDate: date});
        
    }
    // handle Form submit
    handleSubmit(event) {
        MyService.calculateDiff(moment(this.state.startDate).toDate, moment(this.state.endDate).toDate)
    this.setState({diff : Math.abs(moment(this.state.startDate).diff(moment(this.state.endDate), 'days'))});
    }

      

  render() {
    return (
        
        <div className="dateForm col-md-4 col-md-offset-4" >
          <form onSubmit={this.handleSubmit}> 
              
              <div className="form-group">
                <label>Start Date  : </label>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    selectsStart
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    isClearable={true}
                    todayButton={"Today"}
                    className="form-control"
                />
              </div>

              <div className="form-group">
                  <label >End Date  : </label>
                    <DatePicker
                        selected={this.state.endDate}
                        onChange={this.handleEndChange}
                        selectsEnd
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        isClearable={true}
                        todayButton={"Today"}
                        className="form-control"
                    /> 
              </div>

            <input type="submit" value="soumettre" className="btn btn-primary" />
          </form>
          <h1 className="bg-info"> la difference est : {this.state.diff}</h1>
        </div>
    );
  }
}

export default MyForm;
