const AppError = require('../utils/AppError')
const knex = require('../database/knex')
const { hash } = require('bcryptjs')

class UsersController {

  async create(request, response) {
    const { name, email, password } = request.body
    const hashedPassword = await hash(password, 8)
    const existEmail = await knex('users').where({ email }).first()

    if (existEmail) {
      throw new AppError('E-mail já cadastrado!')

    } else {

      await knex('users').insert({
        name,
        email,
        password: hashedPassword
      })
    }
    response.json()
  }

}

module.exports = UsersController