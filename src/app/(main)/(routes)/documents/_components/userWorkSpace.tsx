import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@clerk/clerk-react";
import { ChevronsLeftRight, LucidePlusCircle } from "lucide-react";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";

export default function UserWorkSpace() {
  const { user } = useUser();

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center text-sm p-3 w-full hover:bg-primary/5 focus:outline-none">
            <div className="flex gap-x-2 items-center max-w-[240px]">
              <Avatar className="h-6 w-6">
                <AvatarImage src={user?.imageUrl} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span>{user?.fullName}&apos;s Workspace</span>
            </div>
            <ChevronsLeftRight className="ml-2 rotate-90 font-medium text-start h-4 w-4" />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="w-80"
          align="start"
          alignOffset={11}
          forceMount
        >
          <DropdownMenuLabel>
            <div className="flex flex-col space-y-4 p-2">
              <p className="text-xs font-medium leading-none text-muted-foreground">
                {user?.emailAddresses[0]?.emailAddress}
              </p>
              <div className=" flex w-full  items-center gap-2 rounded-md bg-secondary p-2">
                <div className="">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={user?.imageUrl} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <div className="space-y-1">
                  <p className="text-sm line-clamp-1">
                    {user?.fullName}&apos;s Workspace
                  </p>
                </div>
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Button className="w-full text-start" variant={"ghost"}>
              <LucidePlusCircle className="h-4 w-4" />
              Add new Workspace
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
