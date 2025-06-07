import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Threads from "@/components/ui/threads";
import React from "react";

const LoginSection = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
        <form className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#262626]/20 backdrop-blur-xs w-[800px] h-auto rounded-[24px] shadow-2xl z-10 px-10 pb-10">
          <h1 className="text-3xl text-center py-4 text-[#9EFF00]">Sign In</h1>
          <div className="flex flex-col gap-4 py-4">
            <label>Email</label>
            <Input
              type="text"
              className="border-0 border-b-2 rounded-none px-0"
              placeholder="Your Email"
            />
          </div>
          <div className="flex flex-col gap-4 py-4">
            <label>Password</label>
            <Input
              type="text"
              className="border-0 border-b-2 rounded-none px-0"
              placeholder="Your Password"
            />
          </div>
          <Button variant="primary" className="w-full mt-4">
            Login
          </Button>
          <Button variant="secondary" className="w-full mt-4">
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginSection;
