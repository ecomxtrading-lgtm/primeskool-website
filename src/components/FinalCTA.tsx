import { ArrowRight, Calendar } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="contact" className="section-spacing relative overflow-hidden">
      {/* IMG-10 Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent/8 blur-[150px] rounded-full" />
        {/* Secondary blue glow */}
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full" />
        {/* Accent glow top right */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/10 blur-[80px] rounded-full" />
        
        {/* Abstract geometric shapes */}
        <svg className="absolute bottom-20 left-20 w-40 h-40 text-accent/5" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
        
        <svg className="absolute top-20 right-20 w-32 h-32 text-accent/5" viewBox="0 0 100 100">
          <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" />
          <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.5" />
          <line x1="15" y1="15" x2="85" y2="85" stroke="currentColor" strokeWidth="0.5" />
          <line x1="85" y1="15" x2="15" y2="85" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="glass-card p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            BİZE KATIL
          </p>
          <h2 className="heading-section mb-6">
            Kazanmak İçin{" "}
            <span className="text-accent">Kazanan Tarafa</span> Geç
          </h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto mb-10">
            Tek başına ilerlemek zorunda değilsin. Prime Skool'da ürünleri okuyan, strateji kuran ve süreci birlikte inşa eden bir topluluğun parçası olursun. Gerçek senaryolar, canlı paylaşımlar ve ortak akılla kararlarını netleştirir, yolunu hızlandırırsın. Hazırsan, sen de bu yolculuğa katıl.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary group">
              Topluluğa Katıl
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary group">
              <Calendar className="mr-2 w-5 h-5" />
              Görüşme Planla
            </button>
          </div>

          {/* IMG-10 info badge */}
          <div className="mt-10 flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 border border-border/50 text-xs text-muted-foreground/50">
              <span className="w-2 h-2 rounded-full bg-accent/30" />
              IMG-10 • Background: soyut premium glow + minimal geometrik şekiller
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
