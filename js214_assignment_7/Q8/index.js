// Step 1: Create the getUserData function
function getUserData(id, callback) {
    // Step 2: Simulate an asynchronous API request using setTimeout
    setTimeout(() => {
        // Step 3: Create a dummy user object
        const user = {
            id: id,
            name: "John Doe",
            email: "johndoe@example.com"
        };
        // Call the callback function with the user object
        callback(user);
    }, 2000); // 2-second delay
}

// Step 4: Create the displayUser function
function displayUser(user) {
    // Display the user details
    console.log("User ID: " + user.id);
    console.log("User Name: " + user.name);
    console.log("User Email: " + user.email);
}

// Step 5: Call the getUserData function with a user ID and the displayUser function as the callback
getUserData(1, displayUser);

// The displayUser function will be invoked with the user object after 2 seconds
