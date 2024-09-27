const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
    assignmentId: { type: String, required: true },
    assignmentName: { type: String, required: true },
    assignmentDescription: { type: String, required: true }, // Corrected spelling
    assignmentDueDate: { type: String, required: true }, // Changed to Date type
});

const Assignment = mongoose.model("Assignment", assignmentSchema);

module.exports = Assignment;

// assignmentSchema.method.sayHi(){
    
// }