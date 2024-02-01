// import React from "react";
import "./sort.styles.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector, sortSelector } from "../../redux/productreducer";
import { actions } from "../../redux/productreducer";
// import { selectProductsArray } from "../../redux/products/product.selector";
// import { selectIsSorted } from "../../redux/products/product.selector";
// import { selectSortedProds } from "../../redux/products/product.selector";
// import {
//   sortProduct,
//   unsortProduct,
// } from "../../redux/products/product.action";

function Sort() {
  // const products = useSelector(selectProductsArray);
  // const sortedProds = useSelector(selectSortedProds);
  const isSorted = useSelector(sortSelector);

  const dispatch = useDispatch();
  // const isSorted = false;
  const handelSort = () => {
    if (!isSorted) {
      dispatch(actions.toggleIsSorted());
      toast("Products Sorted!");
    } else {
      dispatch(actions.toggleIsSorted());
      toast("Products Unsorted!");
    }
  };

  return (
    <div onClick={handelSort} className="sort-btn">
      {isSorted ? <p>X Sort by price</p> : <p>Sort by price</p>}
    </div>
  );
}

export default Sort;
