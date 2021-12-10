Components:

Index.js (Jazmin)
    - App (Jazmin)
        - Router (Jazmin)
        - Navbar (Javier)
            - Logo image (when clicked brings you to homepage), shopping cart, Log In

HomePage (Ranffi)
    - banner
        - no state, just provide picture
    - categoryContainer
        - display category name, category image, link to item page
        - fetch category data

CartPage (Javier)
    - cartItemsContainer (display items and their individual price, fetch from db - order table)
        -itemContainer* (display image, price, name, remove from cart button(buttonContainer))
    - total

ItemsPage (Anderson)
    - itemContainer* (display image, price, name, add from cart button(buttonContainer))

buttonContainer (Jazmin)

AFTER MVP:
- LogInPage
- SignUpPage

*used in multiple places


Presentation:
Jazmin introduces group & mentions tools used for project
Jazmin demonstrates site (ONLY log in as a non-admin)
Anderson talks ItemsPage & conditional rendering for admin (Jazmin logs in as admin) 
Ranffi talks about Homepage & styling & tests (Jazmin runs 'npm run test:report')
Jazmin talks about SingleItemPage, Button, Item.js, Form.js
Javier talks about cart & Chakra

Jazmin: 
How did we work as a group:
This was a learning environment. If we didn't know how to implement something, we worked together to come up with different solutions. Examples: No one knew how to work w/ Chakra but Javier suggested it and we decided to use it and learn it together. Everyone else in the group knew Firebase except for me, so they gave me the task of setting it up. 

Jazmin:
Future features: Implement stripe for checkout