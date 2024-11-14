import React from 'react';
import "./Page1.css";

interface ProductProps {
  product: {
    name: string;
  };
}

const Page1Card1: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
      </div>
    </div>
  );
}

export default Page1Card1;
