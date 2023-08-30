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
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])
    const [items, setItems] = useState(null)
    /// search functionality  text and category//
    const [searchValue, setSearchValue] = useState(null);;
    const [searchCategory, setSearchCategory] = useState(null);;
    // items filter context ///
    const [filteredItems, setFilteredItems] = useState()
    // transform to lower case and filter by title //
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
            return filteredItemsByCategory(items, searchCategory)
        }

        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchCategory, searchValue).filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
        }

        if (!searchType) {
            return items
        }
    }


    // filter text - category useUseEffect //
    useEffect(() => {
        if (searchValue && searchCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchValue, searchCategory))
        if (searchValue && !searchCategory) setFilteredItems(filterBy('BY_TITLE', items, searchValue, searchCategory))
        if (!searchValue && searchCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchValue, searchCategory))
        if (!searchValue && !searchCategory) setFilteredItems(filterBy(null, items, searchValue, searchCategory))
    }, [searchValue, searchCategory, items])




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
        const newUser = { ...user, id: users.length + 1 };
        setUsers([...users, newUser]);
    };

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        localStorage.setItem('registeredUsers', JSON.stringify(users));
    }, [users]);




    /// user login  interface control ///
    const [isLogged, setIsLogged] = useState(false);
    /// logged userInfo//
    const [loggedInUser, setLoggedInUser] = useState(null);

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