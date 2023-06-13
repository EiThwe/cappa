import React from "react";
import FormInput from "./FormInput";
import Textarea from "./Textarea";
import Button from "./Button";

const ContactFormSection = () => {
  return (
    <section className="contact-form-section w-full bg-bgSoft">
      <div className="mainContainer sm:px-14 md:px-10 lg:px-0 px-3">
        <div className="row flex md:flex-row flex-col md:gap-0 gap-10">
          <div className="col md:w-[50%] w-full">
            <h5 className="small-heading text-[24px] leading-[30px] font-gilda text-white mb-5">
              The Cappa Luxury Hotel
            </h5>
            <p className="para text-base text-secondary mb-5">
              Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue
              the aucan ligula. Orci varius natoque penatibus et magnis dis
              parturient monte nascete ridiculus mus nellentesque habitant
              morbine.
            </p>
            <div className="flex flex-col gap-5 sm:w-[50%] w-full">
              <div className=" reservations flex items-center gap-3">
                <div className="icon">
                  <span className="flaticon-call text-primary text-[38px]"></span>
                </div>
                <div className="text">
                  <p className="text-secondary mb-1 text-base leading-[26.3px]">
                    Reservations
                  </p>
                  <p className="phone-number text-primary text-2xl ">
                    855 100 444
                  </p>
                </div>
              </div>
              <div className=" reservations flex items-center gap-3">
                <div className="icon">
                  <span className="flaticon-envelope text-primary text-[38px]"></span>
                </div>
                <div className="text">
                  <p className="text-secondary mb-1 text-base leading-[26.3px]">
                    Email Info
                  </p>
                  <p className="email text-primary text-2xl ">
                    info@luxuryhotel.com
                  </p>
                </div>
              </div>
              <div className=" reservations flex items-center gap-3">
                <div className="icon">
                  <span className="flaticon-location-pin text-primary text-[38px]"></span>
                </div>
                <div className="text">
                  <p className="text-secondary mb-1 text-base leading-[26.3px]">
                    Address
                  </p>
                  <p className="phone-number text-secondary text-base ">
                    1616 Broadway NY, New York 10001 United States of America
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col md:w-[50%] w-full md:ml-[8.33%]">
            <h5 className="small-heading text-[24px] leading-[30px] font-gilda text-white mb-5">
              Get in touch
            </h5>
            <div className=" form grid md:grid-cols-2 grid-cols-1 gap-6 w-full mb-5">
              <FormInput placeholder="Your Name*" />
              <FormInput type="email" placeholder="Your Email*" />
              <FormInput placeholder="Your Number*" />
              <FormInput placeholder="Subject*" />
              <Textarea placeholder="Message*"/>
            </div>
            <Button/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
