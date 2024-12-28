import React from "react";
import Cart from "./Cart";

const CartPage1 = () => {
  return (
    <div className="w-[1232px] h-[630px] bg-mywhite mx-auto mt-[80px] grid grid-cols-3 gap-3  ">
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
