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

    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    const [productToShow, setProductToShow] = useState({});

    const [cartProducts, setCartProducts] = useState([]);

    const [order, setOrder] = useState([]);

    const [items, setItems] = useState(null);

    const [searchValue, setSearchValue] = useState(null);;
    const [searchCategory, setSearchCategory] = useState(null);;



    const [filteredItems, setFilteredItems] = useState()

    const filteredItemsByTitle = (items, searchValue) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
    }
    const filteredItemsByCategory = (items, searchCategory) => {
        return items?.filter(item => item.category.toLowerCase().includes(searchCategory.toLowerCase()))
    }

    const filterBy = (searchType, items, searchValue, searchCategory) => {
        if (searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchValue)
        }
        if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchCategory)
        }
        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchCategory, searchValue).filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
        }
        if (!searchType) {
            return items
        }
    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])


    useEffect(() => {
        if (searchValue && searchCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchValue, searchCategory))
        if (searchValue && !searchCategory) setFilteredItems(filterBy('BY_TITLE', items, searchValue, searchCategory))
        if (!searchValue && searchCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchValue, searchCategory))
        if (!searchValue && !searchCategory) setFilteredItems(filterBy(null, items, searchValue, searchCategory))
    }, [searchValue, searchCategory, items])


    useEffect(() => {
        const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
        setOrder(savedOrders);
    }, []);


    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const [loggedInUser, setLoggedInUser] = useState(null);








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

    const [isLogged, setIsLogged] = useState(() => localStorage.getItem('loggedInUser'))


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
