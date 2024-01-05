import React from "react";
import { useParams } from "react-router-dom";

//components
import { useFilteredProducts } from "../../Hooks/UseFilteredProducts";

//images
import Spinner from "../../assets/spinner.svg";

// Css
import styles from "./FilteredProducts.module.css";

const FilteredProducts = () => {
  const { categoryName, categoryId } = useParams();
  const {
    data: filteredProducts,
    isLoading,
    isError,
  } = useFilteredProducts(categoryName, categoryId);

  console.log("categoryName", categoryName);
  console.log("categoryId", categoryId);
  console.log("filteredProducts", filteredProducts);

  if (isLoading) {
    return (
      <div className={styles.spinnerContainer}>
        <img src={Spinner} width={250} height={350} />
      </div>
    );
  }

  if (isError) {
    return <h1>Error fetching data</h1>;
  }

  return (
    <>
      <h1 className={styles.header}>{categoryName} Products</h1>
      <div className={styles.allProducts}>
        {filteredProducts &&
          filteredProducts?.map((product) => (
            <div key={product.id} className={styles.card}>
              <img
                src={product.images}
                alt={product.title}
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: 10,
                }}
              />
              <div className={styles.titleWithPrice}>
                <h3>{product.title}</h3>
                <h4>{`${product.price} $`}</h4>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default FilteredProducts;
