"use client";

import Image from "next/image";
import Timbu from "../../public/utility-images/Timbu.png";

export default function TimbuStore() {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#F8F8F8",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px 0",
      }}
    >
      <div style={{ width: "124px", height: "57px" }}>
        {" "}
        {/* Ensure the size is set here */}
        <Image
          src={Timbu}
          layout="responsive"
          width={50}
          height={50}
          objectFit="contain"
        />
      </div>
    </div>
  );
}
