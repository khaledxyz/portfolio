import { ArrowUp01FreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Button } from "@/components/ui/button";

export function ScrollToTopButton() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      aria-label="Scroll to top"
      onClick={handleScrollToTop}
      size="icon"
      variant="secondary"
    >
      <HugeiconsIcon icon={ArrowUp01FreeIcons} strokeWidth={2} />
    </Button>
  );
}
