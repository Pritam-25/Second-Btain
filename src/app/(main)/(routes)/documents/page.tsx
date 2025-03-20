"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { PlusCircleIcon } from "lucide-react";

export default function DocumentPage() {
  const { user } = useUser();

  return (
    <div className="h-screen flex flex-col justify-center  items-center space-y-4">
      <h2 className="text-lg font-medium">Welcome to {user?.fullName}&apos;s Second Brain</h2>
      <Button>
        <PlusCircleIcon className="h-4 w-4"/>
        Create a note
      </Button>
    </div>
  );
}
