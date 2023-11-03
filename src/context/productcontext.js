// create a context api
// create a provider
// create a consumer => useContext Hooks

//  Axios allows you to communicate with the APIs in your React project.
//  Axios is a Javascript library used to make HTTP requests from node. js or XMLHttpRequests from the browser 
//  and it supports the Promise API that is native to JS ES6.


import { createContext, useContext, useEffect, useReducer } from "react";
// ye niche (reducer) jo hai vo (ProductReducer) hi hai....niche use kia hai...
import reducer from "../Reducers/ProductReducer";
import axios from "axios";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    SingleProduct: {},
};



const AppProvider = ({ children }) => {

    // use (useReducer) to feature the products in the (feature section) and all products in the products components....
    const [state, dispatch] = useReducer(reducer, initialState);

    // we use (async to make a function return a promise), await(used for wait until the promise resolves)...
    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({ type: "SET_API_DATA", payload: products });
        } catch (error) {
            dispatch({ type: "API_ERROR" });

        }
    }

    // MY 2ND API CALL FOR SINGLE PRODUCT....
    const getSingleProduct = async (url) => {
        dispatch({ type: "SET_SINGLE_LOADING" });
        try {
            const res = await axios.get(url);
            const SingleProduct = await res.data;
            dispatch({ type: "SET_SINGLEPRODUCT_DATA", payload: SingleProduct });
        } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" });
        }
    }

    // make a useEffect and call the function
    useEffect(() => {
        getProducts(API);
    }, []);
    return (
        <AppContext.Provider value={{ ...state, getSingleProduct }}>
            {children}
        </AppContext.Provider>
    );
};

// make a custom Hooks....

const useProductContext = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext, useProductContext };