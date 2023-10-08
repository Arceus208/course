"use client";

import { useConffetiStore } from "@/hooks/use-confetti-store";
import ReactConfetti from "react-confetti";

export const ConffetiProvider = () => {
  const { isOpen, onClose } = useConffetiStore();

  if (!isOpen) return null;

  return (
    <ReactConfetti
      className="pointer-events-none z-[100]"
      numberOfPieces={500}
      recycle={false}
      onConfettiComplete={() => onClose()}
    ></ReactConfetti>
  );
};
