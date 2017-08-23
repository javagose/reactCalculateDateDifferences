import React, { Component } from 'react';
//importing Moment
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import MyService from './service.js'

class MyForm extends Component {
    //constructor
   constructor(props) {
      super(props);
      this.state = {startDay: moment(), endDay : moment(), diff : null};

      this.handleStartChange = this.handleStartChange.bind(this);
      this.handleEndChange = this.handleEndChange.bind(this);
    }

    // handle firstDate Input Change
    handleStartChange(date) {
        this.setState({startDate: date});
        this.setState({diff : MyService.calculateDiff(this.state.startDate,this.state.endDate)});
    }
    // handle SecondDate Input Change
    handleEndChange(date) {
        this.setState({endDate: date});
        this.setState({diff : MyService.calculateDiff(this.state.startDate,this.state.endDate)});
        
    }

   //render View 
    render() {
        return (
            
            <div className="dateForm col-md-4 col-md-offset-4" >
            <form> 
                <div className="form-group">
                    <label>Start Date  : </label>
                    <DatePicker
                        selected={this.state.startDate}
                        selectsStart
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        isClearable={true}
                        todayButton={"Today"}
                        onChange={this.handleStartChange}
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label >End Date  : </label>
                        <DatePicker
                            selected={this.state.endDate}
                            selectsEnd
                            startDate={this.state.startDate}
                            endDate={this.state.endDate}
                            isClearable={true}
                            todayButton={"Today"}
                            onChange={this.handleEndChange}
                            className="form-control"
                        /> 
                </div>
            </form>

            <h1 className="bg-info"> la difference est : {this.state.diff}</h1>
            </div>
        );
    }
}

export default MyForm;
