import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from "./apiSimulator.ts";

const displayData = () => {
    // fetch the product catalog
    fetchProductCatalog()
        // once the promise is settled, take the resulting data, the object array and return it
        .then((productsList) => {
            console.log("Fetched product catalog: ", productsList);
            return productsList;
        })
        .then((productsList) => {
            // set empty array to store promises from each iteration of the loop
            let productReviewPromises = [];
            
            // loop through each item in our product catalog to find a matching review based on the product.id key value pair
            for (let product of productsList) {
                // store a variable, product ID, then run and console log the reviews that match with it
                let productID = product.id;

                // get the Promise from each run of the product review function in each iteration of the product catalog item
                let productReviewPromise = fetchProductReviews(productID)
                    // if successful, then take the productReview data for that promise, share it in the console, and return the data to fulfill the promise
                    .then((productReview) => {
                        console.log(`Product review found for product ID ${productID}:`, productReview);
                        return productReview;
                    })
                    .catch((error) => {
                        console.error("Error found while fetching product review: ", error);
                    });

                // now push the Promise from each iteration into the array of Promises
                productReviewPromises.push(productReviewPromise);
                console.log("Promises logged so far: ", productReviewPromises);
            }  

            // this is going to ensure that we don't move from this function until all of the promises are settled. The pendin promises need to be settled. either resolved or rejected. It wont move onto the next block prematurely until they're no longer pending
            return Promise.all(productReviewPromises);
        })
        
        // if there's an error fetching the catalog, no reviews will be looked at since it is nested
        .catch((error) => {
            console.error("Error found while fetching product catalog: ", error);
        })

        // return the salesReport promise, then log it if successful, catch error if not
        .then(() => {
            let salesReport = fetchSalesReport();
            return salesReport;
        })
        .then((salesReport) => {
            console.log('Sales Report successfully generated: ', salesReport);
        })
        .catch((error) => {
            console.error("Error found while fetching sales report: ", error);
        })
        
        // final check verifying everything has been tried 
        .finally(() => {
            console.log("All API calls attempted");
        });
};

displayData();