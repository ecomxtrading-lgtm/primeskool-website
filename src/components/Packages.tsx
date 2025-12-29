import { User, Users, ArrowRight } from "lucide-react";

const packages = [
  {
    icon: User,
    title: "Birebir Danışmanlık",
    description: "Kişiye özel süreç planlaması",
    cta: "Görüşme Planla",
    featured: false,
  },
  {
    icon: Users,
    title: "CANLI EĞİTİM TOPLULUĞU",
    description: "Eğitim kaynakları, canlı yayınlar, yapay zeka kullanımları...",
    cta: "Topluluğa Katıl",
    featured: true,
  },
];

const Packages = () => {
  return (
    <section className="section-spacing">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            PAKETLER: EĞİTİMLER
          </p>
          <h2 className="heading-section">
            Sizin İçin En İyi{" "}
            <span className="text-accent">Uygulama Planı</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={pkg.title}
              className={`glass-card p-8 text-center animate-fade-in h-full flex flex-col ${
                pkg.featured ? "border-accent/30" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Sabit badge alanı: yükseklik eşit olsun */}
              <div className="h-9 mb-4 flex items-center justify-center text-white text-sm font-semibold">
                {pkg.featured && (
                  <span className="inline-block px-3 py-1.5 bg-accent/10 text-white rounded-full">
                    Popüler
                  </span>
                )}
              </div>

              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <pkg.icon className="w-8 h-8 text-accent" />
              </div>

              <h3 className="heading-card mb-2">{pkg.title}</h3>
              <p className="text-muted-foreground mb-6">{pkg.description}</p>

              <div className="mt-auto">
                <button
                  className={`w-full group ${
                    pkg.featured ? "btn-primary" : "btn-secondary"
                  }`}
                >
                  {pkg.cta}
                  <ArrowRight className="ml-2 w-5 h-5 inline-block group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
