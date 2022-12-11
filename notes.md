## Redux Toolkit - Lama Dev (30/11/2022)

1. npm install @reduxjs/toolkit
2. create redux folder in src 
3. create userSlice.js and store.js in redux folder
4. add the necessary imports in both the files
5. the slice file contains initialState and reducers and the reducer object contains the actions 
6. in the update.js we have name and email useState and when we click the update button it sends the name and email as action payload to the reducer. 
7. export the update action in the slice file, ```js export const { update } = userSlice.actions; ``` so that it can be used in the update page.
8. So when we click the update button, we can dispatch the action 
9. export the reducer in the userSlice file, ```js export default userSlice.reducer; ``` and import it in the store.js `import  userReducer  from "./userSlice";`
10. wrap the <App /> component in index.js with provider and for that install react-redux, import the store and provider in index.js
11. useSelector hook is used in the components to access the data stored in the state. In the Navbar.jsx we can import the useSelector hook and use the name from the store. `const name = useSelector(state=>state.user.name)` and now `name` variable can be used anywhere in the component
12. in the Update.jsx create an onClick function and use useDispatch variable to send the action payload.
 `import { useDispatch } from "react-redux";`  `import { update } from "../../redux/userSlice";`
  `const dispatch = useDispatch();`
```js
 function handleUpdate(e) {
    e.preventDefault();
    dispatch(update(userDetails))
  } 
```
13. Multiple actions can be used in the userSlice.js and they can be exported and imported in any components and used using Dispatch.




