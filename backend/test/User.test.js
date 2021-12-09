const {User} = require('../models')

describe('User Model', () => {
    test ('Can create a User with correct info', async () => {
      const Tony = await User.create(
          {
            name: 'Tony', 
            email: 'tony@test.com',
            password: "password", 
            isAdmin: false
           })
      
      expect(Tony.name).toBe('Tony')
      expect(Tony.email).toBe('tony@test.com')
      expect(Tony.password).toBe('password')
      expect(Tony.isAdmin).toBe(false)
    })

    test ('Can delete a User', async () => {
     const UserToBeDeleted = await User.findOne({
       where: {
         name: 'Tony'
       }
     })

     UserToBeDeleted.destroy()
    
     const Users = await User.findAll()
      
     expect(Users).not.toContain(UserToBeDeleted)
    })

    test ('Can update a User', async () => {
      const bob = await User.create(
        {
            name: 'Bob', 
            email: 'bob@test.com',
            password: 'password1', 
            isAdmin: false
         })
 
      await bob.update({isAdmin:true})
     
     
       
      expect(bob.isAdmin).toBe(true)
     })
    
  })