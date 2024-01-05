import React from "react";
import { Link } from "react-router-dom";

//Hooks
import { UseCategoriesData } from "../../Hooks/UseCategoriesData";

//images
import Spinner from "../../assets/spinner.svg";

// Css
import styles from "./Categories.module.css";

const Categories = () => {
  const { data: categories, isLoading, isError } = UseCategoriesData();

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
      <h1 className={styles.header}>Categories</h1>
      <div className={styles.allCategories}>
        {categories &&
          categories?.map((category) => (
            <Link
              key={category.id}
              className={styles.card}
              to={`/products/${category.name}/${category.id}`}
            >
              <img
                src={category.image}
                alt={category.name}
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: 10,
                }}
              />
              <h3>{category.name}</h3>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Categories;
