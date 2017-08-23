import moment from 'moment';

class MyService {
    static calculateDiff (startDate , endDate){
        return Math.abs(moment(startDate).diff(moment(endDate), 'days'));
    }
}

export default MyService;