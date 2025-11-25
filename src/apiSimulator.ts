// CUSTOM ERROR TYPES
// Data Error
class DataError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DataError";
  }
}

// Network Error
class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NetworkError";
  }
}

// PRODUCT CATALOG FETCH
export const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]> => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // success rate for finding the catalog
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Amber Glass Candle Jars (4 pack)", price: 25 },
                    { id: 2, name: "Lavender Vanilla Oil (20ml)", price: 30 },
                ]);
            } else {
                reject(new DataError("Failed to fetch product catalog"));
            }
        }, 1000);
    });
};

// PRODUCT REVIEW FETCH

export const fetchProductReviews = (productID: number): Promise<{productID: number, name: string, reviewComment: string, reviewScore: number }[]> => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
            // resolve by returning the array of objects with product reviews
                if (productID === 1){
                    resolve([
                        {productID: 1, name: "Amber Glass Candle Jars (4 pack)", reviewComment: " I was not happy with the product, it came with a scratch on two of the jars...", reviewScore: 2}, 
                        {productID: 1, name: "Amber Glass Candle Jars (4 pack)", reviewComment: "I always buy my candle jars from here. The soft amber color is great for fall candle themes and fits with any decor", reviewScore: 5}
                    ]);
                } else if (productID === 2){
                    resolve([
                        {productID: 2, name: "Lavender Vanilla Oil (20ml)", reviewComment: "The scent is perfect for bedtime candles! Can't wait to make more candles with this!", reviewScore: 5}, 
                        {productID: 2, name: "Lavender Vanilla Oil (20ml)", reviewComment: "I could barely smell the vanilla scent, so I was disappointed.", reviewScore: 3}
                    ]);
                } else {
                    // throw an error - there aren't any reviews
                    reject(new DataError(`No reviews available for product ID ${productID}`));
                }
            } else {
                // reject by returning a failed string for the productID
                reject(new DataError(`Failed to fetch reviews for product ID ${productID}`));
            }
        }, 1500);
    });
};

// SALES REPORT FETCH
export const fetchSalesReport = (): Promise<{ totalSales: number, unitsSold: number, averagePrice: number }> => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8){
            // resolve by returning a sales report object
                resolve({totalSales: 100, unitsSold: 60, averagePrice: 50});
            } else {
                reject(new NetworkError("Failed to fetch sales report."));
            }
        }, 1000);
    });
};