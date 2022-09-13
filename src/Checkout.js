// import React from "react";
// import "./Checkout.css";
// import "./CheckoutProduct.css";
// import { useStateValue } from "./StateProvider";
// import Subtotal from "./Subtotal";
// import "./Subtotal.css";

// const Checkout = ({ id, title, image, price, rating }) => {
//   const [{ basket }, dispatch] = useStateValue();
//   const removeBasket = (ele) => {
//     dispatch({
//       type: "REMOVE_FROM_BASKET",
//       id: ele.id,
//     });
//   };
//   return (
//     <div className="checkout">
//       <div className="checkout__left">
//         <img
//           className="checkout__ad"
//           src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
//           alt=""
//         />

//         {/* <div>
//           <h3>Hello, {user?.email}</h3>
//           <h2 className="checkout__title">Your shopping Basket</h2>

//           {basket.map((item) => (
//             <CheckoutProduct
//               id={item.id}
//               title={item.title}
//               image={item.image}
//               price={item.price}
//               rating={item.rating}
//             />
//           ))}
//         </div> */}

//         {basket.length >= 1
//           ? basket.map((ele) => {
//               return (
//                 <div className="checkoutProduct">
//                   <img className="checkoutProduct__image" src={ele.image} />

//                   <div className="checkoutProduct__info">
//                     <p className="checkoutProduct__title">{ele.title}</p>
//                     <p className="checkoutProduct__price">
//                       <small>$</small>
//                       <strong>{ele.price}</strong>
//                     </p>
//                     <div className="checkoutProduct__rating">
//                       {Array(ele.rating)
//                         .fill()
//                         .map((_, i) => (
//                           <p>🌟</p>
//                         ))}
//                     </div>

//                     <button onClick={() => removeBasket(ele)}>
//                       Remove from Basket
//                     </button>
//                   </div>
//                   <div className="checkout__right"></div>
//                 </div>
//               );
//             })
//           : "your cart is empty"}
//       </div>
//       <div className="checkout__right">
//         <Subtotal />
//       </div>
//     </div>
//   );
// };

// export default Checkout;
import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
