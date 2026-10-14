"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <Button variant="outline" size="lg" onClick={copy}>
      {copied ? <Check data-icon="inline-start" /> : <Copy data-icon="inline-start" />}
      <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
    </Button>
  );
}
