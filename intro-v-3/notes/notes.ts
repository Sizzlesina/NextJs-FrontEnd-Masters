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

@ CSS:
- When we create a _FolderName folder we will make the folder private so it wont include in the routes (For example an -css folder that includes the css files and we dont want to include that into the URL)
- Or we can add the css file in the root directory of the project so the css will be applied to the whole application

@ CSS modules:
- Just like css but its like javascript moduls and its encapsulated and it isnt globall so we can have one modul per component
- Css module will make a unique class name for you 

@ Server Components:
- Server components fetch data on the server. because these components have not client side JS, they dont fall into the render logic/loop that client components do and instead they work more like regular js functions. This means we can just async/await a server component to get data

@ Client Components:
- For now you can use any current data fetching
- When we used an component in the "components" folder and inside that component we used a state we got an error so we add 'use client" at the top of the codes in that file

!HINT: In Next 13 every component will be server component by default and for that when we want a component to be client component we must write ("use client") at top of the component

@ Loading and error handling in Next JS:
- In the folder which we have a page.tsx file we can add a loading.tsx file and then write the loading UI inside that so when the data is getting loaded into that component the loading will automatically show up
- In the same folder we can have a error.tsx file too that handles the error toast and shows an error when it cant fetch the data
!HINT: These are built in Next Js components

@ Middleware:
- Is something like a thing between the routes so when we want to navigate through routes we pass middleware then we get navigated to that route

 */
