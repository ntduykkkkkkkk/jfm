const Student = require('../models').Student
const Classroom = require('../models').Classroom

const createStudent = async (req, res) => {
    try {
        if (!req.body.classroom_id) {
            return res.status(400).json({ error: "Classroom is required" }) 
        }
        if (!req.body.student_name) {
            return res.status(400).json({ error: "Student name is required" }) 
        }
        const student = await Student.create(req.body)
        return res.status(200).json({
            message: 'Created successfully',
            data: student
        })
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}


const getStudents = async (req, res) => {
    try {
        const students = await Student.findAll({
            include: [{
                model: Course,
                as: 'course'
            }],
            order: [
                ['createdAt', 'DESC'],
                [{ model: Course, as: 'course' }, 'createdAt', 'DESC']
            ]
        })
        return res.status(200).json({ lecturers })
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

const getLecturer = async (req, res) => {
    try {
        const lecturer = await Lecturer.findByPk(req.params.id, {
            include: [{
                model: Course,
                as: 'course'
            }],
            order: [
                ['createdAt', 'DESC'],
                [{ model: Course, as: 'course' }, 'createdAt', 'DESC']
            ]
        })
        if (!lecturer) {
            return res.status(404).json({
                message: 'Not found'
            })
        }
        return res.status(200).json({ lecturer })
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

const updateLecturer = async (req, res) => {
    try {
        const lecturer = await Lecturer.findByPk(req.params.id ,{
            include: [
                { model: Course, as: 'course'}
            ]
        })
        if (!lecturer) {
            return res.status(404).json({
                message: 'Not found'
            })
        }
        await lecturer.update(req.body ,{
            where: { id: req.params.id }
        })
        return res.status(200).json({ message: 'Update successfully', data: lecturer})
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

const deleteLecturer = async (req, res) => {
    try {
        const lecturer = await Lecturer.findByPk(req.params.id, {
            include: [
                { model: Course, as: 'course'}
            ]
        })
        if (!lecturer) {
            return res.status(404).json({
                message: 'Not found'
            })
        }
        await lecturer.destroy({
            where: { id: req.params }
        })
        return res.status(201).json({
            message: 'Delete successfully',
            data: lecturer
        })
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

module.exports = {
    createLecturer,
    getLecturers,
    getLecturer,
    updateLecturer,
    deleteLecturer
}