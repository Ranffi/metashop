const {Category} = require('../models')

describe('Category Model', () => {
    test ('Can create an Category with correct info', async () => {
      const  furniture = await Category.create(
          {
              name: 'Furniture'
           })
      
      expect(furniture.name).toBe('Furniture')
    })

    test ('Can delete an Category', async () => {
     const CategoryToBeDeleted = await Category.findOne({
       where: {
        name: 'Furniture'
       }
     })

     CategoryToBeDeleted.destroy()
    
     const Categories = await Category.findAll()
      
     expect(Categories).not.toContain(CategoryToBeDeleted)
    })

    test ('Can update a Category', async () => {
      const Table = await Category.create(
        {
            name: 'Table',
         })
 
      await Table.update({name: 'New Table'})
     
     
       
      expect(Table.name).toBe('New Table')
     })
    
  })