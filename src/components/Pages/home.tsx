import React, { useEffect, useState } from "react";

const Home: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <main>
      <h2>Home</h2>
      <p>Products from FakeStore API:</p>
      <div className="card-grid">
        {products.slice(0, 6).map((prod) => (
          <div key={prod.id} className="card">
            <h4>{prod.title}</h4>
            <p>{prod.description.slice(0, 60)}...</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
