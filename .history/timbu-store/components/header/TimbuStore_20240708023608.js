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
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        padding: "10px 0", // Add some padding for spacing
      }}
    >
      <div style={{ width: "20px", height: "20px" }}>
        {" "}
        {/* Ensure the size is set here */}
        <Image
          src={Timbu}
          layout="responsive"
          width={20}
          height={20}
          objectFit="contain"
        />
      </div>
    </div>
  );
}
