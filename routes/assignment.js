var express = require('express');
const Assignment = require('../models/Assignment-model.js');
var router = express.Router();

// GET route to check if the router is working
router.get("/get", function(req, res, next) {
    res.send("This is the GET method");
});

// GET route to retrieve assignments
router.get("/getAssignment", async function(req, res, next) {
    
        const assignmentList = await Assignment.find(); // Await the promise
        res.json(assignmentList); // Send the list of assignments as JSON
    
});

// POST route to create an assignment
router.post("/create", async (req, res) => {
    const newAssignment = {
        assignmentId: "1", // Ensure this is unique or generate it dynamically
        assignmentName: "first",
        assignmentDescription: "This is our first assignment", // Corrected spelling
        assignmentDueDate: new Date("2006-12-06"), // Changed to Date object
    };

    try {
        await Assignment.create(newAssignment); // Await the creation of the assignment
        res.status(201).send("Assignment created successfully"); // Status 201 for created
    } catch (err) {
        console.error(err);
        res.status(500).send("Error creating assignment");
    
    }
});

module.exports = router;
