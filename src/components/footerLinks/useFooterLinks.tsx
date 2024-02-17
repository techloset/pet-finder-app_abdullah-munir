import { useState } from "react";

export const useFooterLinks = () => {
  const [isFooterOpen, setIsFooterOpen] = useState(false);

  const toggleFooter = () => {
    setIsFooterOpen(!isFooterOpen);
  };
  return {
    isFooterOpen,
    toggleFooter,
    setIsFooterOpen,

  };
};
