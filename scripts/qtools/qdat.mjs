/**
 * Returns text string containing current date-and-time-stamp, used for labeling files, etc.
 *
 * qdat.getCurrentDateTime()
 *
 * 2022-06-13-06-23-19
 */
export const getCurrentDateTime = () => {
	var now = new Date();
	var year = now.getFullYear();
	var month = now.getMonth() + 1;
	var day = now.getDate();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	if (month.toString().length == 1) {
		month = '0' + month;
	}
	if (day.toString().length == 1) {
		day = '0' + day;
	}
	if (hour.toString().length == 1) {
		hour = '0' + hour;
	}
	if (minute.toString().length == 1) {
		minute = '0' + minute;
	}
	if (second.toString().length == 1) {
		second = '0' + second;
	}
	var dateTime =
		year +
		'-' +
		month +
		'-' +
		day +
		'-' +
		hour +
		'-' +
		minute +
		'-' +
		second;
	return dateTime;
};

/**
 * Adds a suffix to the end of a filename so that it has a timestamp, used for backup or log files, etc.
 *
 * qdat.tempStampifyFileName('index.html')
 * index.html.backup-2022-06-13-06-23-19
 *
 * qdat.tempStampifyFileName('index.html','log')
 * index.html.log-2022-06-13-06-23-19
 */
export const timeStampifyFileName = (filename, idCode = 'backup') => {
	return `${filename}.${idCode}-${getCurrentDateTime()}`;
};
