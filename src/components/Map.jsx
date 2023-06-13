import React from "react";

const Map = () => {
  return (
    <div className="w-full bg-bgSoft">
      <div className="mainContainer  px-3">
        <div className="w-full ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1573147.7480448114!2d-74.84628175962355!3d41.04009641088412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25856139b3d33%3A0xb2739f33610a08ee!2s1616%20Broadway%2C%20New%20York%2C%20NY%2010019%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1646760525018!5m2!1str!2str"
            allowFullScreen
            className="w-full h-[600px] grayscale"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
