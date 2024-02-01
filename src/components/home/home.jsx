import Products from "../products/products.component";
import "./home.styles.css";
import { ToastContainer } from "react-toastify";
import { Navbar } from "../navbar/navbar";
import Sort from "../sort/sort.component";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchproducts } from "../../redux/productreducer";
export const Home = () => {  
  // const dispatch = useDispatch;
  // useEffect(() => {   
  //   console.log("inside use Effect"); 
  //   dispatch(fetchproducts());
  // }, []);
  return (
    <div className="home-container">
      <Navbar className="nav"/>
      <Sort />
      <Products />
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}


