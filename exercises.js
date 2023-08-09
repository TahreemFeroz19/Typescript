var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//2. Personal Message: Store a person’s name in a variable, and print a message to that person
var username = "Tahreem Feroz";
console.log("Hello " + username);
// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
console.log(username.toUpperCase());
console.log(username.toLowerCase());
var titleCase = "";
username.split(" ").forEach(function (word) {
    var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    titleCase += capitalizedWord + " ";
});
console.log(titleCase);
// 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
console.log("Albert Einstein once said, \u201CA person who never made a mistake never tried anything new.\u201D");
// 5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_person = "Nelson Mandela";
var message = "".concat(famous_person, " said,\"It always seem impossible until its done\"");
console.log(message);
//6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var whitspaceName = "\nTahreem\t\tFeroz";
console.log(whitspaceName);
//7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
//8. You should create four lines that look like this:
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
//9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var number = 4;
console.log("My favourite number is " + number);
//10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
//11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var names = ["tabitha", "jolie", "sarah"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
//12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
console.log("Hello " + names);
//13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var transport = ["BR-V", "Elantra", "Audi", "Honda Civic"];
console.log("I would like to own a  " + transport);
//14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guest = ["tabitha", "jolie", "sarah"];
console.log("I would like to invite you for dinner " + guest);
//15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
console.log(guest[0] + " can't make it to dinner");
guest[0] = "Cristi";
console.log("I would like to invite you for dinner " + guest);
//16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
console.log("There's more space available, I am thinking of inviting more guest to the dinner");
guest.unshift("Anna");
guest.splice(3, 0, "zara");
guest.push("Amna");
console.log("I would like to invite you for dinner " + guest);
//17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("I can only invite two people for dinner");
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (guest.length > 2) {
    console.log(guest.pop() + " I am sorry I can't invite you for dinner");
}
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
console.log("You are still invited for dinner " + guest);
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guest.pop();
guest.pop();
for (var i = 0; i <= guest.length; i++) {
    console.log(guest[i]);
}
// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
var places = ["New York", "London", "Paris", "Tokyo", "Sydney"];
// • Print your array in its original order.
console.log(places);
// • Print your array in alphabetical order without modifying the actual list.
var places_in_order = __spreadArray([], places, true).sort();
console.log(places_in_order);
// • Show that your array is still in its original order by printing it.
console.log(places);
// • Print your array in reverse alphabetical order without changing the order of the original list.
var places_in_reverseorder = places_in_order.sort().reverse();
console.log(places_in_reverseorder);
// • Show that your array is still in its original order by printing it again.
console.log(places);
// • Reverse the order of your list. Print the array to show that its order has changed.
places.reverse();
console.log(places);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(places.reverse());
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(places.sort());
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(places.sort().reverse());
//19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log(guest.length);
//20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var cities = ["Karachi", "Lahore", "Islamabad", "Peshawer", "Quetta"];
var city1 = {
    cityName: "Karachi",
    province: "Sindh",
    country: "Pakistan",
    population: 14916456,
};
var city2 = {
    cityName: "Lahore",
    province: "Punjsb",
    country: "Pakistan",
    population: 11126285,
};
var city3 = {
    cityName: "Quetta",
    province: "Balochistan",
    country: "Pakistan",
    population: 1001205,
};
console.log("city 1 ", city1);
console.log("city 2 ", city2);
console.log("city 3 ", city3);
//22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
console.log(cities[12]); //error
console.log(cities[2]); //corrected
//23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
var num = 43;
console.log(num == 41); // false
console.log(num >= 98); // false
console.log(num <= 21); // false
console.log(num != 43); // false
console.log(num > 46); // false
console.log(num < 77); // true
console.log(num != 82); // true
console.log(num <= 96); // true
console.log(num > 34); // true
console.log(num == 43); // true
//24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
var string1 = "Apple", string2 = "Apple", string3 = "mango";
console.log(string1 == string2); //true
console.log(string1 == string3); //false
// • Tests using the lower case function
console.log(string1.toLowerCase() == string2); //false
console.log(string1.toLowerCase() == string2.toLowerCase()); //true
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 2, num2 = 4, num3 = 2;
// Test for equality
console.log(num1 == num2); // false
console.log(num1 == num3); // true
// Test for inequality
console.log(num1 != num2); // true
console.log(num1 != num3); // false
// Greater than
console.log(num1 > num2); // true 
console.log(num2 > num3); // false
// Less than
console.log(num1 < num2); // false 
console.log(num2 < num3); // true
// Greater than or equal to
console.log(num1 >= num2); // true 
console.log(num1 >= num3); // true 
// Less than or equal to
console.log(num1 <= num2); // false 
console.log(num1 <= num3); // true
// • Tests using "and" and "or" operators
console.log(num1 == num2 && num1 == num3);
console.log(num1 == num2 || num1 == num3);
// • Test whether an item is in a array
var numbers = [1, 2, 3, 4];
console.log(numbers.indexOf(3));
// • Test whether an item is not in a array
console.log(numbers.indexOf(7));
//25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
var alien_color = "green";
if (alien_color == "green") {
    console.log("the player just earned 5 points");
}
alien_color = "red";
if (alien_color == "green") {
    console.log("the player just earned 5 points");
}
//26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
if (alien_color == "green") {
    console.log("the player just earned 5 points for shooting the alien");
}
else {
    console.log("the player just earned 10 points");
}
//27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
//version 1
if (alien_color == "green") {
    console.log("the player earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("the player earned 10 points");
}
else
    (alien_color == "red");
console.log("the player earned 15 points");
//version 2
alien_color = "yellow";
if (alien_color == "green") {
    console.log("the player earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("the player earned 10 points");
}
else
    (alien_color == "red");
console.log("the player earned 15 points");
//version 3
alien_color = "red";
if (alien_color == "green") {
    console.log("the player earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("the player earned 10 points");
}
else
    (alien_color == "red");
console.log("the player earned 15 points");
//28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
var age = 23;
if (age < 2) {
    console.log("you are a baby");
}
else if (age >= 2 && age < 4) {
    console.log("you are a toddler");
}
else if (age >= 4 && age < 13) {
    console.log("you are a kid");
}
else if (age >= 13 && age < 20) {
    console.log("you are a teenager");
}
else if (age >= 20 && age < 65) {
    console.log("you are an adult");
}
else if (age >= 65) {
    console.log("you are an elder");
}
//29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// Make an array of favorite fruits
var favorite_fruits = ["banana", "apple", "mango"];
// Check if each fruit is in the array and print corresponding statements
function checkFavoriteFruits(fruit) {
    for (var _i = 0, favorite_fruits_1 = favorite_fruits; _i < favorite_fruits_1.length; _i++) {
        var favorite = favorite_fruits_1[_i];
        if (favorite === fruit) {
            return true;
        }
    }
    return false;
}
if (checkFavoriteFruits("banana")) {
    console.log("You really like bananas!");
}
if (checkFavoriteFruits("apple")) {
    console.log("You really like apples!");
}
if (checkFavoriteFruits("orange")) {
    console.log("You really like oranges!");
}
if (checkFavoriteFruits("mango")) {
    console.log("You really like mangoes!");
}
if (checkFavoriteFruits("strawberry")) {
    console.log("You really like strawberries!");
}
//30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
var usernames = ["Admin", "Eric", "Ali", "Sara"];
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
for (var i = 0; i < usernames.length; i++) {
    if (usernames[i] === "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log("Hello " + usernames[i]);
    }
}
//31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
for (var i = 0; i < usernames.length; i++) {
    usernames.pop();
}
if (usernames.length == 0) {
    console.log("we need to find some users");
}
//32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
function check_usernames(current_users, new_users) {
    var lowerCaseCurrentUsers = [];
    // Convert current usernames to lowercase
    for (var _i = 0, current_users_1 = current_users; _i < current_users_1.length; _i++) {
        var user = current_users_1[_i];
        lowerCaseCurrentUsers.push(user.toLowerCase());
    }
    for (var _a = 0, new_users_1 = new_users; _a < new_users_1.length; _a++) {
        var newUsername = new_users_1[_a];
        var lowerCaseNewUsername = newUsername.toLowerCase();
        var isTaken = false;
        // Check if the new username is already taken
        for (var _b = 0, lowerCaseCurrentUsers_1 = lowerCaseCurrentUsers; _b < lowerCaseCurrentUsers_1.length; _b++) {
            var username_1 = lowerCaseCurrentUsers_1[_b];
            if (username_1 === lowerCaseNewUsername) {
                isTaken = true;
                break;
            }
        }
        if (isTaken) {
            console.log("Username '".concat(newUsername, "' is already taken. Please enter a new username."));
        }
        else {
            console.log("Username '".concat(newUsername, "' is available."));
        }
    }
}
// List of current usernames
var currentUsers = ["John", "Alice", "Bob", "Eve", "Mary"];
// List of new usernames
var newUsers = ["Jane", "Bob", "David", "EVE", "Kate"];
// Check the availability of new usernames
check_usernames(currentUsers, newUsers);
//33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
var ordinal_number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
for (var i = 0; i < ordinal_number.length; i++) {
    if (ordinal_number[i] == 1) {
        console.log("".concat(ordinal_number[i], "st"));
    }
    else if (ordinal_number[i] == 2) {
        console.log("".concat(ordinal_number[i], "nd"));
    }
    else if (ordinal_number[i] == 3) {
        console.log("".concat(ordinal_number[i], "rd"));
    }
    else {
        console.log("".concat(ordinal_number[i], "th"));
    }
}
//34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
var pizza = ["Chicken Fajita", "Malai Boti", "Pepproni", "Afghani Tikka"];
for (var i = 0; i < pizza.length; i++) {
    console.log("We have " + pizza[i]);
}
console.log("I like various kinds of pizza. Pizza is my all-time favorite comfort food. I really love pizza!");
//35. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
var animal = ["dog", "cat", "parrot"];
for (var i = 0; i < animal.length; i++) {
    console.log(animal[i] + " would be a great pet");
}
console.log("any of these would be a great pet");
//36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
/*function make_shirt(size: string, text: string){
    console.log(`size of the shirt is ${size} and the text is: "${text}"`);
}
make_shirt("L", "Hello World");*/
//37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, text) {
    if (size === void 0) { size = "L"; }
    if (text === void 0) { text = "I Love Typescript"; }
    console.log("size of the shirt is ".concat(size, " and the text is: \"").concat(text, "\""));
}
make_shirt();
make_shirt("M");
make_shirt("S", "Hello World");
//38. Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city_name, country_name) {
    if (country_name === void 0) { country_name = "Pakistan"; }
    console.log("".concat(city_name, " is in ").concat(country_name));
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Delhi");
//39. City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Istanbul", "Turkey"));
console.log(city_country("Toronto", "Canada"));
//40. Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artist, title, num_tracks) {
    var album = {
        artist: artist,
        title: title,
        num_tracks: num_tracks
    };
    if (num_tracks !== undefined) {
        album.num_tracks = num_tracks;
    }
    return album;
}
var album1 = make_album("Atif Aslam", "In dinon", 5);
var album2 = make_album("Ali Zafar", "song", 1);
var album3 = make_album("Imagine Dragons", "Believer", 8);
console.log(album1);
console.log(album2);
console.log(album3);
//41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magician_names) {
    console.log(magician_names);
}
var magician_names = ["Eric", "Donna", "Ande wale baba", "Peer baba"];
show_magicians(magician_names);
//42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_great(magician_names) {
    var modified_magician_names = [];
    for (var _i = 0, magician_names_1 = magician_names; _i < magician_names_1.length; _i++) {
        var magician = magician_names_1[_i];
        modified_magician_names.push("the Great " + magician);
    }
    return modified_magician_names;
}
//43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
magician_names = ["Eric", "Donna", "Ande wale baba", "Peer baba"];
var originalMagicianNames = magician_names.slice();
var modifiedMagicianNames = make_great(originalMagicianNames);
show_magicians(modifiedMagicianNames);
show_magicians(originalMagicianNames); //original array
//44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwich(items) {
    console.log("you ordered ".concat(items));
}
sandwich(["bread"]);
sandwich(["chicken", "cheese", "mayonnaise"]);
sandwich(["ketchup", "cucumber"]);
//45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function store_car_info(manufacturer, model) {
    var kwargs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        kwargs[_i - 2] = arguments[_i];
    }
    var carInfo = {
        manufacturer: manufacturer,
        model: model,
    };
    // Add the keyword arguments to the carInfo object
    for (var i = 0; i < kwargs.length; i += 2) {
        var key = kwargs[i];
        var value = kwargs[i + 1];
        carInfo[key] = value;
    }
    return carInfo;
}
// Call the function with required information and additional name-value pairs
var car = store_car_info("Toyota", "Camry", "color", "silver", "year", 2022);
// Print the returned object to check if all the information was stored correctly
console.log(car);
