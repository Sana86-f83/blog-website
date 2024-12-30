import React from "react";
import Cart from "./Cart";

const Cartpage2 = () => {
  return (
    <div className="w-full px-2 md:px-0 h-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 md:mt-[70px]">
      {/* cart-4*/}

      <Cart
        id="4"
        image="/images/cartpost/cart4.png"
        h2="Travel"
        h4="13 March 2023"
        heading="Train Or Bus Journey?Which one suits?"
        para="The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person  "
        button="Read More..."
      />
      {/* cart-5*/}
      <Cart
        id="5"
        image="/images/cartpost/cart5.png"
        h2="Development"
        h4="11 March 2023"
        heading="Best Website to research for your  next project"
        para="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs "
        button="Read More..."
      />

      {/* cart-6 */}

      <Cart
        id="6"
        image="/images/cartpost/cart6.png"
        h2="Sports"
        h4="10 March 2023"
        heading="How to Be a Dancer in 2023 with proper skills?"
        para="Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive "
        button="Read More. .."
      />
    <div className="w-full md:w-[1234px] px-0 md:px-0 h-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 md:mt-[70px]">
    {/* cart-7*/}

        <Cart
          id="7"
          image="/images/cartpost/cart7.png"
          h2="Sports"
          h4="13 March 2023"
          heading="Who is the best singer on chart?Know him?"
          para="chart by Billboard which ranks the all-time greatest artists based on their performance on the weekly Billboard Hot 100 and  "
          button="Read More. .."
        />
        {/* cart-8 */}

        <Cart
          id="8"
          image="/images/cartpost/cart8.png"
          h2="Sports"
          h4="11 March 2023"
          heading="How to start export import business from home?"
          para="Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive"
          button="Read More. .."
        />
        {/* cart-9*/}

        <Cart
          id="9"
          image="/images/cartpost/cart9.png"
          h2="Sports"
          h4="10 March 2023"
          heading="Make some drinks with chocolates chocolate and milk"
          para="Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive"
          button="Read More. .."
        />
      </div>
    </div>
  );
};

export default Cartpage2;
