import { createContext, useState, useEffect } from 'react';
export const ShoppingCartContext = createContext();
export const ShoppingCartProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);
    const [productToShow, setProductToShow] = useState({});
    const [cartProducts, setCartProducts] = useState([]);
    const [items, setItems] = useState([]);
    const [usertest, setUsertest] = useState([]);
    const [order, setOrder] = useState([]);
    const [searchValue, setSearchValue] = useState(null);
    const [searchCategory, setSearchCategory] = useState(null);
    const [filteredItems, setFilteredItems] = useState([]);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loggedInUser, setLoggedInUser] = useState(null);



    const filteredItemsByTitle = (itemsToFilter, searchValue) => {
        return itemsToFilter.filter(item =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
        );
    };
    const filteredItemsByCategory = (itemsToFilter, searchCategory) => {
        return itemsToFilter.filter(item =>
            item.category.toLowerCase().includes(searchCategory.toLowerCase())
        );
    };
    const applyFilters = () => {
        let filtered = items;
        if (searchValue) {
            filtered = filteredItemsByTitle(filtered, searchValue);
        }
        if (searchCategory) {
            filtered = filteredItemsByCategory(filtered, searchCategory);
        }
        setFilteredItems(filtered);
    };
    useEffect(() => {
        applyFilters();
    }, [searchValue, searchCategory, items]);






    useEffect(() => {
        const savedUser = localStorage.getItem('loggedInUser');
        if (savedUser) {
            const user = JSON.parse(savedUser);
            setLoggedInUser(user);
            setIsLogged(true);
        }
    }, []);
    const [isLogged, setIsLogged] = useState(() => localStorage.getItem('loggedInUser'))
    useEffect(() => {
        fetch('http://34.75.37.247:8080/products')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    useEffect(() => {
        fetch('http://34.75.37.247:8080/users')
            .then(res => res.json())
            .then(data => setUsertest(data))
    }, [])

    useEffect(() => {
        fetch('http://34.75.37.247:8080/orders')
            .then((res) => res.json())
            .then((data) => setOrder(data));
    }, []);

    console.log(usertest)
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
            setUsertest,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
};
