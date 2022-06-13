import fs from 'fs';
import * as qdat from './qtools/qdat.mjs';

console.log('backing up all files listed in .env file...');

const targetFilename =
	'home\\bkr\\general-backup' + qdat.timeStampifyFileName('.env');

qdat.getCurrentDateTime();

fs.copyFile('.env', targetFilename, (err) => {
	if (err) throw err;
	console.log('finished');
});
