import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAButtonProps extends ButtonProps {
  href?: string;
  showArrow?: boolean;
  children: React.ReactNode;
}

export function CTAButton({
  href,
  showArrow = true,
  children,
  className,
  variant = "accent",
  size = "lg",
  ...props
}: CTAButtonProps) {
  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <Button
        asChild
        variant={variant}
        size={size}
        className={cn("group", className)}
        {...props}
      >
        <Link to={href}>{content}</Link>
      </Button>
    );
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={cn("group", className)}
      {...props}
    >
      {content}
    </Button>
  );
}
