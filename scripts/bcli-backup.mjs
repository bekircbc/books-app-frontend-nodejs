import fs from 'fs';
import * as qdat from './qtools/qdat.mjs';

console.log('backing up all files listed in .env file...');

// console.log(qdat);

const targetFilename =
	'//home/user/bkr/general-backup/env.' + qdat.timeStampifyFileName();

// qdat.getCurrentDateTime();

fs.copyFile('.env', targetFilename, (err) => {
	if (err) throw err;
	console.log('finished');
});
