import React from "react";
import "./Contactus.css";
import { Input, Button, Label } from "../../components";
import {
  BiLogoWhatsapp,
  BiPhone,
  BiMailSend,
} from "react-icons/bi";
function Contactus() {
  return (
    <>
      <div className="marginn"></div>
      <main className="contactus">
        <section className="contact-del">
          <h1>Contact Us</h1>
          <p>
            Need to get in touch with us? Either fill out the form with your
            inquiry or through our social media details below
          </p>
          <div className="social-media">
            <p>
              <BiLogoWhatsapp />: +2347018647050
            </p>
            <p>
              <BiPhone />: 07018647050
            </p>
            <p>
              <BiMailSend />: chukwujachike175@gmail.com
            </p>
          </div>
        </section>
        <section className="form">
          <form action="">
            <div className="hold-field">
              <div>
                <Label text={"Fullname"} />
                <Input />
              </div>{" "}
              <div>
                <Label text={"Phone number"} />
                <Input type={"number"} />
              </div>
            </div>
            <Label text={"Email"} />
            <Input type={"email"} />
            <Label text={"What can we help you with"} />
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <div className="hold-btn">
              <Button disabled={true} text={"Submit"} />
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default Contactus;
