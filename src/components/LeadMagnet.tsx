import { useState } from "react";
import { BookOpen, ArrowRight, Check } from "lucide-react";

const LeadMagnet = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true);
  };

  return (
    <section className="section-spacing">
      <div className="container mx-auto px-4 md:px-6">
        <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* E-Book Cover Placeholder */}
            <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-secondary/80 to-secondary/40 aspect-[3/4]">
              {/* Decorative elements */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/15 blur-3xl rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full" />
              </div>

              {/* Book spine effect */}
              <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-foreground flex items-center justify-center shadow-xl shadow-accent/30">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 blur-xl bg-accent/30 rounded-full" />
                </div>

                <div className="text-center space-y-3">
                  <p className="text-xs font-medium text-accent uppercase tracking-wider">
                    Ücretsiz E-Kitap
                  </p>
                  <h4 className="text-lg font-bold text-foreground leading-tight">
                    Platform Üstü Satıcı<br />Nasıl Olunur?
                  </h4>
                  <div className="w-12 h-0.5 bg-accent/50 mx-auto" />
                  <p className="text-xs text-muted-foreground">
                    Prime Skool
                  </p>
                </div>

                {/* ID Badge */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-medium text-accent">
                    IMG-08
                    <span className="text-muted-foreground/70">•</span>
                    <span className="text-muted-foreground/70">3:4</span>
                  </span>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-accent/15 to-transparent rotate-45" />
              </div>
            </div>

            {/* Form */}
            <div className="space-y-6">
              <div>
                <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
                  ÜCRETSİZ E-KİTAP
                </p>
                <h3 className="heading-card mb-2">
                  Platform üstü satıcı nasıl olunur?
                </h3>
                <p className="text-muted-foreground text-sm">
                  Eğitim yapısı ve karar mekanizmasını içerir.
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Adınız"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-accent focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                  />
                  <input
                    type="email"
                    placeholder="E-posta adresiniz"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-accent focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                  />
                  <input
                    type="tel"
                    placeholder="WhatsApp (opsiyonel)"
                    value={formData.whatsapp}
                    onChange={(e) =>
                      setFormData({ ...formData, whatsapp: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-accent focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                  />
                  <button type="submit" className="btn-primary w-full group">
                    Ücretsiz E-Kitabı Al
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    Spam yok. Kaynakları tek tıkla gönderiyoruz.
                  </p>
                </form>
              ) : (
                <div className="text-center p-6 glass-card bg-accent/10">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-6 h-6 text-accent" />
                  </div>
                  <p className="font-semibold mb-1">Teşekkürler!</p>
                  <p className="text-sm text-muted-foreground">
                    E-kitap e-posta adresinize gönderildi.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
