"use client";
import React from "react";
import { useScrollTop } from "../../../../hooks/use-scrool-top";
import { cn } from "@/lib/utils";
import { Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/providers/mode-toggler";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

const Navbar = () => {
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center w-full justify-between p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Link href={"/"} className="flex items-center gap-2 cursor-pointer">
        <div className="p-2 rounded-xl font-bold dark:bg-primary/20 bg-primary/5">
          <Brain />
        </div>
        <span className="text-xl font-bold">Second Brain</span>
      </Link>
      <div className=" flex gap-4 items-center">
        {/* if loading */}
        <AuthLoading>
          <Spinner />
        </AuthLoading>

        {/* if unAuthenticated */}
        <Unauthenticated>
          <Button asChild variant={"default"} className="cursor-pointer">
            <SignInButton />
          </Button>
        </Unauthenticated>

        {/* if Authenticated */}
        <Authenticated>
          <Link href={"/dashboard"}>
          <Button variant={"outline"}>
            Enter Workspace
          </Button>
          </Link>
          <UserButton />
        </Authenticated>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
