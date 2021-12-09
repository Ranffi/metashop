const {Item} = require('../models')

describe('Item Model', () => {
    test ('Can create an Item with correct info', async () => {
      const Shirt = await Item.create(
          {
              title: 'True Religon shirt', 
              price: 80,
              description: 'An expensive (for no reason) shirt', 
              image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dillards.com%2Fp%2Ftrue-religion-embroidered-horseshoe-graphic-short-sleeve-t-shirt%2F510540793&psig=AOvVaw2q9KiP3x12I6OlfH45Kj3m&ust=1638901086707000&source=images&cd=vfe&ved=0CAcQjRxqFwoTCPDo5Lrkz_QCFQAAAAAdAAAAABAE'
           })
      
      expect(Shirt.title).toBe('True Religon shirt')
      expect(Shirt.price).toBe(80)
      expect(Shirt.description).toBe('An expensive (for no reason) shirt')
    })

    test ('Can delete an Item', async () => {
     const ItemToBeDeleted = await Item.findOne({
       where: {
         title: 'True Religon shirt'
       }
     })

     ItemToBeDeleted.destroy()
    
     const items = await Item.findAll()
      
     expect(items).not.toContain(ItemToBeDeleted)
    })

    test ('Can update an Item', async () => {
      const Jeans = await Item.create(
        {
            title: 'Robin Jeans', 
            price: 380,
            description: 'An expensive (for no reason) pair of jeans', 
            image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F569001734147703418%2F&psig=AOvVaw3el5a1eFohdiKUoqoEbLIL&ust=1638993632102000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLiru5u90vQCFQAAAAAdAAAAABAE'
         })
 
      await Jeans.update({price: 400})
     
     
       
      expect(Jeans.price).toBe(400)
     })
    
  })