"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import Link from "next/link";
import { useRef, useState, type PointerEvent } from "react";
import type { Project } from "@/content/portfolio";
import { ProjectImage } from "./project-image";
import { InProgressLabel } from "./status-label";
import { TagList } from "./tag-list";

type Item = Pick<Project, "slug" | "title" | "summary" | "year" | "tags" | "cover" | "inProgress">;

/** Typographic project list. On hover-capable devices a cover preview follows the cursor. */
export function ProjectIndex({ projects }: { projects: Item[] }) {
  const [active, setActive] = useState<number | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spring = { stiffness: 260, damping: 28, mass: 0.5 };
  const sx = useSpring(x, spring);
  const sy = useSpring(y, spring);

  function onPointerMove(e: PointerEvent) {
    if (e.pointerType !== "mouse" || !listRef.current) return;
    const rect = listRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }

  return (
    <div
      ref={listRef}
      onPointerMove={onPointerMove}
      onPointerLeave={() => setActive(null)}
      className="relative"
    >
      <ul className="border-b">
      {projects.map((p, i) => (
        <li key={p.slug} className="border-t">
          <Link
            href={`/projects/${p.slug}`}
            onPointerEnter={(e) => e.pointerType === "mouse" && setActive(i)}
            className="group grid gap-4 py-8 transition-opacity duration-300 md:grid-cols-12 md:items-baseline md:gap-6 md:py-10 md:data-[dim=true]:opacity-35"
            data-dim={active !== null && active !== i}
          >
            <h3 className="display text-[2.5rem] transition-[color,translate] duration-500 ease-out-quint group-hover:text-brand md:col-span-6 md:text-[clamp(2.75rem,5vw,4.5rem)] md:group-hover:translate-x-3">
              {p.title}
            </h3>
            <div className="md:col-span-5">
              {p.inProgress && (
                <div className="mb-3">
                  <InProgressLabel />
                </div>
              )}
              <p className="max-w-[46ch] text-muted-foreground">{p.summary}</p>
              {p.tags.length > 0 && <TagList tags={p.tags} className="mt-4" />}
            </div>
            <p className="text-sm text-muted-foreground tabular-nums md:col-span-1 md:text-right">
              {p.year}
            </p>
            <div className="relative aspect-[16/10] overflow-hidden rounded-md md:hidden">
              <ProjectImage src={p.cover.src} alt="" fill sizes="100vw" className="object-cover" />
            </div>
          </Link>
        </li>
      ))}
      </ul>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 z-10 hidden w-[22rem] [@media(hover:hover)_and_(min-width:48rem)]:block"
        style={{ x: reduce ? x : sx, y: reduce ? y : sy }}
        initial={false}
        animate={{ opacity: active === null ? 0 : 1, scale: active === null || reduce ? 0.96 : 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <div className="relative aspect-[16/10] -translate-x-1/2 -translate-y-[110%] overflow-hidden rounded-md shadow-[0_24px_60px_-20px_rgb(16_23_20/0.45)]">
          {projects.map((p, i) => (
            <ProjectImage
              key={p.slug}
              src={p.cover.src}
              alt=""
              fill
              sizes="352px"
              className="object-cover transition-opacity duration-300"
              style={{ opacity: active === i ? 1 : 0 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
