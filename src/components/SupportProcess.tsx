import { Radio, MessageCircle, Lightbulb } from "lucide-react";

const SupportProcess = () => {
  return (
    <section className="section-spacing-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="glass-card p-8 md:p-12 lg:p-16 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="text-center p-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Radio className="w-6 h-6 text-accent" />
              </div>
              <p className="text-sm text-muted-foreground">Haftalık Canlı Yayınlar</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-accent" />
              </div>
              <p className="text-sm text-muted-foreground">Topluluk Paylaşımları</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-6 h-6 text-accent" />
              </div>
              <p className="text-sm text-muted-foreground">Ortak Akıl Kararları</p>
            </div>
          </div>

          <div className="text-center space-y-6">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider">
              SÜREÇTE ASLA YALNIZ DEĞİLSİN
            </p>
            <h2 className="heading-section leading-[1.6]">
              Haftalık canlı yayın:{" "}
              <span className="text-accent">gerçek zamanlı</span> yol haritası
            </h2>
            <p className="body-default text-muted-foreground max-w-3xl mx-auto">
              Prime Skool topluluğunda sorunlar tek başına taşınmaz. Haftalık canlı yayınlar ve topluluk içi paylaşımlar sayesinde; ürün, reklam, listeleme ve strateji konuları ortak akılla ele alınır. Burada amaç yalnızca cevap bulmak değil, topluluğun deneyimlerinden beslenerek doğru karar alma refleksini birlikte geliştirmektir.
            </p>
            <div className="glass-card p-6 max-w-2xl mx-auto bg-secondary/30">
              <p className="text-muted-foreground italic">
                "'Neyi yaptık?'tan çok 'neden bunu yaptık?' sorusuna odaklanırız. Ürün, kreatif, reklam ya da stratejiyle ilgili fikirlerini canlı yayında netleştirirsin."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportProcess;
