import { FortuneCard } from "@/components/FortuneCard";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-amber-50 to-amber-100 p-4">
      <div className="w-full max-w-lg">
        {/* Page Header */}
        <img
          src="/images/tsimpa-logo.png"
          alt="Fortune Cookie"
          className="mx-auto mb-4 h-24 w-24 drop-shadow-lg"
        />
        <div
          className="animate-fade-in mb-12 text-center opacity-0"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          <div className="mb-3 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800 shadow-sm">
            ΤΣΙΜΠΑ ΕΝΑ ΧΑΜΟΓΕΛΟ
          </div>
          <h1 className="mb-2 text-4xl font-light text-amber-900">
            Μπισκότο Ευτυχίας
          </h1>
        </div>

        {/* Fortune Cookie Card */}
        <div
          className="animate-fade-in opacity-0"
          style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
        >
          <FortuneCard />
        </div>

        {/* Footer */}
        <div
          className="animate-fade-in mt-16 text-center text-xs text-amber-700/60 opacity-0"
          style={{ animationDelay: "1s", animationFillMode: "forwards" }}
        >
          <p>Πατήστε το μπισκότο για να αποκαλύψετε ένα μήνυμα ευτυχίας.</p>
        </div>
      </div>
      <img
        src="/images/infinity-logo.png"
        alt="Fortune Cookie"
        className="mx-auto mb-4 h-24 w-auto drop-shadow-lg"
      />
    </div>
  );
};

export default Index;
