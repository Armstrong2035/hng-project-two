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

        border: "1px solid grey",
      }}
    >
      <div style={{ width: "80px", height: "30px" }}>
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
