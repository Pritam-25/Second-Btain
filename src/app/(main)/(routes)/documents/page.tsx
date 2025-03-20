"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { PlusCircleIcon } from "lucide-react";
import { api } from "../../../../../convex/_generated/api";
import { toast } from "sonner";

export default function DocumentPage() {
  const { user } = useUser();
  const create = useMutation(api.documents.createTask);

  const onCreate = () => {
    const promise = create({ title: "Untitled" });

    toast.promise(promise, {
      loading: "Creating note...",
      success: "Note created successfully",
      error: "Failed to create note",
    });
  };

  return (
    <div className="h-screen flex flex-col justify-center  items-center space-y-4">
      <h2 className="text-lg font-medium">
        Welcome to {user?.fullName}&apos;s Second Brain
      </h2>
      <Button onClick={onCreate}>
        <PlusCircleIcon className="h-4 w-4" />
        Create a note
      </Button>
    </div>
  );
}
