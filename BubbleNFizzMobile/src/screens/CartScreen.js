import React, { useContext, useEffect, useState } from "react";
import { View, Text, Button, ScrollView } from "react-native";
import CartCard from "../components/CartCard";
import { UserContext } from "../providers/UserProvider";
import api from "../../config/api";

const Cart = () => {
  const user = useContext(UserContext);
  const [carts, setCarts] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    api
      .get(`shopping/getusercart?user_id=${user.user.id}`)
      .then((response) => {
        setCarts(response.data);
        // console.log(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
    // fetch(`shopping/getusercart?user_id=${user.user.id}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     const cartItems = data;
    //     let tempTotal = 0;
    //     let tempQuantity = 0;
    //     cartItems.forEach((item) => {
    //       tempTotal += Number(item.cart_price);
    //       tempQuantity += Number(item.cart_quantity);
    //     });
    //     setSubTotal(tempTotal);
    //     setTotalQuantity(tempQuantity);
    //     setCarts(cartItems);
    //   })
    //   .catch((error) => {
    //     console.error(error.response);
    //   });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flexGrow: 1 }}>
        <Text>My Cart</Text>
        {/* {carts.map((item, index) => (
        <CartCard
        cart={item}
        key={index}
        setSubTotal={setSubTotal}
        setTotalQuantity={setTotalQuantity}
        totalQuantity={totalQuantity}
        subTotal={subTotal}
        />
      ))} */}
        {carts.map((item, index) => {
          console.log("ito yung items mo", item);
          return (
            <CartCard
              cart={item}
              key={index}
              setSubTotal={setSubTotal}
              setTotalQuantity={setTotalQuantity}
              totalQuantity={totalQuantity}
              subTotal={subTotal}
            />
          );
        })}
        <Text>Order Summary</Text>
        <Text>Items: {totalQuantity}</Text>
        <Text>Sub Total: Php {subTotal}.00</Text>
        <Text>Discount: Free Shipping</Text>
        <Text>Total: ₱{subTotal}</Text>
        <Button title="Checkout" />
      </ScrollView>
    </View>
  );
};
export default Cart;
