import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productcontext";
// ye niche (reducer) FilterReducer hi hai jo (FilterReducerProvider) me (useReducer k andar) (reducer) ko show kar raha hai....
import reducer from "../Reducers/FilterReducer";


const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: "lowest",
    filters: {
        text: " ",
        category: "all",
        company: "all",
    }
}


export const FilterContextProvider = ({ children }) => {
    // ye niche humne (products) ko get kia hai (useproductContext) se...jisse ki hum saare products show kar sake (filterContext) k andar...
    const { products } = useProductContext();


    const [state, dispatch] = useReducer(reducer, initialState);

    // to set the grid view 
    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" });
    };
    // to set the List view
    const setListView = () => {
        return dispatch({ type: "SET_LIST_VIEW" });
    }

    // yeh function bna raha hu selection k liye k (highest to lowest, lowest to highest aur a-z or z-a )
    // for ease of work we use (event object) ka use karenge aur vo jis bhi element ko click karoge uska complete information fetch kar lega....
    const Sorting = (event) => {
        let userValue = event.target.value;
        dispatch({ type: "GET_SORT_VALUE", payload: userValue });
    }

    // update the filters values...
    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
    };
    // ye niche (useEffect) liya hai filteration method k liye jisse hum products ko filtered krke products show kar sake....
    useEffect(() => {
        dispatch({type: "FILTER_PRODUCTS"});
        dispatch({ type: "SORTING_PRODUCTS" });
    }, [products, state.sorting_value, state.filters]);

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    }, [products]);


    return (<FilterContext.Provider value={{ ...state, setGridView, setListView, Sorting, updateFilterValue }}>
        {children}
    </FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
}