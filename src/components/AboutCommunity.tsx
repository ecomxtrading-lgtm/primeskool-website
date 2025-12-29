import { LayoutDashboard } from "lucide-react";
import ImagePlaceholder from "./ui/ImagePlaceholder";
import communityImage from "../../images/comminity.webp";

const AboutCommunity = () => {
  return (
    <section id="about" className="section-spacing">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image (mobile/tablet: top, desktop: right) */}
          <div className="order-1 lg:order-1 animate-slide-in-left">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lg lg:aspect-[4/3]">
              <img
                src={communityImage}
                alt="Prime Skool community görseli"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-2 lg:order-2 space-y-6">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                KOLEKTİF GÜÇ
              </p>
              <h2 className="heading-section mb-6">
                Tek başına değil: aynı hedefe bakan bir{" "}
                <span className="text-accent">topluluk</span>
              </h2>
            </div>

            <p className="body-default text-muted-foreground">
              Prime Skool, yalnızca eğitim izlediğin bir platform değil; aynı yolda yürüyen girişimcilerle birlikte düşündüğün, karar aldığın ve ilerlediğin bir ekosistemdir. Video eğitimler, canlı yayınlar, uygulama şablonları ve paylaşılan deneyimlerle girişimci satıcı refleksini hızlandırır, yalnız kalmanı engeller.
            </p>

            <div className="glass-card glass-card-orange p-6 text-white">
              <p className="leading-relaxed text-white">
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
