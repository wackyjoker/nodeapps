var scores = [90,98,89,100,100,86,94];
var scores2 = [40,65,77,82,80, 54, 73,63,95,49];


function average(num){
	var sum = 0;
	num.forEach(function(score){
		sum += score;
	});
	// add all scores to sum
	var avg = sum/num.length;
	// calculate the average of score with as avg
	return Math.round(avg);
	//round the number with Math.round
}

console.log(average(scores))


function methodt2(num){
	var temp = 0;
	for (var i = 0; i < num.length; i++){
		temp += num[i];
	}
	return Math.round(temp/num.length);
}

console.log(methodt2(scores2))