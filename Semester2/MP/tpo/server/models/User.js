import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true},
  contact: { type: String },
  rollNo: { type: String },
  hscCollege: { type: String },
  hscYearOfPassing: { type: Number },
  hscTotalMarks: { type: Number },
  hscObtainedMarks: { type: Number },
  hscPercentage: { type: Number },
  sslcCollege: { type: String },
  sslcYearOfPassing: { type: Number },
  sslcTotalMarks: { type: Number },
  sslcObtainedMarks: { type: Number },
  sslcPercentage: { type: Number },
  cgpa: { type: Number },
  percentage: { type: Number },
  resume: { type: String }
});

const User = mongoose.model('User', userSchema);

export { User };

