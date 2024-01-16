# Starcositas
### About
**Starcositas** is a front-End application create with React, it uses a global context to control multiple aspects of the application and handle common errors via `useEffect`.
You can preview the **StarCositas** app by visiting visiting --> **[starcositas.vercel.app](https://starcositas.vercel.app/)**

## How to Use
You must have [NodeJs](https://nodejs.org/en) installed to run the development (if you want to run development)

### `npm i` 
this will install all dependencies needed to run 

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

---
## All admin views
<details> 
<summary> Admin views</summary>

### Users list
![User list]![sc7zDq](https://github.com/JPruezkiez1/starcositas/assets/141532010/012dfd5d-bfbc-4e3c-8865-b83870dd5b08)

### Specific user profile

![User Profile via admin view]![618dNU](https://github.com/JPruezkiez1/starcositas/assets/141532010/495eb326-c894-472b-9410-ea67f0bf2b5d)
**Note: user personal profile resembles the image above**

 ### Admin orders view

![Orders View]![qOKhzn](https://github.com/JPruezkiez1/starcositas/assets/141532010/fc78e422-aa87-4775-870c-9e963118c896)


</details>

## Aplication features

<details> 
<summary> Products Category Settings</summary>

### Category settings

You may add as many categories as you need via the **Navbar** component, this will trigger the category set State as defined in the **Context.js** file.

![Navbar  with 1 category]![Uf7Wt6](https://github.com/JPruezkiez1/starcositas/assets/141532010/7eacbb9a-42a9-4ff6-9e9f-c7bbaff9e754)


***You may adjust the filtering criteria for the products in the context file:***
![contextfilter]![M1zGuL](https://github.com/JPruezkiez1/starcositas/assets/141532010/2fc36f07-07bc-4987-9c85-113d94bd4a69)


</details>



## Routing system

<details><summary>Routes and Routes protection </summary>

Routes or Routing system was created with [react-router-dom](https://reactrouter.com/en/main)
Most routes are self declared and open a single component, however there are some routes that require the use of Params to define or set the state to a certain value, review the `App.js` file to obtain the neccesary information.

![Preview]![BWwU5F](https://github.com/JPruezkiez1/starcositas/assets/141532010/e936d3ce-91e2-407e-aa54-213768026334)


Condition for accesing each route can be changed or enforce in the `Routes.js` file as shown below:
![Route Protection system]![vYJErH](https://github.com/JPruezkiez1/starcositas/assets/141532010/5133b5ec-3c90-4560-9afc-82ad17025f26)



</details>

## User authentication
<details>  <summary>Authentication System</summary> 

**Starcositas**  has its own user control system. by loading an user list into the global context provider, it's possible to identify an user by username and password.

NOTE: account creation has been disabled as the backend API was removed from the project to be used in a different one, still the user login continues, feed by JSON data, you may review said data in the `DATA` folder.
**Login form:**

![Login]![BAuF87](https://github.com/JPruezkiez1/starcositas/assets/141532010/08c16236-a3aa-46bf-baa5-44c0791c99d9)


**Register Form:**
  ![register format ]![HqoXIo](https://github.com/JPruezkiez1/starcositas/assets/141532010/34ff761b-52d9-4b70-ae0c-99302b4bb0c2)

 
</details>
