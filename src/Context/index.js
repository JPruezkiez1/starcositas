import { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext = createContext()

const initialUsers = [
    { id: 1, email: 'admin@admin.com', username: 'admin', password: 'admin' },
];

export const ShoppingCartProvider = ({ children }) => {
    /// all related to the shop core functionality //
    // Shopping Cart · Increment quantity
    const [count, setCount] = useState(0)
    // Product Detail · Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)
    // Checkout Side Menu · Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)
    // Product Detail · Show product
    const [productToShow, setProductToShow] = useState({})
    // Shopping Cart · Add products to cart
    const [cartProducts, setCartProducts] = useState([])
    // Check out - My Orders
    const [order, setOrder] = useState([])
    /// all related to the API consumption and showing the products
    // consume API ///
    const [items, setItems] = useState(null)
    /// search functionality  text and category//
    const [searchValue, setSearchValue] = useState(null);;
    const [searchCategory, setSearchCategory] = useState(null);;
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');                            /// general context for the usage of the register form, this might be local if you want..
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    /// user login  interface control ///
    const [isLogged, setIsLogged] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState(null); /// Make sure to setup a functionality with this to keep up orders based on the proper user.

    // items filter context ///
    const [filteredItems, setFilteredItems] = useState()
    //// search method - describer ///

    const filteredItemsByTitle = (items, searchValue) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
    }
    const filteredItemsByCategory = (items, searchCategory) => {
        return items?.filter(item => item.category.toLowerCase().includes(searchCategory.toLowerCase()))
    }
    //// search method - describer ///
    const filterBy = (searchType, items, searchValue, searchCategory) => {
        if (searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchValue)
        }
        if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchCategory)                       ///this entire shit is just to by able to have multiple search criteria
        }
        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchCategory, searchValue).filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
        }
        if (!searchType) {
            return items
        }
    }
    /// all related to the register and login functionality //
    const [users, setUsers] = useState(() => {
        const storedUsers = JSON.parse(localStorage.getItem('registeredUsers'));
        const mergedUsers = [
            ...initialUsers,
            ...(storedUsers || [])
        ].reduce((acc, user) => {
            if (!acc.some((existingUser) => existingUser.username === user.username)) {
                acc.push(user);
            }
            return acc;
        }, []);
        return mergedUsers;
    });
    const registerUser = (user) => {
        const newUser = { ...user, id: users.length + 1 };           /// this whole shit i dont really get it too much, the chat helped me with this....
        setUsers([...users, newUser]);
    };

    //data loaders///

    //this one consumes the products API **** It just loads the info to a .json file.
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])


    // this one loads the default users // default users are a bitch......
    useEffect(() => {
        localStorage.setItem('registeredUsers', JSON.stringify(users));             //**///** */            //this one will load the first users or default users you might not need this in production...
    }, [users]);

    // filter text - category useUseEffect //
    useEffect(() => {
        if (searchValue && searchCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchValue, searchCategory))
        if (searchValue && !searchCategory) setFilteredItems(filterBy('BY_TITLE', items, searchValue, searchCategory))
        if (!searchValue && searchCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchValue, searchCategory))                      /// this is one is really a just use your fcking brain and make sense of it
        if (!searchValue && !searchCategory) setFilteredItems(filterBy(null, items, searchValue, searchCategory))
    }, [searchValue, searchCategory, items])


    /// this will keep the user log-in after page refresh - localStorage //
    useEffect(() => {
        const savedUser = localStorage.getItem('loggedInUser');
        if (savedUser) {
            const user = JSON.parse(savedUser);
            setIsLogged(true);
            setLoggedInUser(user);
        }
    }, []);

    // this one will keep the orders in localStorage //.
    useEffect(() => {
        const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
        setOrder(savedOrders);
    }, []);



    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            setSearchValue,
            searchValue,
            filteredItems,
            setFilteredItems,
            filteredItemsByTitle,
            filteredItemsByCategory,
            searchCategory,
            setSearchCategory,
            users, setUsers,
            registerUser,
            username,
            setUsername,
            password,
            setPassword,
            errorMessage,
            setErrorMessage,
            email,
            setEmail,
            isLogged,
            setIsLogged,
            loggedInUser,
            setLoggedInUser
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}