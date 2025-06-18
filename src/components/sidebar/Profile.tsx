"use client";

import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <section className="flex flex-col items-center gap-4">
      <figure className="relative h-24 w-24">
        <Image src={"/globe.svg"} alt="user-image" fill={true} />
      </figure>

      <div className="text-lg capitalize tracking-wide text-white dark:text-black">
        TODO Dashboard
      </div>

      <hr className="w-full" />
    </section>
  );
};

export default Profile;
