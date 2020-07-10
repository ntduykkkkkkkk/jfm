const Lecturer = require('../models').Lecturer
const Course = require('../models').Course

const createLecturer = async (req, res) => {
    try {
        if (!req.body.lecturer_name) {
            return res.status(400).json({ error: "Lecturer name is required" }) 
        }
        const lecturer = await Lecturer.create(req.body)
        return res.status(200).json({
            message: 'Create successfully',
            data: lecturer
        })
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

const getLecturers = async (req, res) => {
    try {
        const lecturers = await Lecturer.findAll({
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