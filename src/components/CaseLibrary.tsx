import { TrendingUp, Target, Calendar, ArrowUpRight } from "lucide-react";
import growthImage from "../../images/growth.webp";
import redwoodImage from "../../images/redwood.webp";
import conceptImage from "../../images/concept.webp";

const cases = [
  {
    icon: TrendingUp,
    title: "Yüksek Marjlı Ürün Stratejisi",
    tag: "Amazon FBA",
    description: "Marj odaklı ürün seçimi ve lansman planlaması örneği.",
  },
  {
    icon: Target,
    title: "Düşük Rekabet Fırsatı",
    tag: "Shopify",
    description: "Erken sinyal yakalama ve hızlı aksiyonla pazar avantajı.",
  },
  {
    icon: Calendar,
    title: "Sezonluk Ürün Yönetimi",
    tag: "Çoklu Platform",
    description: "Sezon etkisini fırsata çeviren envanter stratejisi.",
  },
];

const CaseLibrary = () => {
  return (
    <section className="section-spacing">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            HER ÜRÜNÜN HİKAYESİ FARKLIDIR
          </p>
          <h2 className="heading-section mb-6">
            Ürün senaryoları kütüphanesi{" "}
            <span className="text-accent">(case library)</span>
          </h2>
          <p className="body-default text-muted-foreground">
            Her ürün tek bir formülle büyümez. Ürün senaryoları kütüphanesinde; marj yapısı, iade riski, sezon etkisi ve rekabet seviyesine göre farklı oyun planlarının nasıl kurulduğunu net şekilde görürsün. Amaç, taklit etmek değil; ürünü okuyup doğru hamleyi seçebilme refleksi kazandırmaktır.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((caseItem, index) => (
            <div
              key={caseItem.title}
              className="glass-card-hover p-6 group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Case thumbnail placeholder */}
              <div className="relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-secondary/60 to-secondary/30 aspect-video mb-5">
                {index === 0 && (
                  <img
                    src={growthImage}
                    alt="Prime Skool case growth görseli"
                    className="absolute inset-0 h-full w-full object-contain"
                    loading="lazy"
                  />
                )}
                {index === 1 && (
                  <img
                    src={redwoodImage}
                    alt="Prime Skool case redwood görseli"
                    className="absolute inset-0 h-full w-full object-contain"
                    loading="lazy"
                  />
                )}
                {index === 2 && (
                  <img
                    src={conceptImage}
                    alt="Prime Skool case concept görseli"
                    className="absolute inset-0 h-full w-full object-contain"
                    loading="lazy"
                  />
                )}

                {/* Decorative elements */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-accent/10 blur-2xl rounded-full" />
                  <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-500/8 blur-2xl rounded-full" />
                </div>
                
                {/* ID Badge */}
                <div className="absolute bottom-2 left-2">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-background/50 border border-border/50 text-[10px] text-muted-foreground/60">
                    IMG-09
                  </span>
                </div>
              </div>

              <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full mb-3">
                {caseItem.tag}
              </span>
              <h3 className="font-semibold mb-2 flex items-center justify-between">
                {caseItem.title}
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
              </h3>
              <p className="text-sm text-muted-foreground">
                {caseItem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseLibrary;
