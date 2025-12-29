import { ArrowRight, Play, Layers } from "lucide-react";
import heroImage from "../../images/hero-picture.webp";
import ImagePlaceholder from "./ui/ImagePlaceholder";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center hero-grid">
          {/* Content */}
          <div className="space-y-8 animate-fade-in hero-content-wide">
            <h1 className="heading-hero">
              GÜÇLÜ{" "}
              <span className="text-gradient">STRATEJİLER</span>{" "}
              KUR
            </h1>
            
            <p className="body-large text-muted-foreground max-w-xl">
              Prime Skool, 'şunu yap–bunu yap' ezberlerinin yerine ürün hikâyesini okuyabilen ve doğru zamanda doğru kanalı kullanan{" "}
              <span className="text-foreground font-medium">girişimci zihniyeti</span> kazandırır. Amazon ve Shopify bizim için araç; asıl mesele{" "}
              <span className="text-accent">marka ve sistem kurmak.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("#consultation")}
                className="btn-primary group"
              >
                Yatırım Yapmadan Önce Uzmanla Konuşun
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => scrollToSection("#curriculum")}
                className="btn-secondary group"
              >
                <Play className="mr-2 w-4 h-4" />
                Müfredatı Gör
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-in-right hero-image-wide" style={{ animationDelay: "0.2s" }}>
            {/* 1400px ve üzeri: gerçek görsel */}
            <div className="hero-img-large overflow-hidden rounded-3xl border border-border bg-card shadow-lg flex items-center justify-center lg:aspect-[4/3]">
              <img
                src={heroImage}
                alt="Prime Skool hero"
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>

            {/* 1020px altı: gerçek görsel */}
            <div className="hero-img-small overflow-hidden rounded-3xl border border-border bg-card shadow-lg flex items-center justify-center lg:aspect-[4/3]">
              <img
                src={heroImage}
                alt="Prime Skool hero"
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>

            {/* 1020-1399: placeholder */}
            <div className="hero-img-placeholder">
              <ImagePlaceholder
                id="IMG-01"
                ratio="4:3"
                icon={Layers}
                brief="Soyut 3D yol haritası / katmanlı bloklar / yön okları — marka inşası + strateji hissi"
                className="lg:aspect-[4/3]"
              />
            </div>
            
            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-accent/5 blur-3xl rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
