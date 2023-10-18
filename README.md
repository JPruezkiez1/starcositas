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
![User list](https://awo.jpruezkiez.com/sc7zDq.png)

### Specific user profile

![User Profile via admin view](https://awo.jpruezkiez.com/618dNU.png)
**Note: user personal profile resembles the image above**

 ### Admin orders view

![Orders View](https://awo.jpruezkiez.com/qOKhzn.png)

</details>

## Aplication features

<details> 
<summary> Products Category Settings</summary>

### Category settings

You may add as many categories as you need via the **Navbar** component, this will trigger the category set State as defined in the **Context.js** file.

![Navbar  with 1 category](https://awo.jpruezkiez.com/Uf7Wt6.png)

***You may adjust the filtering criteria for the products in the context file:***
![contextfilter](https://awo.jpruezkiez.com/M1zGuL.png)

</details>



## Routing system

<details><summary>Routes and Routes protection </summary>

Routes or Routing system was created with [react-router-dom](https://reactrouter.com/en/main)
Most routes are self declared and open a single component, however there are some routes that require the use of Params to define or set the state to a certain value, review the `App.js` file to obtain the neccesary information.

![Preview](https://awo.jpruezkiez.com/BWwU5F.png)

Condition for accesing each route can be changed or enforce in the `Routes.js` file as shown below:
![Route Protection system](https://awo.jpruezkiez.com/vYJErH.png)


</details>

## User authentication
<details>  <summary>Authentication System</summary> 

**Starcositas**  has its own user control system. by loading an user list into the global context provider, it's possible to identify an user by username and password.

NOTE: account creation has been disabled as the backend API was removed from the project to be used in a different one, still the user login continues, feed by JSON data, you may review said data in the `DATA` folder.
**Login form:**

![Login](https://awo.jpruezkiez.com/BAuF87.png)

**Register Form:**
  ![register format ](https://awo.jpruezkiez.com/HqoXIo.png)
 
</details>