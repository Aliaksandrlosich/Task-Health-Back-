const Domain = require('../Domain')

class Users extends Domain {
 constructor (repository, config) {
  super(repository, config)
 }

 async getUser ({ userId }) {
  try {
   let result
   const user = await this.repository.user.getUser({ key: 'id', value: userId })
   if (user) {
    const { username } = user
    result = {
     message: 'SUCCESS',
     statusCode: 200,
     userId,
     username

    }
   } else {
    result = {
     error: 'UNDEFINED_USER',
     statusCode: 400,
    }
   }
   return result
  } catch (e) {
   console.error('Auth authorization error')
   console.error(e.stack)
   throw e
  }
 }
}

module.exports = Users
