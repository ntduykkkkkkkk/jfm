const Classroom = require('../models').Classroom
const Student = require('../models').Student

const createClassroom = async (req, res) => {
    try {
        if (!req.body.classroom_name) {
            return res.status(400).json({ error: "Classroom name is required" }) 
        }
        const classroom = await Classroom.create(req.body)
        return res.status(200).json({
            message: 'Created successfully',
            data: classroom
        })
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

const getClassrooms = async (req, res) => {
    try {
        const classrooms = await Classroom.findAll({
            include: [{
                model: Student,
                as: 'student'
            }],
            order: [
                ['createdAt', 'DESC'],
                [{ model: Student, as: 'student' }, 'createdAt', 'DESC']
            ]
        })
        return res.status(200).json({ classrooms })
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

const getClassroom = async (req, res) => {
    try {
        const classroom = await Classroom.findByPk(req.params.id, {
            include: [{
                model: Student,
                as: 'student'
            }],
            order: [
                ['createdAt', 'DESC'],
                [{ model: Student, as: 'student' }, 'createdAt', 'DESC']
            ]
        })
        if (!classroom) {
            return res.status(404).json({
                message: 'Not found'
            })
        }
        return res.status(200).json({ classroom })
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

const updateClassroom = async (req, res) => {
    try {
        const classroom = await Classroom.findByPk(req.params.id ,{
            include: [
                { model: Student, as: 'student'}
            ]
        })
        if (!classroom) {
            return res.status(404).json({
                message: 'Not found'
            })
        }
        await classroom.update(req.body ,{
            where: { id: req.params.id }
        })
        return res.status(200).json({ message: 'Updated successfully', data: classroom})
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

const deleteClassroom = async (req, res) => {
    try {
        const classroom = await Classroom.findByPk(req.params.id, {
            include: [
                { model: Student, as: 'student'}
            ]
        })
        if (!classroom) {
            return res.status(404).json({
                message: 'Not found'
            })
        }
        await classroom.destroy({
            where: { id: req.params }
        })
        return res.status(201).json({
            message: 'Deleted successfully',
            data: classroom
        })
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

module.exports = {
    createClassroom,
    getClassrooms,
    getClassroom,
    updateClassroom,
    deleteClassroom
}