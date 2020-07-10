const express = require('express')
const router = express.Router()

const lecturerController = require('../controllers').lecturer
const classroomController = require('../controllers').classroom

router.get('/lecturer', lecturerController.getLecturers)
router.get('/lecturer/:id', lecturerController.getLecturer)
router.delete('/lecturer/:id', lecturerController.deleteLecturer)
router.post('/lecturer/', lecturerController.createLecturer)
router.put('/lecturer/:id', lecturerController.updateLecturer)

router.get('/classroom', classroomController.getClassrooms)
router.get('/classroom/:id', classroomController.getClassroom)
router.delete('/classroom/:id', classroomController.deleteClassroom)
router.post('/classroom/', classroomController.createClassroom)
router.put('/classroom/:id', classroomController.updateClassroom)

module.exports = router