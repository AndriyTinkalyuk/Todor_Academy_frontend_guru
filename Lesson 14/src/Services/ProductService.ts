export default class ProductService {
    static async getProducts() {
          try {
            const response = await fetch("/items.json");
            const data = await response.json();
            if (response.ok) {
               return data;
            } else {
                throw new Error("Error get data :c");
            }
        } catch (error) {
            throw error;
            console.error(error);
        }
    }

    
}