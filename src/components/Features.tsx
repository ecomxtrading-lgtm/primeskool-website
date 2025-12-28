import { Rocket, Store, Target, Sparkles, Zap, Radio } from "lucide-react";
import DuotoneIcon from "./ui/DuotoneIcon";

const features = [
  {
    icon: Rocket,
    title: "Amazon Stratejileri",
    description: "Lorem dolor amet consectetur read adipiscing any more elit.",
  },
  {
    icon: Store,
    title: "Shopify Stratejileri",
    description: "Lorem dolor amet consectetur read adipiscing any more elit.",
  },
  {
    icon: Target,
    title: "Meta Reklam Stratejileri",
    description: "Lorem dolor amet consectetur read adipiscing any more elit.",
  },
  {
    icon: Sparkles,
    title: "Kreatif Stratejiler",
    description: "Lorem dolor amet consectetur read adipiscing any more elit.",
  },
  {
    icon: Zap,
    title: "Stoksuz Ürün Testleri",
    description: "Lorem dolor amet consectetur read adipiscing any more elit.",
  },
  {
    icon: Radio,
    title: "Canlı yayın marka inşası",
    description: "Lorem dolor amet consectetur read adipiscing any more elit.",
  },
];

const Features = () => {
  return (
    <section id="features" className="section-spacing">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-section mb-6">
            Türkiye'deki en <span className="text-accent">optimal</span> e-ticaret eğitimi
          </h2>
          <p className="body-large text-muted-foreground">
            Bir platforma, bir ülkeye, bir stratejiye bağlı kalmadan{" "}
            <span className="text-foreground">doğru zamanda doğru yerde</span> konumlanmalısınız.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card-hover p-6 md:p-8 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <DuotoneIcon icon={feature.icon} size="md" className="mb-5" />
              <h3 className="heading-card mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* IMG-02 Info */}
        <div className="mt-12 flex justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border text-xs text-muted-foreground/60">
            <span className="w-2 h-2 rounded-full bg-accent/40" />
            IMG-02 • Duotone ikon seti: muted + accent vurgulu, 6 adet minimal ikon
          </span>
        </div>
      </div>
    </section>
  );
};

export default Features;
