import { ComponentProps, ReactElement } from "react";

import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

interface SectionContainerProps extends ComponentProps<"section"> {
  rightButton?: ReactElement<typeof Button>;
}

function SectionContainer({
  title,
  className,
  children,
  rightButton,
  ...props
}: SectionContainerProps) {
  const renderTitle = rightButton ? (
    <div className="flex items-center justify-between">
      <h2>{title}</h2>

      {rightButton}
    </div>
  ) : (
    <h2>{title}</h2>
  );

  return (
    <section
      className={cn(
        "flex flex-col flex-1 p-4 bg-card rounded-md border shadow text-card-foreground",
        className
      )}
      {...props}
    >
      {renderTitle}

      <Separator className="mt-2 mb-4" />

      {children}
    </section>
  );
}

export default SectionContainer;
