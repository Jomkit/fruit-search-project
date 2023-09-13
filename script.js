const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruitAll = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];

	// TODO
	// Filtered Search
	results = fruitAll.filter((fruit) => fruit.toLowerCase().includes(str.toLowerCase()));
	console.log(results);
	return results;
}

// Should call on search(str) whenever a key press is registered
// then create a dropdown that is active as long as user input is detected
function searchHandler(e) {
	// TODO

	const inputStr = input.value;
	const filteredSearch = search(inputStr);

	showSuggestions(filteredSearch, inputStr);
	console.log("keypress!");
	console.log(inputStr);

}

function showSuggestions(results, inputVal) {
	/* Close any already open filtered lists */
	suggestions.innerHTML = "";
	if (!inputVal || inputVal[0] === ' '){ return false; }

	// TODO
	
	
	/* for each item in the array... */
	for(i = 0; i < results.length; i++){
		const fruitLi = document.createElement('li');
		fruitLi.innerHTML = results[i];
		fruitLi.addEventListener('click', useSuggestion);
		// console.log(results[i]);
		suggestions.appendChild(fruitLi);
		// console.log(i);
		
	}
	
} 	

function useSuggestion(e) {
	// TODO
	const selected = e.target;
	console.log('clicked!');
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);