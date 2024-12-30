import React from "react";
import Cart from "./Cart";

const CartPage1 = () => {
  return (
    <div className="w-full md:w-[1234px]  mx-auto px-4 md:px-0 h-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 md:mt-[70px]">
      {/* cart-1*/}

      <Cart
        id="1"
        image="/images/cartpost/cart1.png"
        h2="Travel"
        h4="13 March 2023"
        heading="8 Rules of Travelling In Sea You Need To Know"
        para="Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs "
        button="Read More..."
      />
      {/* cart-2 */}
      <Cart
        id="2"
        image="/images/cartpost/cart2.png"
        h2="Development"
        h4="11 March 2023"
        heading="How to build strong portfolio and get a Job in UI/UX"
        para="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from "
        button="Read More..."
      />

      {/* cart-3 */}

      <Cart
        id="3"
        image="/images/cartpost/cart3.png"
        h2="Sports"
        h4="10 March 2023"
        heading="How to Be a Professional Footballer in 2023"
        para="Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive"
        button="Read More. .."
      />
    </div>
  );
};

export default CartPage1;
