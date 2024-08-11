import Image from "next/image";
import React from "react";

const ProductCard = ({
  img,
}) => {
  return (
    <div className="bannerCard_container">
      <div>
        <Image className="bannerCardImage_container" src={img} width={400} height={300} alt="/" />
      </div>
    </div>
  );
};

export default ProductCard;
