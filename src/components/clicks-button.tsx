"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function ClicksButton() {
  const [count, setCount] = useState<number | null>(null);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch clicks");
        }
        return res.json();
      })
      .then((data: { count: number }) => {
        setCount(data.count);
      })
      .catch((err) => {
        console.error("Failed to load initial clicks:", err);
        setCount(0);
      });
  }, []);

  const handleClick = async () => {
    if (!count || pending) {
      return;
    }

    setPending(true);
    setCount((c) => (c ?? 0) + 1); // optimistic

    try {
      const res = await fetch("/api/clicks", { method: "POST" });
      if (!res.ok) {
        throw new Error("Failed to increment clicks");
      }

      const data: { count: number } = await res.json();
      setCount(data.count); // reconcile
    } catch (err) {
      console.error("POST /api/clicks failed:", err);
      setCount((c) => (c ?? 1) - 1); // rollback
    } finally {
      setPending(false);
    }
  };

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button onClick={handleClick} variant="outline">
          {count ? `${count} Clicks` : "…"}
        </Button>
      </HoverCardTrigger>

      <HoverCardContent className="w-80">
        This button has been clicked {count ? count : "…"} clicks worldwide!
      </HoverCardContent>
    </HoverCard>
  );
}
