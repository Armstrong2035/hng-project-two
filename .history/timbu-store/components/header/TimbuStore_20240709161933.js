"use client";

import Image from "next/image";
import Timbu from "../../public/utility-images/Timbu.png";
import Link from "next/link";

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
        border: "1px solid #BCBABA",
        margin: "10px",
      }}
    >
      <Link href={"/"}>
        <div style={{ width: "80px", height: "30px" }}>
          <Image
            src={Timbu}
            layout="responsive"
            width={50}
            height={50}
            objectFit="contain"
          />
        </div>
      </Link>
    </div>
  );
}
