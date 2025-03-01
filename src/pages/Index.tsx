import { FortuneCard } from "@/components/FortuneCard";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-amber-50 to-amber-100 p-4">
      <div className="max-w-lg w-full">
        {/* Page Header */}
        <div
          className="text-center mb-12 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-medium mb-3 shadow-sm">
            ΤΣΙΜΠΑ ΕΝΑ ΧΑΜΟΓΕΛΟ
          </div>
          <h1 className="text-4xl font-light text-amber-900 mb-2">
            Μπισκότο Ευτυχίας
          </h1>
        </div>

        {/* Fortune Cookie Card */}
        <div
          className="opacity-0 animate-fade-in"
          style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
        >
          <FortuneCard />
        </div>

        {/* Footer */}
        <div
          className="text-center mt-16 text-amber-700/60 text-xs opacity-0 animate-fade-in"
          style={{ animationDelay: "1s", animationFillMode: "forwards" }}
        >
          <p>Πατήστε το μπισκότο για να αποκαλύψετε ένα μήνυμα ευτυχίας.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
