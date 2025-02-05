import * as fs from 'fs';
import { csvParse, extent } from 'd3';
export const prerender = true
const dataFile = 'static/data/global-temperature.csv';

let sources = ['NASA', 'Hadley/UEA', 'NOAA', 'Berkeley', 'Copernicus ERA5'];

function year2date(y) {
	return new Date(y, 0, 1);
}

function parseNumberCSV(row, numericalPropertyList = []) {
	numericalPropertyList.forEach((prop) => {
		if (!isNaN(row[prop]) && row[prop] != '') {
			row[prop] = Number(row[prop]);
		} else {
			row[prop] = undefined;
		}
	});
	return row;
}

export async function load({ params }) {
	let years = fs.readFileSync(dataFile, 'utf-8');
	let temperatures = csvParse(years, (row) => parseNumberCSV(row, ['year', ...sources]));
	let range = extent(temperatures, (d) => d.year);
	return {
		temperatures,
		sources,
		extent: range.map(year2date)
	};
}
