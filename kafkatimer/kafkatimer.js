/*
 * Kafka Timer
 *
*/



// Class to represent a Exponential Distribution
// theta: The mean of the distribution
class ExponentialDistriubtion 
{
	constructor(theta)
	{
		this.theta = theta;
	}

	getmean(){
		return this.theta;
	}

	getvariance(){
		return this.theta * this.theta;
	}

	getstandarddeviation(){
		return this.theta;
	}

	getprobability(q){
		return 1 - Math.exp(-q / this.theta);
	}

	getquantile(p){
		return -this.theta * Math.log(1 - p);
	}

	getinversecdf(p){
		return this.getquantile(p);
	}

	getrandom(){
		return this.getinversecdf(Math.random());
	}
}


// d1: A date object
// d2: A date object
// Returns the difference in days between d1 and d2
const getDifferenceInDays = (d1, d2) => {
	return Math.abs(d1 - d2) / (1000 * 60 * 60 * 24);
}

// d1: A date object
// n: Number of days 
// Returns a new date object n days after d1
const ndaysAfter = (d1, n) => {
	let d2 = new Date(d1);
	d2.setDate(d1.getDate() + n);
	return d2;
}

// Add new div object into the divcontent object
// with a specific text
const addDiv = (text, color) => {
	let contentdiv = document.getElementById("divcontent");
	let newdiv = document.createElement("div");
	newdiv.innerHTML = text;
	newdiv.style.color = color;
	contentdiv.appendChild(newdiv);
}

const round = (num, places) => {
	return Math.round(num * Math.pow(10, places)) / Math.pow(10, places);
}

const getcolorbydays = (days) => {
	if (days < 7){
		color = "purple";
	}else if (days < 30){
    	color = "yellow";
    }else if(days < 60){
        color = "orange";
    }else if(days < 90){
        color = "red";
    }else if(days < 120){
        color = "brown";
    }else{
      	color = "#782e07";
    }
return color;
}

const main = () => {
	let today = new Date();
	let start_date = new Date(2022, 05, 13);
	let totaldays = getDifferenceInDays(today, start_date);	
	let thedistribution = new ExponentialDistriubtion(300);
	let m = 1; // Counter for the number of dates

	let qlist = [];
	for (let i = 0.1; i <= 0.99; i += 0.0010){
		qlist.push(i);
	}

	addDiv(`Today is ${today}`, "#aabbff");
	addDiv(`Total days elapsed: ${totaldays}`, "#aabbff");
	addDiv(`Prob(x < ${totaldays}) = ${thedistribution.getprobability(totaldays)}`, "#aabbff");

	for (let i = 0; i < qlist.length; i++){
		let q = qlist[i];
		let n = thedistribution.getinversecdf(q);
		let d = ndaysAfter(start_date, n);
		let diffdays = round(getDifferenceInDays(today, d), 3);
		let color = "#000000";
		if (d > today && diffdays < 150){
			color = getcolorbydays(diffdays);
			addDiv(`${m}  -  Q: ${round(q, 3)}, n: ${round(n, 0)}, d: ${d.toDateString()}, diff: ${diffdays}`, color);
			m++;
		}
	}
}


