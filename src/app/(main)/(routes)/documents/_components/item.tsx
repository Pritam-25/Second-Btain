"use client";

import { ChevronDownIcon, ChevronRightIcon, LucideIcon } from "lucide-react";
import { Id } from "../../../../../../convex/_generated/dataModel";
import { cn } from "@/lib/utils";

interface ItemProps {
  id?: Id<"documents">;
  documentIcon?: string;
  active?: boolean;
  expended?: boolean;
  isSearch?: boolean;
  onExpand?: () => void;
  label: string;
  onClick: () => void;
  icon: LucideIcon;
}

export const Item = ({
  id,
  label,
  onClick,
  icon: Icon,
  active,
  documentIcon,
  isSearch,
  expended,
  onExpand,
}: ItemProps) => {
  const CheveronIcon = expended ? ChevronDownIcon : ChevronRightIcon;

  return (
    <div
      onClick={onClick}
      role="button"
      style={{
        paddingLeft: label ? `${parseInt(label, 10) * 12 + 12}px` : "12px",
      }}
      className={cn(
        "group min-h-[27px] text-sm py-2 px-3 hover:bg-primary/5 flex items-center text-muted-foreground font-medium",
        active && "bg-primary/5 text-primary"
      )}
    >
      {!!id && (
        <div
          role="button"
          className="h-full rouded-sm hover:bg-primary/10 mr-1"
          onAbort={onExpand}
        >
          <CheveronIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
        </div>
      )}
      {documentIcon ? (
        <div className="shrink-0 mr-2 text-[18px]">{documentIcon}</div>
      ) : (
        <Icon className="shrink-0 h-[18px] mr-2" />
      )}

      <span className="truncate">{label}</span>
      {isSearch && (
        <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-[10px] font-medium text-muted-foreground">
          <span className="text-xs">ctrl</span>K
        </kbd>
      )}
    </div>
  );
};
