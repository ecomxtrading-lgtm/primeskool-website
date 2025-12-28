import { MapPin, Rocket, Settings, ArrowRight, Route } from "lucide-react";
import DuotoneIcon from "./ui/DuotoneIcon";
import ImagePlaceholder from "./ui/ImagePlaceholder";

const steps = [
  {
    icon: MapPin,
    text: "Stratejik piyasa analizi ve ürün araştırma kurgusu (konumlama)",
  },
  {
    icon: Rocket,
    text: "Tedarik, satış, lansman & büyüme planı (trafik, dönüşüm, optimizasyon)",
  },
  {
    icon: Settings,
    text: "Operasyon ve kârlılık kontrol sistemi (stok, maliyet, süreç)",
  },
];

const Consultation = () => {
  return (
    <section id="consultation" className="section-spacing">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                BİREBİR DANIŞMANLIK
              </p>
              <h2 className="heading-section mb-6">
                E-ticaret girişimin için sana özel{" "}
                <span className="text-accent">yol haritası</span>
              </h2>
              <p className="body-default text-muted-foreground">
                Mevcut durumunu analiz ediyor, hedefini netleştiriyor ve e-ticareti ana gelir noktasına taşıyacak adımları tek tek planlıyoruz. Kopya taktikler değil, senin şartlarına göre çalışan sistem kuruyoruz.
              </p>
            </div>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <DuotoneIcon icon={step.icon} size="sm" />
                  <p className="text-muted-foreground pt-2">{step.text}</p>
                </div>
              ))}
            </div>

            <button className="btn-primary group">
              Görüşme Planla
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Image Placeholder */}
          <div className="animate-slide-in-right">
            <ImagePlaceholder
              id="IMG-07"
              ratio="1:1"
              icon={Route}
              brief="Takvim + roadmap + hedef ikonları, 3 adımlı plan hissi — kişisel yol haritası / plan"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
