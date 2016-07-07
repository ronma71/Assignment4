// Step 1 - Namespace - Slide 8
//var ANIMAL = ANIMAL || {};

// Step 2 - create two classes, one called Cat and another called Dog. The Cat class should be created using literal notation and the Dog class should be created using constructor notation
/*var Cat = {
}
    
function Dog() {
}

//Step 3 - directly underneath, create a new instance of the Dog class
var myDog = new Dog();*/

//Step 4 - create a new class using constructor notation called Animal. When a new instance of the Animal class is created, the message “The Animal has been created” should be displayed in the console window
/*function Animal() {
    window.console.log('The Animal has been created');
}
var dog = new Animal (); */

//Step 5 - change the above code so that it accepts a parameter and that value is what should be displayed in the console window. The message should be passed as an argument into the constructor at the moment that the Animal class is instantiated
/*function Animal() {

}
var dog = new Animal();
    window.console.log('The Animal has been created');*/

//Step 6 - create a new class using constructor notation called Animal. Define five properties within your class including type, breed, color, height, and length. These properties will be set in the constructor so you’ll need to pass in parameters into the function’s constructor, set the properties, and then pass in the actual arguments during the object’s instantiation
/*function Animal(type, breed, color, height, length) {
    this._type = type;
    this._breed = breed;
    this._color = color;
    this._height = height;
    this._length = length;
}
Animal.prototype.displayMake = function() {
    window.console.log('This ' + this._color + ' ' + this._breed + ' ' + this._type + ' is ' + this._height + ' feet high and ' + this._length + ' feet long.' );
}
var myAnimal = new Animal('Dog', 'Pitbull', 'Brown', '3', '3.5');
myAnimal.displayMake();*/

//Step 7 - use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window
/*function Animal(type, breed, color, height, length) {
    this._type = type;
    this._breed = breed;
    this._color = color;
    this._height = height;
    this._length = length;
}
var myAnimal = new Animal();
for (var property in myAnimal) {
    window.console.log(property)
}*/

//Step 8 - create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated
/*var Animal = function(color, type, speak) {
    this._color = color;
    this._type = type;
    this._speak = speak;
}
Animal.prototype.speakAnimal = function() {
    return 'The ' + this._color + ' ' + this._type + ' is ' + this._speak + '!';
}
var animal1 = new Animal('brown', 'dog', 'barking');
    window.console.log(animal1.speakAnimal());
var animal2 = new Animal('grey', 'cat', 'meowing');
    window.console.log(animal2.speakAnimal());*/

//Step 9 - convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a public method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”
/*var Animal = function(type) {
    var _type = type;
    var checkType = function() {
        window.console.log('The ' + _type + ' has made a noise!');
    }
    this.speak = function() {
        checkType();
    }
}
var myAnimal = new Animal('dog');
myAnimal.speak();*/

//Step 10 - create your own String method called findWords() that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of times that word was found in the paragraph
String.prototype.findWords = function(wordInstance) {
    this._stringClass = this.stance(' ');
    
    var wordSentence = new Array();
        this._word = word;
        this._count = 0;
    
    for(var i = 0; i < this._stringClass.length; i++) {
        wordSentence.push(this._stringClass[i]);
    }
    
    for(var i = 0, i < wordSentence.length, i++) {
        
        if(this._word.match(wordSentence[i])) {
            this._count++;
        }
    }
        window.console.log('The word ' + this._word + 'was found ' + this._count + ' times in this sentence.');
}

var sentence = "Bill went to the market to buy some milk to feed to his cat.";

sentence.findWords('to');


//The Recipe Card - create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings). Your object should have a publically available method that when called, will log out the recipe within the console
/*var recipe = {
    title: 'Guacamole',
    servings: 4,
    ingredients: ['- 3 Avocados', '- 1 Lime', '- 1 Teaspoon Salt', '- 1/2 Cup Onion', '- 3 Tablespoons Cilantro', '- 2 Diced Tomatoes', '- 1 Teaspoon Garlic', '- 1 Pinch Ground Pepper']
};

window.console.log(recipe.title);
window.console.log('Serves: ' + recipe.servings);
window.console.log('Ingredients: ');
for (var i = 0; i < recipe.ingredients.length; i++) {
    window.console.log(recipe.ingredients[i]);
}*/

//The Reading List - keep track of which books you read and which books you want to read! Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet). Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien". Then, use a conditional to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.' Make sure your object contains at least 5 books
/*var books = [ {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    alreadyRead: false
  },
  { 
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    alreadyRead: false
  },
  {
    title: 'The Return of the King',
    author: 'J.R.R. Tolkien',
    alreadyRead: false
  },
  {
    title: 'Memnoch the Devil',
    author: 'Anne Rice',
    alreadyRead: true
  },
  {
    title: 'Neverwhere',
    author: 'Neil Gaiman',
    alreadyRead: true
  }
];

for (var i = 0; i < books.length; i++) {
  var book = books[i];
  var bookInfo = book.title + '" by ' + book.author;
  if (book.alreadyRead) {
    console.log('I have already read "' + bookInfo);
  } else {
    console.log('I have not read "' + bookInfo);
  }
}*/




