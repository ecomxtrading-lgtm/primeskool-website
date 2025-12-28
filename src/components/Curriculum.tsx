import { BookOpen, Megaphone, Bot, Palette, Search, FolderOpen, Library } from "lucide-react";
import DuotoneIcon from "./ui/DuotoneIcon";
import ImagePlaceholder from "./ui/ImagePlaceholder";

const modules = [
  {
    icon: BookOpen,
    title: "Eğitim Modülleri",
    description:
      "Ürünü sadece listelemeyi değil; onu pazara hazırlamayı, konumlandırmayı ve sürdürülebilir şekilde büyütmeyi öğrenirsin. Listing'den tedarike, lansmandan ölçeklemeye kadar tüm süreci gerçek örnekler, net şablonlar ve uygulanabilir sistemlerle adım adım inşa edersin.",
  },
  {
    icon: Megaphone,
    title: "Trafik Kurgusu",
    description:
      "Meta reklamları ve dış trafik kaynaklarını, satışa hizmet eden net bir sistem içinde kullanırsın.",
  },
  {
    icon: Bot,
    title: "AI Destekleri",
    description:
      "Topluluğa özel GPT'ler ile araştırma, analiz ve karar süreçlerini hızlandırırsın.",
  },
  {
    icon: Palette,
    title: "Kreatif Sistem",
    description:
      "DAGS Kreatif Agent ile yüksek dönüşüm odaklı reklam ve içerik kurguları üretirsin.",
  },
  {
    icon: Search,
    title: "Ürün Analizi",
    description:
      "Rastgele ürün seçmek yerine, veriyle okunan ve yön verilen ürünler bulursun.",
  },
  {
    icon: FolderOpen,
    title: "Kaynak Havuzu",
    description:
      "Sürekli güncellenen e-kitaplar, şablonlar ve dokümanlarla sistemini diri tutarsın.",
  },
];

const Curriculum = () => {
  return (
    <section id="curriculum" className="section-spacing">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                EĞİTİM İÇERİKLERİ
              </p>
              <h2 className="heading-section mb-6">
                Eğitimde neler{" "}
                <span className="text-accent">göreceksiniz?</span>
              </h2>
            </div>

            <div className="space-y-4">
              {modules.map((module, index) => (
                <div
                  key={module.title}
                  className="glass-card p-5 animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <DuotoneIcon icon={module.icon} size="sm" />
                    <div>
                      <h4 className="font-semibold mb-2">{module.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {module.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="lg:sticky lg:top-24 animate-slide-in-right">
            <ImagePlaceholder
              id="IMG-06"
              ratio="3:4"
              icon={Library}
              brief="Kitap/klasör/stacked cards, checklist, modül blokları — modüller + kaynak kütüphanesi"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
