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

CartPage
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
Login Page:
1. When logged out, site should automatically go to localhost:3000/# (see #2)
2. localhost:3000/# should be changed to /login

HomePage:
3. Categories should be centered on home page
4. Should not be able to click in between categories and be redirected
5. Make category names bigger 
6. Change category color in light mode
7. MOBILE: category should show up in 1 column (Change to SimpleGrid instead of converting to functional component)

Navbar:
8. Make logo and company name bigger

ItemsPage:
9. Prevent Button from escaping (perhaps put button on bottom?)
10. Item color background: {dark mode: #4A4E69, light mode: #C9ADA7}

Button
11. Button color: {dark mode: , light mode: } (as long as it's a part of the color palette)

ItemsPage: Admin Form
12. Admin Add Item form needs Chakra
13. Form: require all inputs
14. handleChange isn't working - words don't pop up in input when you type
15. When creating items, need to give item a categoryId

Single Item Page:
16. (light mode only:) Change items color background to navbar in light mode: #C9ADA7
17. Update Item form needs Chakra
18. Need to finish admin item deletion functionality
19. Need to successfully redirect after deleting item

Cart Page:
20. Needs Button

21. OPTIONAL: Add alert box to checkout button telling people that this is not a real website but that they can give us money if they want

IF THERE IS TIME:
MAKE ITEM.JS AND PUT IT INTO SINGLEITEMPAGE.JS AND ITEMSPAGE.JS AS ITEM COMPONENT