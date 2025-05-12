import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Threads from "@/components/ui/threads";
import React from "react";

const LoginSection = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
        <form className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-xs w-[800px] h-auto rounded-[24px] shadow-2xl z-10 px-10 pb-10">
          <h1 className="text-3xl text-center py-4">Register</h1>
          <div className="flex flex-col gap-4 py-4">
            <label>Email</label>
            <Input type="email" placeholder="Email" />
          </div>
          <div className="flex flex-col gap-4 py-4">
            <label>Password</label>
            <Input type="password" placeholder="Password" />
          </div>
          <Button className="w-full mt-4">Login</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginSection;
