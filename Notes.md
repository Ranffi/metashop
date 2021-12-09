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

ItemPage (Anderson)
    - itemContainer* (display image, price, name, add from cart button(buttonContainer))

buttonContainer (Jazmin)

AFTER MVP:
- LogInPage
- SignUpPage

*used in multiple places

Wednesday Check Up:
Login Page: (Ranffi)
1. When logged out, site should automatically go to localhost:3000/# (see #2)
2. localhost:3000/# should be changed to /login

ItemsPage: (Anderson)
9. Prevent Button from escaping (perhaps put button on bottom?)
10. Item color background: {dark mode: #4A4E69, light mode: #C9ADA7}

ItemsPage: Admin Form (Anderson)
12. Admin Add Item form needs Chakra
13. Form: require all inputs
14. handleChange isn't working - words don't pop up in input when you type
15. When creating items, need to give item a categoryId

Single Item Page: (Jazmin)
18. Need to finish admin item deletion functionality
19. Need to successfully redirect after deleting item

IF THERE IS TIME: (Jazmin)
Change structure of ItemsPage so that it only shows Item and Form components in render function