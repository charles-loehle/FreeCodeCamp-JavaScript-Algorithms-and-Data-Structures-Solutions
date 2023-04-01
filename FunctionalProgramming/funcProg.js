/* ======================================== */
/* Understand the Hazards of Using Imperative Code */
// tabs is an array of titles of each site open within the window
const Window = function (tabs) {
	this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
	this.tabs = this.tabs.concat(otherWindow.tabs);
	return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
	this.tabs.push('new tab'); // Let's open a new tab for now
	return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {
	// Only change code below this line

	const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
	const tabsAfterIndex = this.tabs.splice(1); // Get the tabs after the tab

	this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

	// Only change code above this line

	return this;
};

// Let's create three browser windows
const workWindow = new Window([
	'GMail',
	'Inbox',
	'Work mail',
	'Docs',
	'freeCodeCamp',
]); // Your mailbox, drive, and other work sites
const socialWindow = new Window([
	'FB',
	'Gitter',
	'Reddit',
	'Twitter',
	'Medium',
]); // Social sites
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

console.log(videoWindow);
console.log(workWindow);
// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
	.tabOpen() // Open a new tab for cat memes
	.join(videoWindow.tabClose(2)) // Close third tab in video window, and join
	.join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);
// should be ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']

/* ======================================== */

/* ======================================== */
/* Implement map on a Prototype */

// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
	// callback is the function passed into s.Mymap()
	var newArray = [];
	// console.log(this); // this is the 's' array used on Array.prorotype.myMap
	// Only change code below this line
	for (let i = 0; i < this.length; i++) {
		newArray.push(callback(this[i]));
	}
	// Only change code above this line
	return newArray;
};

var new_s = s.myMap(function (item) {
	return item * 2;
});

// console.log(new_s);

/* ======================================== */
/* Implement the fileter Method on a Prototype */
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
	// Only change code below this line
	var newArray = [];
	for (let i = 0; i < this.length; i++) {
		//newArray.push(callback(this[i]))
		// console.log(callback(this[i]));
		if (callback(this[i])) {
			newArray.push(this[i]);
		}
	}
	// Only change code above this line
	return newArray;
};

var new_s = s.myFilter(function (item) {
	return item % 2 === 1;
});

// console.log(new_s);

/* ======================================== */
/* Use the reduce Method to Analyze Data */
// const users = [
// 	{ name: 'John', age: 34 },
// 	{ name: 'Amy', age: 20 },
// 	{ name: 'camperCat', age: 10 },
// ];

// const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
// console.log(sumOfAges);

// const usersObj = users.reduce((obj, user) => {
// 	obj[user.name] = user.age;
// 	return obj;
// }, {});
// console.log(usersObj);

// The global variable
var watchList = [
	{
		Title: 'Inception',
		Year: '2010',
		Rated: 'PG-13',
		Released: '16 Jul 2010',
		Runtime: '148 min',
		Genre: 'Action, Adventure, Crime',
		Director: 'Christopher Nolan',
		Writer: 'Christopher Nolan',
		Actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy',
		Plot: 'A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.',
		Language: 'English, Japanese, French',
		Country: 'USA, UK',
		Awards: 'Won 4 Oscars. Another 143 wins & 198 nominations.',
		Poster:
			'http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
		Metascore: '74',
		imdbRating: '8.8',
		imdbVotes: '1,446,708',
		imdbID: 'tt1375666',
		Type: 'movie',
		Response: 'True',
	},
	{
		Title: 'Interstellar',
		Year: '2014',
		Rated: 'PG-13',
		Released: '07 Nov 2014',
		Runtime: '169 min',
		Genre: 'Adventure, Drama, Sci-Fi',
		Director: 'Christopher Nolan',
		Writer: 'Jonathan Nolan, Christopher Nolan',
		Actors: 'Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow',
		Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
		Language: 'English',
		Country: 'USA, UK',
		Awards: 'Won 1 Oscar. Another 39 wins & 132 nominations.',
		Poster:
			'http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg',
		Metascore: '74',
		imdbRating: '8.6',
		imdbVotes: '910,366',
		imdbID: 'tt0816692',
		Type: 'movie',
		Response: 'True',
	},
	{
		Title: 'The Dark Knight',
		Year: '2008',
		Rated: 'PG-13',
		Released: '18 Jul 2008',
		Runtime: '152 min',
		Genre: 'Action, Adventure, Crime',
		Director: 'Christopher Nolan',
		Writer:
			'Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)',
		Actors: 'Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine',
		Plot: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
		Language: 'English, Mandarin',
		Country: 'USA, UK',
		Awards: 'Won 2 Oscars. Another 146 wins & 142 nominations.',
		Poster:
			'http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
		Metascore: '82',
		imdbRating: '9.0',
		imdbVotes: '1,652,832',
		imdbID: 'tt0468569',
		Type: 'movie',
		Response: 'True',
	},
	{
		Title: 'Batman Begins',
		Year: '2005',
		Rated: 'PG-13',
		Released: '15 Jun 2005',
		Runtime: '140 min',
		Genre: 'Action, Adventure',
		Director: 'Christopher Nolan',
		Writer:
			'Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)',
		Actors: 'Christian Bale, Michael Caine, Liam Neeson, Katie Holmes',
		Plot: 'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.',
		Language: 'English, Urdu, Mandarin',
		Country: 'USA, UK',
		Awards: 'Nominated for 1 Oscar. Another 15 wins & 66 nominations.',
		Poster:
			'http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg',
		Metascore: '70',
		imdbRating: '8.3',
		imdbVotes: '972,584',
		imdbID: 'tt0372784',
		Type: 'movie',
		Response: 'True',
	},
	{
		Title: 'Avatar',
		Year: '2009',
		Rated: 'PG-13',
		Released: '18 Dec 2009',
		Runtime: '162 min',
		Genre: 'Action, Adventure, Fantasy',
		Director: 'James Cameron',
		Writer: 'James Cameron',
		Actors: 'Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang',
		Plot: 'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
		Language: 'English, Spanish',
		Country: 'USA, UK',
		Awards: 'Won 3 Oscars. Another 80 wins & 121 nominations.',
		Poster:
			'http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
		Metascore: '83',
		imdbRating: '7.9',
		imdbVotes: '876,575',
		imdbID: 'tt0499549',
		Type: 'movie',
		Response: 'True',
	},
];
// Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan
// #1
function getRating(watchList) {
	// Only change code below this line
	const movies = watchList.filter(movie => {
		return movie.Director === 'Christopher Nolan';
	});

	const averageRating =
		movies.reduce((acc, curr) => {
			return parseFloat(acc) + parseFloat(curr.imdbRating);
		}, 0) / movies.length;
	// Only change code above this line
	return averageRating;
}

// #2
function getRating(watchList) {
	// Only change code below this line
	const movieRatings = watchList
		.map(item => ({
			director: item.Director,
			rating: item.imdbRating,
		}))
		.filter(item => item.director === 'Christopher Nolan')
		.map(item => +item.rating);
	const addedRatings = movieRatings.reduce((a, b) => a + b);
	const averageRating = addedRatings / movieRatings.length;
	// Only change code above this line
	return averageRating;
}
//console.log(getRating(watchList));

/* ======================================== */
/* Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem */

// The function should return a new array containing the squares of only the positive integers
const squareList = arr => {
	// Only change code below this line
	// find positive integers in the array
	const filteredarr = arr.filter(num => num >= 0 && Number.isInteger(num));

	// square the positive integers
	return filteredarr.map(num => num * num);
	// Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
//console.log(squaredIntegers);

/* ======================================== */
/* Apply Functional Programming to Convert Strings to URL Slugs */
//#1
// Only change code below this line
function urlSlug(title) {
	title = title.toLowerCase().trim();
	title = title.split(' ');
	title = title.filter(item => item != '');
	title = title.join('-');
	return title;
}
// Only change code above this line

//console.log(urlSlug(' Winter Is  Coming'));

// #2
// function urlSlug(title) {
//   title = title.toLowerCase().split(' ')
//   title = title.filter(item => item !== '').map(item => item + '-').join('')
//   title = title.slice(0, title.length - 1)
//   return title
// }
// Only change code above this line
//console.log(urlSlug(" Winter Is  Coming"));

/* ======================================== */
/* Use the every Method to Check that Every Element in an Array Meets a Criteria
 */
function checkPositive(arr) {
	// Only change code below this line
	return arr.every(val => val > 0);
	// Only change code above this line
}
//checkPositive([1, 2, 3, -4, 5]);

/* ======================================== */
/* Use the some Method to Check that Any Elements in an Array Meet a Criteria
 */
function checkPositive(arr) {
	// Only change code below this line
	return arr.some(val => val > 0);
	// Only change code above this line
}
//console.log(checkPositive([1, 2, 3, -4, 5]));

/* ======================================== */
/* Split a String into an Array Using the split Method */
function splitify(str) {
	// Only change code below this line
	// Match Everything But Letters and Numbers
	const re = /[^A-Za-z0-9_]/gi;
	return str.split(re);
	// Only change code above this line
}

//console.log(splitify("Hello World,I-am code"));

/* ======================================== */
/* Combine an Array into a String Using the join Method */
function sentensify(str) {
	// Only change code below this line
	// Match Everything But Letters and Numbers
	const re = /[^A-Za-z0-9_]/gi;
	return str.split(re).join(' ');
	// Only change code above this line
}

//console.log(sentensify('There,has,been,an,awakening'));
