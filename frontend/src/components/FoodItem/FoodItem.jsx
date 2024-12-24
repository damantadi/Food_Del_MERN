import  { useContext} from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../context/StoreContext';
import { toast } from 'react-toastify';

const FoodItem = ({id,name,price,description,image}) => {

    const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);
     const itemInCart = cartItems?.[id];
    const handleAddToCart = () => {
        addToCart(id);
        toast.success(`${name} added to cart`);
      };
    
      const handleRemoveFromCart = () => {
        removeFromCart(id);
        toast.warn(`${name} removed from cart`);
      };
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-image' src={url+'/images/'+image} alt="" />
            {
                 !itemInCart ? <img className='add' onClick={handleAddToCart} src={assets.add_icon_white}/>: 
                <div className="food-item-counter">
                    <img style={{cursor:'pointer'}} onClick={handleRemoveFromCart} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img style={{cursor:'pointer'}} onClick={handleAddToCart}  src={assets.add_icon_green} alt="" />
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}

export default FoodItem
