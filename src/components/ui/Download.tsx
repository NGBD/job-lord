import React from "react";

function Download() {
  return (
    <div className="w-full md:h-[200px] h-[300px] bg-[#086E3B] flex flex-col items-center justify-center">
      <div className="flex flex-col w-[90%] justify-center items-center gap-5 md:gap-0">
        <div className="text-[17px] text-white">Contact us</div>
        <div className="text-[30px] text-white font-bold text-center">
          {" "}
          Tìm kiếm giải pháp Fulfilllment toàn diện?{" "}
        </div>
        <div className="flex w-full md:justify-end justify-center pt-3">
          <button className="h-[46px] bg-white text-[#086E3B] font-bold px-10 uppercase">
            Tải Bảng giá
          </button>
        </div>
      </div>
    </div>
  );
}

export default Download;
