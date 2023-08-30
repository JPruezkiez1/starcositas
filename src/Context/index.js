import { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext = createContext()

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
    const [searchvalue, setSearchvalue] = useState(null);;
    const [searchcategory, setSearchCategory] = useState(null);;
    console.log(searchcategory)

    // items filter context ///
    const [filteredItems, setFilteredItems] = useState()

    // transform to lower case and filter by title //
    const filteredItemsByTitle = (items, searchvalue) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchvalue.toLowerCase()))
    }

    const filteredItemsByCategory = (items, searchcategory) => {
        return items?.filter(item => item.category.toLowerCase().includes(searchcategory.toLowerCase()))
    }

    //// search method - describer ///
    const filterBy = (searchType, items, searchvalue, searchcategory) => {
        if (searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchvalue)
        }

        if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchcategory)
        }

        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchcategory, searchvalue).filter(item => item.title.toLowerCase().includes(searchvalue.toLowerCase()))
        }

        if (!searchType) {
            return items
        }
    }


    // filter text - category useUseEffect //
    useEffect(() => {
        if (searchvalue && searchcategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchvalue, searchcategory))
        if (searchvalue && !searchcategory) setFilteredItems(filterBy('BY_TITLE', items, searchvalue, searchcategory))
        if (!searchvalue && searchcategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchvalue, searchcategory))
        if (!searchvalue && !searchcategory) setFilteredItems(filterBy(null, items, searchvalue, searchcategory))
    }, [searchvalue, searchcategory, items])







    console.log(filteredItems)
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
            setSearchvalue,
            searchvalue,
            filteredItems,
            setFilteredItems,
            filteredItemsByTitle,
            filteredItemsByCategory,
            searchcategory,
            setSearchCategory,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}