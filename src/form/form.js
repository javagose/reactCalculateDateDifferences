import React, { Component } from 'react';
//importing Moment
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class MyForm extends Component {
   constructor(props) {
      super(props);
      this.state = {startDay: moment(), endDay : moment(), diff : null};
      console.log(this.state);

      this.handleStartChange = this.handleStartChange.bind(this);
      this.handleEndChange = this.handleEndChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handle firstDate Input Change
    handleStartChange(date) {
        this.setState({startDate: date});
    }
    // handle SecondDate Input Change
    handleEndChange(date) {
        this.setState({endDate: date});
        
    }
    // handle Form submit
    handleSubmit(event) {
    this.state.diff = Math.abs(moment(this.state.startDate).diff(moment(this.state.endDate), 'days'));
    console.log("start", event.target.startDate , " end ", event.target.startDate, "diff", this.state.diff);
    alert('Day difference betwwen the two date is: ' + this.state.diff);
        event.preventDefault();
    }

      

  render() {
    return (
        
        <div className="dateForm col-md-4 col-md-offset-4" >
          <form onSubmit={this.handleSubmit}> 
              
              <div className="form-group">
                <label>Start Date  : </label>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleStartChange}
                    className="form-control"
                />
              </div>

              <div className="form-group">
                  <label >End Date  : </label>
                    <DatePicker
                        selected={this.state.endDate}
                        onChange={this.handleEndChange}
                        className="form-control"
                    /> 
              </div>

            <input type="submit" value="soumettre" className="btn btn-primary" />
          </form>
        </div>
    );
  }
}

export default MyForm;
