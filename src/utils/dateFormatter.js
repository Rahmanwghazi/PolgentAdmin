export function extractDate(a) {
    var buff, date, monthNames, day, month, year, hour, minute, plusMinus, output;
    if (a.length) {
        if (/^\d+-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(([-+]\d{2}:\d{2})|Z)$/.test(a)) {
            buff = a.split("T");

            date = buff[0].split("-");
            day = date[2];
            month = date[1];
            year = date[0];

            buff = buff[1];
            buff = buff.split(":");
            hour = buff[0];
            minute = buff[1];


            buff = buff.join(":");
            if (/\+/.test(buff)) {
                plusMinus = "+";
            } else if (/-/.test(buff)) {
                plusMinus = "-";
            } else if (/Z/.test(buff)) {
                plusMinus = "Z";
            }
            buff = buff.split(plusMinus);
            monthNames = "January,February,March,April,May,June,July,August,September,October,November,December";
            monthNames = monthNames.split(",");

            output = hour + ":" + minute + " • " + monthNames[Number(month) - 1] + " " + day + ", " + year;
        }
    }
    return output;
}