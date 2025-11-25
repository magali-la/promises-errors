import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from "./apiSimulator.ts";

const displayData = () => {
    // fetch the product catalog and store it as an array of objects
    fetchProductCatalog()
        .then((productsList) => {
            let currentProducts = productsList;
            console.log("Fetched product catalog: ", currentProducts);
        })
        .catch((error) => {
            console.error("Error found: ", error);
        })
}

displayData();

// displayData(1);
// displayData(2);
// // error state - no matching product or reviews
// displayData(3);
