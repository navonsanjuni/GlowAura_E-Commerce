import Student from "../models/student.js";

export function getStudents(req, res) {
  Student.find()
    .then((studentList) => {
      res.json({
        message: "Students fetched successfully",
        list: studentList,
      });
    })
    .catch(() => {
      res.json({
        message: "Error fetching students",
      });
    });
}

export function createStudent(req, res) {
  const student = new Student(req.body);

  student
    .save()
    .then(() => {
      res.json({
        message: "Student added successfully",
      });
    })
    .catch(() => {
      res.json({
        message: "Error adding student",
      });
    });
}

export function deleteStudent(req, res) {
  Student.deleteOne({ name: req.body.name })
    .then(() => {
      res.json({
        message: "Student deleted successfully",
      });
    })
    .catch(() => {
      res.json({
        message: "Error deleting student",
      });
    });
}

