const getMonth = (month) => {
    if(isNaN(month) == true) {
        month = month.toLowerCase();
        if(month == 'jan' || month == 'january') return 0;
        if(month == 'feb' || month == 'february') return 1;
        if(month == 'mar' || month == 'march') return 2;
        if(month == 'apr' || month == 'april') return 3;
        if(month == 'may' || month == 'may') return 4;
        if(month == 'jun' || month == 'june') return 5;
        
        if(month == 'jul' || month == 'july') return 6;
        if(month == 'aug' || month == 'august') return 7;
        if(month == 'sep' || month == 'september') return 8;
        if(month == 'oct' || month == 'october') return 9;
        if(month == 'nov' || month == 'november') return 10;
        if(month == 'dec' || month == 'december') return 11;
        return 'Out Of Scope';
    }else{
        month = parseInt(month);
        if(month == 0) return 'january';
        if(month == 1) return 'february';
        if(month == 2) return 'march';
        if(month == 3) return 'april';
        if(month == 4) return 'may';
        if(month == 5) return 'june';

        if(month == 6) return 'july';
        if(month == 7) return 'august';
        if(month == 8) return 'september';
        if(month == 9) return 'october';
        if(month == 10) return 'november';
        if(month == 11) return 'december';
        return 'Out Of Scope';
    }    
};

module.exports = getMonth;