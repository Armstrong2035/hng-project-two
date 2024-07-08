"use client";

import Image from "next/image";
import Timbu from "../../public/utility-images/Timbu.png";

export default function TimbuStore() {
  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "#F8F8F8",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div>
          <Image
            src={Group1}
            layout="responsive"
            width={20}
            height={20}
            objectFit="contain"
          />
        </div>
      </div>
    </>
  );
}
