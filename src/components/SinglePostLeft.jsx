import React from "react";

const SinglePostLeft = () => {
  return (
    <div className="w-[68%] flex flex-col gap-5 items-start">
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
      <div className=" h-[150px] w-full bg-bgSoft relative flex">
        <div className="w-full h-full flex items-center px-10 absolute top-0 left-0 z-[2]">
          <p className="text-secondary text-base leading-[26.3px]">
            Nulla facilisi. Sedeuter nunc vouta miss mollis sapien vel, conseyer
            tureution yer vintane in libero semper. Quisque ravida eros ut
            turpis interdum ornare. Inter miss they adama seder a imerdie fames
            ac ante ipsum primis in faucibus.
          </p>
        </div>
        <div className="absolute bottom-5 right-5">
          {/* <span className="flaticon-"></span> */}
          <div className="w-[100px] h-[100px] -z-[2] bg-green-300"></div>
        </div>
      </div>
    </div>
  );
};

export default SinglePostLeft;
