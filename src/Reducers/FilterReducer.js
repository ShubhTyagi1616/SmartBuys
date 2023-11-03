

const filterReducer = (state, action) => {

    switch (action.type) {

        case "LOAD_FILTER_PRODUCTS":
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
            };

        case "SET_GRID_VIEW":
            return {
                ...state,
                grid_view: true,
            };

        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view: false,
            }

        case "GET_SORT_VALUE":
            // we use traditional function to get the sorting_value and get the data...
            // let userSortValue = document.getElementById("sort");
            // ye niche (sort_value) me humne (userSortValue.options) ka matalb hai k (select) me kitne (options) hai aur uske baad (selectIndex) me jo (index) select kia hai vo aur (.value) matlab uski value show kardo...
            // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
            // console.log(sort_value);    ...to show the data on the console on the web

            // use another advance method

            return {
                ...state,
                // yaha (sorting_value) me (action.payload) islie diya hai qk humne (filtercontext) me (event object) ka use kia hai...Sorting function me...
                sorting_value: action.payload,
            }

        case "SORTING_PRODUCTS":

            let newSortData;

            const { filter_products, sorting_value } = state;
            let tempSortProduct = [...filter_products];

            const sortingProducts = (a, b) => {
                // first condition to show "a-z" combination products with the help of (localeCompare function) if a is come first than show if not then show at last position....
                if (sorting_value === "a-z") {
                    return a.name.localeCompare(b.name);
                }
                // second condition to show in descending order ("z-a" combination) with same (localeCompare) function...
                if (sorting_value === "z-a") {
                    return b.name.localeCompare(a.name);
                }

                // third condition to show lowest to highest products with the help of price compare...
                if (sorting_value === "lowest") {

                    // isme logic ye hai k lowest me (a ka price) kam hona chahie (b k price) se...
                    return a.price - b.price;
                }

                // fourth condition to show highest to lowest price
                if (sorting_value === "highest") {

                    // isme logic ulta hai (b.price ka matlab price jyada hai ) as compared to (a.price se) to sabse mehanga pehle aur sasta baad me...
                    return b.price - a.price;
                }

            }
            // ab yaha (newSortData) k andar humne (tempSortProduct jiske andar filter_products hai) usme se sort krke (sortingProducts) me jo value mili hai usko show kar denge...  
            newSortData = tempSortProduct.sort(sortingProducts);

            return {
                ...state,
                filter_products: newSortData,
            };

        case "UPDATE_FILTERS_VALUE":
            const { name, value } = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters,
                    // ye niche [name] jo hai ye dynamic hai isko hum kahi bhi use kar sakte hai....
                    [name]: value,
                }
            };

        case "FILTER_PRODUCTS":

            let { all_products } = state;
            let tempFilterProduct = [...all_products];

            const { text, category, company } = state.filters;
            if (text) {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    // ye niche jo (includes) hai ye use hota hai k jo bhi word hum likh rhe hai vo aana chahie...chahe matching na ho....par iski jagah hum (startsWith) use kar sakte hai par vo strict guidelines k saath hai....
                    return curElem.name.toLowerCase().includes(text);
                });
            }
            if (category !== "all") {
                tempFilterProduct = tempFilterProduct.filter((curElem) =>
                    curElem.category === category
                );
            }

            // yaha par product show ni ho rahe hai qk vo bar sirf (all) ko select kar raha hai default...to isko tackle karna jruri hai....dono me hi (ALL) ka button kaam ni kar raha hai........
            if (company !== "all") {
                tempFilterProduct = tempFilterProduct.filter((curElm) =>
                    curElm.company.toLowerCase() === company.toLowerCase()


                )
            }

            return {
                ...state,
                filter_products: tempFilterProduct,
            }

        default:
            return state;
    }

}
export default filterReducer;