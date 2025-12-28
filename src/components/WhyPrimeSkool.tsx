import { Eye, BarChart3, Users, UserCheck, Network } from "lucide-react";
import DuotoneIcon from "./ui/DuotoneIcon";
import ImagePlaceholder from "./ui/ImagePlaceholder";

const reasons = [
  {
    icon: Eye,
    title: "Ürün Odaklı Düşünme",
    description:
      "Her ürüne aynı yöntemi uygulamazsın. Ürünün marjı, rekabeti ve pazardaki konumuna göre özel strateji kurmayı öğrenirsin.",
  },
  {
    icon: BarChart3,
    title: "Gerçek Senaryolar",
    description:
      "Teori değil, sahada çalışan örnekler. Gerçek ürünler, gerçek kararlar ve sonuçlar üzerinden ilerleyerek uygulama refleksi kazanırsın.",
  },
  {
    icon: Users,
    title: "Birlikte İlerleme",
    description:
      "Yalnız değil, toplulukla büyürsün. Canlı yayınlar, paylaşılan deneyimler ve ortak akılla kararlarını daha hızlı ve net alırsın.",
  },
  {
    icon: UserCheck,
    title: "Birebir Danışmanlık Uygulaması",
    description:
      "Kişiye özel süreç planlaması ile standartlarına uygun koşullarda en uygun senaryoyla ilerlersin.",
  },
];

const WhyPrimeSkool = () => {
  return (
    <section className="section-spacing">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Placeholder */}
          <div className="order-2 lg:order-1 animate-slide-in-left">
            <ImagePlaceholder
              id="IMG-03"
              ratio="4:3"
              icon={Network}
              brief="3D düğümler/bağlantılar, network hissi veya soyut control center — sistem + topluluk + strateji"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="heading-section mb-4">
                NEDEN <span className="text-accent">PRIME SKOOL?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-2">
                Strateji Kurmayı Öğreten Bir Sistem
              </p>
              <p className="body-default text-muted-foreground">
                Prime Skool, taktik ezberi yaptırmaz. Ürünü okuyan, pazarı anlayan ve doğru zamanda doğru hamleyi yapan girişimci refleksi kazandırır. Amacımız kısa vadeli sonuçlar değil, uzun ömürlü sistemler kurmaktır.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <div
                  key={reason.title}
                  className="glass-card p-5 animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <DuotoneIcon icon={reason.icon} size="sm" className="mb-3" />
                  <h4 className="font-semibold mb-2">{reason.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPrimeSkool;
