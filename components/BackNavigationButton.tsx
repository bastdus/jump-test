"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MoveLeft } from "lucide-react";

export const BackNavigationButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <Button onClick={handleBack} size="icon">
      <ArrowLeft />
    </Button>
  );
};
