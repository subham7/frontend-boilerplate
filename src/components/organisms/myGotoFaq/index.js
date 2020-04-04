import React from "react"
import { Collapse } from "antd"

const { Panel } = Collapse

const myGotofaq = props => {
  const style = {
    container: { marginTop: "80px" },
    infoHeading: {
      fontSize: "3em",
      color: "#1E4ED6",
      textAlign: "center"
    }
  }

  return (
    <div style={style.container} id="faq">
      <h1 style={style.infoHeading}>FAQs</h1>
      <Collapse>
        <Panel header="What is MyGoto?">
          <p>
            MyGoto is a directory of Indian businesses (restaurants, salons,
            small businesses offering your favorite product or service) that
            offer online gift cards for purchase. It’s our hope that by
            providing this resource, we’ll be able to mobilize loyal customers
            to provide much-needed support for their favorite places in town. We
            let you buy a “gift card” of your place or add a place if it’s not
            there in the directory.
          </p>
        </Panel>
        <Panel header="Why isn’t my favorite business on your site?">
          <p>
            Please help us add your GoTo places in your City / Locality. We're
            open to adding more small business categories if everyone wishes to
            support their GoTo places.
          </p>
        </Panel>
        <Panel header="How else can I support our local businesses beyond purchasing a gift card?">
          <p>
            Deliveries and pickups are a great option when it comes to
            food-delivery & groceries. However, we’re trying to support as many
            businesses as possible to come online and sell their products &
            services via apps. Let us know if you or your friend needs support
            coming online. Tip generously if you can (even for delivery/pickup)
            since employees are doing extra work and putting their health at
            risk. Encourage your friends to get involved. Share with your
            friends and tell them that they can support too. Everyone who comes
            forward to support is doing a great help to each of the listed
            businesses.
          </p>
        </Panel>
        <Panel header="Is this just for a particular city in India? Can you do this for my city?">
          <p>
            As Indian nationals, we started this project for any city that wants
            to support its local businesses. As a loyal Consumer, you can add
            your GoTo place in your locality and spread the word.
          </p>
        </Panel>
        <Panel header="Who built this? And why?">
          <p>
            We’re the same team-building GoFinito.com, a SAAS platform for
            retail businesses. We saw the pains of the retail businesses we’re
            in touch with and thought this might be the thing with many small
            businesses, so we thought “what if we help them somehow now?” and
            they could give their products/services after the lockdown. We got
            motivated looking at other such platforms (saveourfaves) across the
            globe and decided to do it immediately. You can find more about this
            by writing to us at info@mygoto.in
          </p>
        </Panel>
        <Panel header="Why isn’t my business showing up in your search results?">
          <p>
            We're open to adding more small business categories if everyone
            wishes to support their GoTo places.
          </p>
        </Panel>
        <Panel header="How does this work?">
          <p>
            Each loyal consumer gets a gift card number and a transaction ID at
            the end of their purchase. All you need to do is verify either of
            these numbers when the consumer buys something from you. You’ll then
            be able to look at the value of the card and help the consumer
            redeem the amount.
          </p>
        </Panel>
        <Panel header="When will consumers start redeeming the gift card?">
          <p>
            Consumers will start redeeming as soon as the lockdown ends. You’ll
            get all the proceeds from the purchases as soon as we verify your
            business.
          </p>
        </Panel>
        <Panel header="How can I take my business online?">
          <p>
            We help you set up an online shop with your products and service
            offerings for no cost at all. Feel free to fill the form here and
            we’ll get back to you with a plan of taking your business online.
          </p>
        </Panel>
        <Panel header="How can I encourage customers to buy gift cards?">
          <p>
            Times are tough and even the biggest of the businesses are taking a
            hit. The only difference is the scale at which they need help.
            Bigger businesses need institutional and Govt. aides to survive and
            get up. Whereas small places can be helped by anyone - close
            friends, family, and most important loyal customers. Don’t be shy,
            register your business here and encourage people to buy a gift card.
            They can come and take services later. So you are technically asking
            for help and giving them your services later after lockdown. People
            are looking for ways they can support their favorite businesses, so
            don’t be afraid to let them know that gift cards will help. Reach
            out to your community on Facebook, Twitter, and Instagram, and use
            your email list to get in touch with your customers. Ask them to
            consider buying a gift card for one month of spending to help you
            weather this storm and keep paying staff so that you can continue
            offering great food/coffee/services. for years to come.
          </p>
        </Panel>
      </Collapse>
    </div>
  )
}

export default myGotofaq
