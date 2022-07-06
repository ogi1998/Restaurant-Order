export const addToCart = async (cart) => {
        const response = await fetch("http://localhost:5000/transaction", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cart),
        });
  
        const data = await response.json();
        return data;
};
  