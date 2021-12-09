const {User, Cart, Item} = require('../models')

describe('Cart Model', () => {
    test ('A User can have an item through Cart', async () => {
      const John = await User.create(
          {
            name: 'John', 
            email: 'John@test.com',
            password: 'password3', 
            isAdmin: false
           })

           const socks = await Item.create(
            {
                title: 'socks', 
                price: 7,
                description: 'fuzzy socks', 
             })
      
             await John.addItems(socks)

             const cart = await Cart.findOne({
                 where: {
                     UserId: John.id
                 }
             })

      expect(cart.ItemId).toBe(socks.id)
    })

    test ('User can have many items through Cart', async () => {
        const David = await User.create(
            {
              name: 'David', 
              email: 'David@test.com',
              password: 'password4', 
              isAdmin: false
             })
        const belt = await Item.create(
            {
                title: 'belt', 
                price: 150,
                description: 'expensive belt', 
             })

             const watch = await Item.create(
                {
                    title: 'watch', 
                    price: 4500,
                    description: 'Rolex', 
                 })

             await David.addItems(belt)
             await David.addItems(watch)
    
     const UserItemsInCart = await Cart.findAll({
         where: {
             UserId: David.id
         }
     })
      
     expect(UserItemsInCart[0].ItemId).toBe(belt.id)
     expect(UserItemsInCart[1].ItemId).toBe(watch.id)
    })
  
  })