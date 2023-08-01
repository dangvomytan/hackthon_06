const express = require('express');
const router = express.Router();
// const StudentController = require('../Controllers/Student.ctl');
import StudentController from '../Controllers/Student.ctl';

router.get('/',StudentController.handleGetStudent);
router.delete(`/delete/:id`,StudentController.handleDeleteStudent);



export default router;