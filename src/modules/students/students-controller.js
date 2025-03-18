const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    const students = await getAllStudents(req.query);
    res.json(students);
});

const handleAddStudent = asyncHandler(async (req, res) => {
    const message = await addNewStudent(req.body);
    res.json(message);
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    const message = await updateStudent(req.body);
    res.json(message);
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    //write your code

});

const handleStudentStatus = asyncHandler(async (req, res) => {
    //write your code

});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
