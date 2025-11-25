import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from "./apiSimulator.ts";

const displayData = () => {
    // fetch the product catalog and store it as an array of objects
    fetchProductCatalog()
        // once the promise is settled, take it in as the products List
        .then((productsList) => {
            console.log("Fetched product catalog: ", productsList);
            return productsList;
        })
        .then((productsList) => {
            // then loop through current products and find reviews using the fetch review function
            for (let product of productsList) {
                // store the product ID, then run and console log the reviews that match
                let productID = product.id;

                // call the fetch reviews function with productID variable
                fetchProductReviews(productID)
                    // set a then to return the review for the product
                    .then((reviews) => {
                        console.log(`Product review found for product ID ${productID}:`, reviews);
                    })
                    .catch((error) => {
                        console.error("Error found while fetching product review: ", error);
                    });
            }  
        })
        .catch((error) => {
            console.error("Error found while fetching product catalog: ", error);
        })
};

displayData();
