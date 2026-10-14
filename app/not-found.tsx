import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="shell pt-16 md:pt-28">
      <h1 className="display text-[clamp(3.5rem,11vw,9.5rem)]">Page not found</h1>
      <p className="mt-8 max-w-[44ch] text-lg text-muted-foreground">
        This address doesn’t match any page. It may have moved, or the link may have a typo.
      </p>
      <Link href="/" className={`${buttonVariants({ size: "lg" })} mt-10`}>
        Go to the home page
      </Link>
    </div>
  );
}
