const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


mongoose.connect('mongodb+srv://codepyx23:Ayush%40a1a2a3a4a5a6@cluster0.e7vsca1.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp', { useNewUrlParser: true, useUnifiedTopology: true });


const studentSchema = new mongoose.Schema({
  name: String,
  ucid: String,
  branch: String,
  marks: Number
});

const Student = mongoose.model('Student', studentSchema);


app.post('/api/students', async(req, res) => {
  const { name, ucid, branch, marks } = req.body;
  const student = new Student({ name, ucid, branch, marks });
  try {
    const saved = await student.save({});
    res.json({ message: 'Student added successfully!' });
  } catch (err) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/getstudents', async (req, res) => {
  try {
    const students = await Student.find({});
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put('/api/updatestudents/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updatedStudent = await Student.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.delete('/api/deletestudents/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const deletedStudent = await Student.findByIdAndDelete(id);
    res.json({ message: 'Student deleted successfully', deletedStudent });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
