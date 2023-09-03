import { createContext, useState, useEffect } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    /// all related to the shop core functionality //
    // Shopping Cart · Increment quantity
    const [count, setCount] = useState(0);
    // Product Detail · Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);
    // Checkout Side Menu · Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);
    // Product Detail · Show product
    const [productToShow, setProductToShow] = useState({});
    // Shopping Cart · Add products to cart
    const [cartProducts, setCartProducts] = useState([]);
    // Check out - My Orders
    const [order, setOrder] = useState([]);
    /// all related to the API consumption and showing the products
    // consume API ///
    const [items, setItems] = useState(null);
    /// search functionality  text and category//
    const [searchValue, setSearchValue] = useState(null);;
    const [searchCategory, setSearchCategory] = useState(null);;
    /// Make sure to setup a functionality with this to keep up orders based on the proper user.

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
    console.log("All Orders:", order);
    //data loaders///

    //this one consumes the products API **** It just loads the info to a .json file.
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])

    // filter text - category useUseEffect //
    useEffect(() => {
        if (searchValue && searchCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchValue, searchCategory))
        if (searchValue && !searchCategory) setFilteredItems(filterBy('BY_TITLE', items, searchValue, searchCategory))
        if (!searchValue && searchCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchValue, searchCategory))                      /// this is one is really a just use your fcking brain and make sense of it
        if (!searchValue && !searchCategory) setFilteredItems(filterBy(null, items, searchValue, searchCategory))
    }, [searchValue, searchCategory, items])

    // this one will keep the orders in localStorage //.
    useEffect(() => {
        const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
        setOrder(savedOrders);
    }, []);

    //// code related to users
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');                            /// general context for the usage of the register form, this might be local if you want..
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [isLogged, setIsLogged] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState(null);







    // new Users with API
    const [usertest, setUsertest] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(response => response.json())
            .then(userdata => setUsertest(userdata.users))
    }, [])


    useEffect(() => {
        const savedUser = localStorage.getItem('loggedInUser');
        if (savedUser) {
            const user = JSON.parse(savedUser);
            setLoggedInUser(user);
            setIsLogged(true);
        }
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
            setLoggedInUser,
            usertest,
            setUsertest
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
};
