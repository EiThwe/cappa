import React from "react";

import FiveStar from "./FiveStar";
import comment from "../assets/icons/comment.svg";
import FormInput from "./FormInput";
import Textarea from "./Textarea";
import Button from "./Button";

const SinglePostLeft = () => {
  return (
    <div className="md:w-[68%] w-full flex flex-col gap-5 items-start">
      <div className="w-full">
        <img
          src="https://duruthemes.com/demo/html/cappa/demo2-dark/img/restaurant/2.jpg"
          alt="image"
          className="w-full"
        />
      </div>

      <h3 className=" font-gilda text-[32px] text-white mt-2">
        Historic restaurant renovated
      </h3>

      <p className="text-secondary text-base">
        Quisque pretium fermentum quam, sit amet cursus ante sollicitudin vel.
        Morbi consequat risus consequat, porttitor orci sit amet, iaculis nisl.
        Integer quis sapien neceli ultrices euismod sit amet id lacus. Sed a
        imperdiet erat. Duis eu est dignissim lacus dictum hendrerit quis vitae
        mi. Fusce eu nulla ac nisi cursus tincidun. Interdum et malesuada fames
        ac ante ipsum primis in faucibus. Integer tristique sem eget leo
        faucibus porttitor.
      </p>

      <p className="text-secondary text-base">
        Nulla vitae metus tincidunt, varius nunc quis, porta nulla. Pellentesque
        vel dui nec libero auctor pretium id sed arcu. Nunc consequat diam id
        nisl blani dinisim. Etiam commodo diam dolor, at scelerisque sem finibus
        sit amet. Curabitur id lectus eget purus finibus laoreet.
      </p>

      <div className=" sm:h-[180px] h-[250px] w-full bg-bgSoft relative flex">
        <div className="w-full h-full flex flex-col items-start justify-center sm:px-10 px-5 absolute top-0 left-0 z-[2] gap-5">
          <p className="text-secondary text-base leading-[26.3px]">
            Nulla facilisi. Sedeuter nunc vouta miss mollis sapien vel, conseyer
            tureution yer vintane in libero semper. Quisque ravida eros ut
            turpis interdum ornare. Inter miss they adama seder a imerdie fames
            ac ante ipsum primis in faucibus.
          </p>
          <div className="flex items-center gap-5">
            <div className="w-10 h-[1px] bg-primary" />
            <h6 className="text-base text-primary">Micheal Martin</h6>
          </div>
        </div>
        <div className="absolute bottom-5 right-5">
          <div className="w-[100px] h-[100px] -z-[2] ">
            <img
              src={comment}
              alt="comment"
              className="w-full h-full opacity-5"
            />
          </div>
        </div>
      </div>

      <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-5 mt-5">
        <div>
          <img
            src="https://duruthemes.com/demo/html/cappa/demo2-dark/img/restaurant/1.jpg"
            alt="image-1"
            className="w-full"
          />
        </div>
        <div>
          <img
            src="https://duruthemes.com/demo/html/cappa/demo2-dark/img/restaurant/3.jpg"
            alt="image-1"
            className="w-full"
          />
        </div>
      </div>

      <p className="text-secondary text-base leading-[26.3px]">
        Design pretium fermentum quam, sit amet cursus ante sollicitudin vel.
        Morbi consequat risus consequat, porttitor orci sit amet, iaculis nisl.
        Integer quis sapien neceli ultrices euismod sit amet id lacus. Sed a
        imperdiet erat. Duis eu est dignissim lacus dictum hendrerit quis vitae
        mi. Fusce eu nulla ac nisi cursus tincidun. Interdum et malesuada fames
        ac ante ipsum primis in faucibus. Integer tristique sem eget leo
        faucibus porttitor.
      </p>

      <div className="mt-5 flex justify-center items-start gap-5">
        <div className="min-w-[100px] min-h-[100px] rounded-full overflow-hidden">
          <img
            src="https://duruthemes.com/demo/html/cappa/demo2-dark/img/team/3.jpg"
            alt="profile"
            className="w-[100px]"
          />
        </div>
        <div className="flex flex-col items-baseline gap-3 w-full">
          <FiveStar />
          <div className="flex gap-3 items-center">
            <h6 className=" font-gilda text-white text-[20px]">
              Robert Martin
            </h6>
            <p className="text-[12px] text-secondary">29 October 2023</p>
          </div>
          <p className="text-secondary text-base leading-[26.3px]">
            Restaurant ultricies nibh non dolor maximus sceleue inte molliser
            rana neque nec tempor. Interdum et malesuada fames ac ante ipsum
            primis in faucibus.
          </p>
          <button className="flex items-center mt-3">
            <p className="text-[14px] text-primary">Reply</p>
            <i className="ti-back-left text-primary"></i>
          </button>
        </div>
      </div>

      <div className="w-full pt-8">
        <h6 className=" font-gilda text-[20px] text-white mb-5">
          Leave A Reply
        </h6>
        <div className=" form grid md:grid-cols-2 grid-cols-1 gap-6 mb-5 md:w-[70%] w-full">
          <FormInput placeholder="Full Name*" />
          <FormInput type="email" placeholder="Email Address*" />
          <Textarea placeholder="Your Comment*" />
        </div>
        <Button width="w-[170px]">SEND COMMENT</Button>
      </div>
    </div>
  );
};

export default SinglePostLeft;
