import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { getRandomWish, type Wish } from "@/data/wishesData";

export const FortuneCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentWish, setCurrentWish] = useState<Wish | null>(null);
  const [showPaper, setShowPaper] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Set initial wish
    setCurrentWish(getRandomWish());
  }, []);

  const handleOpenCookie = () => {
    if (isOpen) return;

    setIsOpen(true);

    // Show paper after a brief delay to give time for cookie crack animation
    setTimeout(() => {
      setShowPaper(true);
    }, 600);

    // Mark as animated
    setHasAnimated(true);
  };

  const handleNewFortune = () => {
    // Close the cookie and hide the paper
    setIsOpen(false);
    setShowPaper(false);

    // Reset animation flag
    setHasAnimated(false);

    // Get a new fortune
    const newWish = getRandomWish();

    // Make sure we don't get the same fortune twice
    if (newWish.id === currentWish?.id) {
      const wishesExcludingCurrent = getRandomWish();
      setCurrentWish(wishesExcludingCurrent);
    } else {
      setCurrentWish(newWish);
    }

    toast({
      title: "Νέο Μήνυμα Ετοιμο", // Translated title
      description:
        "Η επόμενη ευχή σου σε περιμένει. Άνοιξε το μπισκότο για να την αποκαλύψεις.", // Translated description
      duration: 3000,
    });
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-md mx-auto">
      {/* Fortune Cookie Container */}
      <div className="relative w-64 h-48 flex items-center justify-center">
        {/* Fortune Paper - positioned below the cookie so it's revealed when cookie opens */}
        {showPaper && (
          <div className="fortune-paper-container">
            <div className="fortune-paper">
              <p className="text-center font-serif italic mb-4 text-sm">
                {currentWish?.text}
              </p>
            </div>
          </div>
        )}

        {/* Cookie halves */}
        <div
          className={`cookie-half cookie-left ${
            isOpen ? "cookie-left-open" : ""
          }`}
          onClick={handleOpenCookie}
        ></div>

        <div
          className={`cookie-half cookie-right ${
            isOpen ? "cookie-right-open" : ""
          }`}
          onClick={handleOpenCookie}
        ></div>
      </div>

      {/* Action Button */}
      <div
        className={`mt-16 opacity-0 ${hasAnimated ? "animate-fade-in-up" : ""}`}
      >
        <Button
          onClick={handleNewFortune}
          variant="outline"
          className="bg-transparent border border-amber-200 text-amber-800 hover:bg-amber-50 
                   transition-all duration-300 rounded-full px-6"
        >
          Νέο Μήνυμα
        </Button>
      </div>
    </div>
  );
};
