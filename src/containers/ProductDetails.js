import React from 'react'
import '../index.css'
import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProducts,removeSelectedProducts } from './redux/actions/productAction'

function ProductDetails() {
  const product = useSelector((state) =>state.product)
  const {image,title,category,price,description} = product
  const {productId} = useParams()
  const dispatch = useDispatch()

  console.log(productId)

  const fetchProductDetails = async () =>{
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
    .catch((err) =>{
      console.log("Error",err)
    });
    dispatch(selectedProducts(response.data))
  }
  useEffect(() =>{
    if(productId && productId !== "")
    fetchProductDetails()
    return () =>{
      dispatch(removeSelectedProducts())
    }
  },[productId])
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt='img' />
              </div>
              <div className="column r p">
                <h1>{title}</h1>
                <h2>
                  <a href='#' className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetails