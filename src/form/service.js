import moment from 'moment';

class MyService {
    static calculateDiff (startDate , endDate){
        console.log(startDate, "==", endDate)
        //Math.abs(moment(startDate).diff(moment(endDate), 'days'));
    }
}

export default MyService;