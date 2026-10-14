import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function TagList({ tags, className }: { tags: string[]; className?: string }) {
  return (
    <ul aria-label="Technologies" className={cn("flex flex-wrap gap-1.5", className)}>
      {tags.map((tag) => (
        <li key={tag}>
          <Badge variant="outline" className="h-6 rounded-full px-2.5 text-[0.8125rem] font-normal text-muted-foreground">
            {tag}
          </Badge>
        </li>
      ))}
    </ul>
  );
}
