// // Questionn:1

// var studentNames=[];
// studentNames.push("John", "Jane", "Alice");
// console.log(studentNames); 
// // Question:02
// var studentNames = new Array();
// studentNames.push("John", "Jane", "Alice");
// console.log(studentNames); 
// question:03
// var studentNames = ["John", "Jane", "Alice", "Bob"];
// console.log(studentNames[0]); 
// studentNames[2] = "Charlie";  
// console.log(studentNames);
// question:04
// var numbers = [10, 20, 30, 40, 50];
// console.log(numbers[0]);
// numbers[3] = 100;       
// console.log(numbers);  
// question:05
// var booleanArray = [true, false, true, false, true];
// console.log(booleanArray[1]); 
// booleanArray[2] = false;      
// console.log(booleanArray);    
// question:06
// var mixedArray = [42, "Hello", true, null, { name: "Alice" }, [1, 2, 3]];
// console.log(mixedArray[1]);
// mixedArray[3] = "Changed";   
// console.log(mixedArray);
// question:7    
// var educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// function displayQualifications() {
//     var qualificationsList = document.createElement("ul"); // Create an unordered list

//     for (var i = 0; i < educationQualifications.length; i++) {
//         var listItem = document.createElement("li");
//         listItem.textContent = educationQualifications[i]; // Set the text of the list item
//         qualificationsList.appendChild(listItem); // Append the list item to the unordered list
//     }

//     document.body.appendChild(qualificationsList);
// }
// displayQualifications();

// question:8

// var studentNames = ["Alice", "Bob", "Charlie"];

// var studentScores = [450, 370, 490]; // Example scores out of 500

// function displayScoresAndPercentages() {
//     var totalMarks = 500;

//     console.log("Student Scores and Percentages:");

//     for (var i = 0; i < studentNames.length; i++) {
//         var score = studentScores[i];
//         var percentage = (score / totalMarks) * 100; // Calculate percentage

//         console.log(studentNames[i] + ": Score = " + score + ", Percentage = " + percentage.toFixed(2) + "%");
//     }
// }

// // displayScoresAndPercentages();

// // question:09


//         // Initialize an array with color names
//         var colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
        
//         // Function to display the colors in an alert
//         function displayColors() {
//             alert("Current Colors: " + colors.join(", "));
//         }

//         // Display initial array elements
//         displayColors();

//         // a. Ask the user what color they want to add to the beginning
//         var colorToAddStart = prompt("What color do you want to add to the beginning?");
//         colors.unshift(colorToAddStart); // Add to the beginning
//         displayColors();

//         // b. Ask the user what color they want to add to the end
//         var colorToAddEnd = prompt("What color do you want to add to the end?");
//         colors.push(colorToAddEnd); // Add to the end
//         displayColors();

//         // c. Add two more colors to the beginning of the array
//         var color1 = prompt("Enter the first color to add to the beginning:");
//         var color2 = prompt("Enter the second color to add to the beginning:");
//         colors.unshift(color1, color2); // Add two colors to the beginning
//         displayColors();

//         // d. Delete the first color in the array
//         colors.shift(); // Remove the first color
//         displayColors();

//         // e. Delete the last color in the array
//         colors.pop(); // Remove the last color
//         displayColors();

//         // f. Ask the user at which index they want to add a color
//         var indexToAdd = parseInt(prompt("At which index do you want to add a color?"));
//         var colorToAddAtIndex = prompt("Enter the color name to add at index " + indexToAdd + ":");
//         colors.splice(indexToAdd, 0, colorToAddAtIndex); // Add color at specified index
//         displayColors();

//         // Remove the same number of colors from the user-defined position/index
//         var numberOfColorsToRemove = parseInt(prompt("How many colors do you want to remove from index " + indexToAdd + "?"));
//         colors.splice(indexToAdd, numberOfColorsToRemove); // Remove colors
//         displayColors();

//         // g. Ask the user at which index they want to delete colors
//         var indexToDelete = parseInt(prompt("At which index do you want to delete colors?"));
//         var numberToDelete = parseInt(prompt("How many colors do you want to delete from index " + indexToDelete + "?"));
//         colors.splice(indexToDelete, numberToDelete); // Delete specified number of colors
//         displayColors();

// question:10
        // // Store student scores in an array
        // var studentScores = [88, 92, 74, 100, 67, 85, 90];

        // // Display original scores
        // console.log("Original Scores: " + studentScores.join(", "));

        // // Sort the array in ascending order
        // studentScores.sort(function(a, b) {
        //     return a - b; // Sorting in ascending order};
        // }
        // Display sorted scores
        // console.log("Sorted Scores: " + studentScores.join(", ");
        // question:11

        // var cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego"];

        // Copy 3 array elements from cities array to selectedCities array
        // var selectedCities = cities.slice(0, 3); // Copy the first 3 elements

        // Display both arrays
        // console.log("All Cities: " + cities.join(", "));
        // console.log("Selected Cities: " + selectedCities.join(", "));

    // // Question:12
    // var arr = ["This ", "is ", "my ", "cat"];

    // // Create a single string using the join method
    // var resultString = arr.join(""); 

    // // Display the resulting string
    // console.log(resultString); // Output: This is my cat
    // question:13

        // var fifoQueue = [];

        // // Function to add values to the array
        // function addValue(value) {
        //     fifoQueue.push(value); // Add value to the end of the array
        //     console.log(value + " added to the queue.");
        // }

        // // Function to remove and return the first value from the array
        // function removeValue() {
        //     if (fifoQueue.length > 0) {
        //         var removedValue = fifoQueue.shift(); // Remove value from the front
        //         console.log(removedValue + " removed from the queue.");
        //         return removedValue;
        //     } else {
        //         console.log("Queue is empty. No value to remove.");
        //         return null;
        //     }
        // }

        // addValue("Apple");
        // addValue("Banana");
        // addValue("Cherry");

        // // Display current queue
        // console.log("Current Queue: " + fifoQueue.join(", "));

        // removeValue(); // Removes "Apple"
        // removeValue(); // Removes "Banana"

        // console.log("Current Queue after removals: " + fifoQueue.join(", "));

        // addValue("Date");
        // console.log("Final Queue: " + fifoQueue.join(", "));
        // question:14
                // Create a new empty array
                var lifoStack = [];
        
                // Function to add values to the stack
                function addValue(value) {
                    lifoStack.push(value); // Add value to the end of the array
                    console.log(value + " added to the stack.");
                }
        
                // Function to remove and return the last value from the stack
                function removeValue() {
                    if (lifoStack.length > 0) {
                        var removedValue = lifoStack.pop(); // Remove value from the end
                        console.log(removedValue + " removed from the stack.");
                        return removedValue;
                    } else {
                        console.log("Stack is empty. No value to remove.");
                        return null;
                    }
                }
        
                // Adding values to the stack
                addValue("First");
                addValue("Second");
                addValue("Third");
        
                // Display current stack
                console.log("Current Stack: " + lifoStack.join(", "));
        
                // Removing values from the stack
                removeValue(); // Removes "Third"
                removeValue(); // Removes "Second"
        
                // Display current stack after removals
                console.log("Current Stack after removals: " + lifoStack.join(", "));
        
                // Add another value
                addValue("Fourth");
        
                // Final stack display
                console.log("Final Stack: " + lifoStack.join(", "));
                // question:15
        // // Store phone manufacturers in an array
        // var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

        // // Start the select menu HTML
        // var dropdownHTML = '<label for="manufacturers">Select a phone manufacturer:</label>';
        // dropdownJava += '<select id="manufacturers">';

        // // Loop through the array and create an option for each manufacturer
        // for (var i = 0; i < manufacturers.length; i++) {
        //     dropdownJava += '<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>';
        // }

        // // Close the select menu
        // dropdownJava += '</select>';

        // // Display the dropdown menu using document.write
        // document.write(dropdownJava);
