import { useEffect, useState } from "react";
import "./styles.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);


  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count * 20}`);
      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, [count]);

  if (loading) {
    return <div>Loading data...Please wait</div>
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {
          products && products.length > 0 && (
            products.map(item => (
              <div key={item.id} className="product">
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          )
        }
      </div>
      <div className="button-container">
        <button onClick={() => setCount(count + 1)}>load more products</button>
      </div>
    </div>
  )
}