import { LayoutDashboard } from "lucide-react";
import ImagePlaceholder from "./ui/ImagePlaceholder";

const AboutCommunity = () => {
  return (
    <section id="about" className="section-spacing">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Placeholder */}
          <div className="animate-slide-in-left">
            <ImagePlaceholder
              id="IMG-05"
              ratio="4:3"
              icon={LayoutDashboard}
              brief="Dark UI mockup (anonim), kartlar, grafikler, chat bubble simgeleri — dashboard + canlı yayın + ekosistem"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                ABOUT US / KOLEKTİF GÜÇ
              </p>
              <h2 className="heading-section mb-6">
                Tek başına değil: aynı hedefe bakan bir{" "}
                <span className="text-accent">topluluk</span>
              </h2>
            </div>

            <p className="body-default text-muted-foreground">
              Prime Skool, yalnızca eğitim izlediğin bir platform değil; aynı yolda yürüyen girişimcilerle birlikte düşündüğün, karar aldığın ve ilerlediğin bir ekosistemdir. Video eğitimler, canlı yayınlar, uygulama şablonları ve paylaşılan deneyimlerle girişimci satıcı refleksini hızlandırır, yalnız kalmanı engeller.
            </p>

            <div className="glass-card p-6">
              <p className="text-muted-foreground leading-relaxed">
                Sorularını tek başına çözmek zorunda kalmazsın. Haftalık canlı yayınlarda ürün, strateji ve reklam kararlarını masaya yatırırız. Başkalarının yaptığı hatalardan ve yakaladığı fırsatlardan öğrenirsin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCommunity;
