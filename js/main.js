var main = document.getElementById("main");

var data = [
	{
		name: 'Creat new Snippet',
		action: 'Tools > Developer > New Snippet...',
		steps: '1. Change: CDATA; 2. Add ${[number]: [default]}; 3. Change: tabTrigger',
		save: '[name].sublime-snippet'
	},
	{
		name: 'Test',
		action: 'Do',
		steps: '1. First; 2. Second',
	}
];

// main.innerHTML = data[0];
for (var j = 0; j < data.length; j++) {   
	for (var i in data[j]) {
		main.innerHTML += '<li class=' + i + '>' + i + ': ' + data[j][i];
		// if (i === 'name') { continue; }
	}
}