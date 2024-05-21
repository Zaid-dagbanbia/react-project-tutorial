import React from "react";

export default function Gallery() {
  return (
    <div id="gallery" className="max-w-[1140px] m-auto w-full px-4 py-16">
      <h2 className="text-center text-gray-700 p-4">Gallery</h2>
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1589007758669-c58f38192d28?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="/"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1592555059503-0a774cb8d477?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D"
            alt="/"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1611441085268-7674a97a0905?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D"
            alt="/"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://media.istockphoto.com/id/1144153140/de/foto/eine-asiatische-frau-mit-wundersch%C3%B6nem-blick-auf-mu-koh-angthong-samui-island-surat-thani.jpg?s=2048x2048&w=is&k=20&c=UIhfuHkm6lEGpF-Yi6zOb2x0OFwMtq_Y_h_nU8MZJyE="
            alt="/"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
}
