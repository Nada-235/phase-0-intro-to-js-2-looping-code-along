// Code your solutions in this file

function writeCards(array) {
    let thankyouArray = array.map(item => `Thank you, ${item}, for the wonderful surprise gift!`);
    return thankyouArray;
}

function countDown(num) {
	for (let i = num; i >= 0; i--) {
		console.log(i);
	}
}