/** @format */

{/*prettier-ignore */}
/*
@ App routing in NextJs:
++ Create folders and "page.tsx" files for every route

++ 1- The () folders wont be include in the router and we will create them only for semantic routing

++ 2- The [] folder are dynamic routes and will include in the route but we will create them for when we want to change the URL dynamicly 

++ 3- The [...FolderName] folders are for dynamic routes but we write them like a rest operator which means everything after the route can be added (For example multiple routes)

++ 4- The [[FolderName]] folders will include the base route too (For example if we have id route instead of the id hash it will include the "id" itself)

@ Layouts:
- layouts are some globall UI for children components of the component we have

!HINT: We can have nested layouts and nested routes 

@ css:
- When we create a _FolderName folder we will make the folder private so it wont include in the routes (For example an -css folder that includes the css files and we dont want to include that into the URL)
- Or we can add the css file in the root directory of the project so the css will be applied to the whole application

 */
