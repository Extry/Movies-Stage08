const { Router } = require('express')
const NotesController = require('../controllers/NotesController')
const notesRoutes = Router()

notesRoutes.post('/:user_id', new NotesController().create)
notesRoutes.delete('/:id', new NotesController().delete)

module.exports = notesRoutes