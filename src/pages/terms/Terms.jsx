import React from "react";
import "./Terms.css";
import image from "../../assets/terms.png";

function Terms() {
  const terms = [
    {
      head: "1. Acceptance of Terms",
      body: ["By accessing and using Codeable, you agree to comply with and be bound by these Terms of Service."],
    },
    {
      head: "2. User Conduct",
      body: [
        "a. You agree to use the Platform in a lawful and respectful manner.",

        "b. You may not post, transmit, or distribute any content that violates applicable laws or is harmful, threatening, or discriminatory.",
      ],
    },
    {
      head: "3. Course Content",
      body: [
        "a. The courses provided on the Platform are for educational purposes only.",

        "b. You may not reproduce, distribute, or modify the course content without the explicit consent of [Your Company Name].",
      ],
    },
    {
      head: "4. No User Accounts Required",
      body: ["User accounts are not necessary to access or use the Platform."],
    },
    {
      head: "5. Changes to Terms",
      body: [
        "We may update these Terms of Service. You will be notified of changes, and continued use of the Platform signifies acceptance of the revised terms.",
      ],
    },
  ];

  //   {head:"", body:[]},

  // 5. Liability and Disclaimers

  // a. [Your Company Name] is not responsible for the accuracy of the course content.

  // b. We disclaim liability for any harm, damage, or losses incurred through the use of the Platform.
  return (
    <>
      <div className="marginn"></div>
      <main className="terms-contain">
        <section className="terms-inf0">
          <h3>Terms of Service</h3>
          <article>
            {terms.map((value) => {
              return (
                <div>
                  <h3>{value.head}</h3>
                  <section>
                    {value.body.map((item) => {
                      return <li>{item}</li>;
                    })}
                  </section>
                </div>
              );
            })}
          </article>
        </section>
        <section className="terms-img">
          <img src={image} alt="" />
        </section>
      </main>
    </>
  );
}

export default Terms;
