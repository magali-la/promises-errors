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
                reject("Failed to fetch product catalog");
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
                resolve([
                    {productID: 2, name: "Lavender Vanilla Oil (20ml)", reviewComment: "The scent is perfect for bedtime candles! Can't wait to make more candles with this!", reviewScore: 5}, 
                    {productID: 2, name: "Lavender Vanilla Oil (20ml)", reviewComment: "I could barely smell the vanilla scent, so I was disappointed.", reviewScore: 3}
                ]);
            } else {
                // reject by returning a failed string for the productID
                reject(`Failed to fetch reviews for product ID ${productID}`);
            }
        }, 1500);
    });
}