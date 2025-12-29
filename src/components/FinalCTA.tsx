import { ArrowRight, Calendar } from "lucide-react";
import growthImage from "../../images/growth.webp";

const FinalCTA = () => {
  return (
    <section id="contact" className="section-spacing relative overflow-hidden">

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
              Ücretsiz Strateji Görüşmesi
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary group">
              <Calendar className="mr-2 w-5 h-5" />
              Hemen Topluluğa Katıl
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
