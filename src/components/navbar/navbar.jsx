import { useState } from 'react';
import { CartIcon } from "../cartIcon/cart-icon.component";
import "./navbar.css";
import { AddProduct } from "../addProduct/AddProduct";
import { Modal } from "antd";
import { toast } from "react-toastify";
import { actions } from '../../redux/productreducer';
import { useDispatch } from 'react-redux';
export const Navbar = ()=> {
      const [show, setShow] = useState(false);
      const [title, setTitle] = useState("");
      const [description, setdescription] = useState("");
      const [price, setPrice] = useState("");
      const [rating, setRating] = useState("");
      const [image, setImage] = useState("");
      const dispatch = useDispatch();
      const handleAddProduct = () => {
       setShow(true);
      }
      const handleOk = () => {
        setShow(false);
      }
      const handleCancel = () => {
        setShow(false);
      }
      const handelAddProduct = () => {
        const newProduct = {
          title,
          description,
          price: Number(price),
          rating: Number(rating),
          images: [image],
          id: Date.now(),
        };
    
        dispatch(actions.addProduct({
          title,
          description,
          price: Number(price),
          rating: Number(rating),
          images: [image],
          id: Date.now(),
        }));
        toast("Product Added TO db");
        // navigate("/allProds");
      };
      
      return(
        <>
        <div style={{'display':'flex',
        // 'width':'100%',
        'backgroundColor':'blue',
        'justifyContent':'space-between',
        'padding': '12px'
        }}>
            <div style = {{'display':'flex',
            'alignItems':'center',
            'padding':'20px'}}>
                <h2 style={{'marginInline':'20px'}}>BAZAAR</h2>
                <h3 style={{'cursor':'pointer'}} onClick={handleAddProduct}>Add Product</h3>
                
            
            </div>
            <div style={{'display':'flex',
            'padding':'15px',
            
        }}>
                <CartIcon/>
                
                <div className="navItem">
            <img
              className="avatar"
              src="https://cdn-icons-png.flaticon.com/512/547/547420.png"
              alt=""
              
            />
            <span className="name">Raghava</span>
          </div>
            </div>
        </div>
        <Modal
              open={show}
              onOk={handleOk}
              onCancel={handleCancel}
              width={1000}>
              <div className="form-container">
                <div className="add_prod_title">Add Product</div>
                <input
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setdescription(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Rating"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Image Url"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
                <button className="add-prod-button" onClick={handelAddProduct}>
                  Add Product
                </button>
              </div>

            </Modal>
            </>
      )
}