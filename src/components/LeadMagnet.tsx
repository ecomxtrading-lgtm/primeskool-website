import { useEffect, useState } from "react";
import { BookOpen, ArrowRight, Check } from "lucide-react";
import redhearImage from "../../images/redhear.webp";
import { supabase } from "@/lib/supabase";

const LeadMagnet = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [kvkkAccepted, setKvkkAccepted] = useState(false);
  const [commsAccepted, setCommsAccepted] = useState(false);
  const [showKvkkModal, setShowKvkkModal] = useState(false);
  const [showCommsModal, setShowCommsModal] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  useEffect(() => {
    const urlSet = !!import.meta.env.VITE_SUPABASE_URL;
    const keySet = !!import.meta.env.VITE_SUPABASE_ANON_KEY;
    console.log("LeadMagnet mounted. Supabase env set? url:", urlSet, "key:", keySet);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!kvkkAccepted || !commsAccepted) {
      setCheckboxError(true);
      return;
    }
    setCheckboxError(false);
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      console.log("LeadMagnet submit started", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        kvkkAccepted,
        commsAccepted,
      });

      if (!supabase) {
        throw new Error("Supabase client yok (env eksik veya yanlış)");
      }

      const { error } = await supabase.from("student").insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        kvkk_accepted: kvkkAccepted,
        comms_accepted: commsAccepted,
      });

      if (error) {
        console.error("Supabase insert error:", error);
        setSubmitError("Gönderim sırasında bir hata oluştu. Lütfen tekrar deneyin.");
        setIsSubmitting(false);
        return;
      }
    } catch (err: any) {
      console.error("Supabase insert exception:", err);
      setSubmitError("Gönderim sırasında bir hata oluştu. Lütfen tekrar deneyin.");
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section className="section-spacing">
      <div className="container mx-auto px-4 md:px-6">
        <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* E-Book Cover */}
            <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-secondary/80 to-secondary/40 aspect-[3/4]">
              {/* Background image */}
              <img
                src={redhearImage}
                alt="Prime Skool e-kitap kapağı"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/60 pointer-events-none" />

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
                  ÜCRETSİZ MASTER CLASS EĞİTİMİ
                </p>
                  <h4 className="text-lg font-bold text-foreground leading-tight">
                    Platform Üstü Satıcı<br />Nasıl Olunur?
                  </h4>
                  <div className="w-12 h-0.5 bg-accent/50 mx-auto" />
                  <p className="text-xs text-muted-foreground">
                    Prime Skool
                  </p>
                </div>

                {/* ID Badge removed */}
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
                  ÜCRETSİZ MASTER CLASS EĞİTİMİ
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
                    placeholder="Telefon"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-accent focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                  />
              <div className="space-y-3">
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={kvkkAccepted}
                    onChange={(e) => setKvkkAccepted(e.target.checked)}
                    className="mt-1 h-4 w-4 accent-accent"
                  />
                  <span
                    className={`text-sm ${
                      checkboxError && !kvkkAccepted ? "text-red-500" : "text-orange-400"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setShowKvkkModal(true)}
                      className="text-blue-400 underline mr-1"
                    >
                      Aydınlatma Metni
                    </button>
                    ’ni okudum, kabul ediyorum.
                  </span>
                </label>

                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={commsAccepted}
                    onChange={(e) => setCommsAccepted(e.target.checked)}
                    className="mt-1 h-4 w-4 accent-accent"
                  />
                  <span
                    className={`text-sm ${
                      checkboxError && !commsAccepted ? "text-red-500" : "text-orange-400"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setShowCommsModal(true)}
                      className="text-blue-400 underline mr-1"
                    >
                      Ticari İleti Onayı
                    </button>
                    ’nı okudum, kabul ediyorum.
                  </span>
                </label>
                {checkboxError && (
                  <p className="text-sm text-red-500">
                    Lütfen gerekli onay kutularını işaretleyin.
                  </p>
                )}
              </div>
              {submitError && (
                <p className="text-sm text-red-500">{submitError}</p>
              )}
              <button
                type="submit"
                className="btn-primary w-full group disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Gönderiliyor..." : "Ücretsiz Master Class Eğitimini Al"}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>                  
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

      {/* KVKK Modal */}
      {showKvkkModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="max-w-3xl w-full bg-background rounded-2xl border border-border shadow-xl p-6 space-y-4 overflow-y-auto max-h-[80vh]">
            <h3 className="text-lg font-semibold">Aydınlatma Metni</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                Prime Skool (“Veri Sorumlusu”) tarafından; ad-soyad, telefon numarası ve e-posta adresimden oluşan kişisel verilerimin, yalnızca aşağıdaki amaçlarla işlenmesine;
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Eğitim kayıt işlemlerinin yürütülmesi,</li>
                <li>Eğitim ve organizasyon duyuruları, hatırlatma ve bilgilendirme amaçlı iletişim kurulması,</li>
                <li>İlgili süreçlere dair geri dönüş yapılması</li>
              </ul>
              <p>
                amaçlarıyla 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) Madde 5/1 uyarınca, özgür irademle, bilgilendirilmeye dayalı olarak açıkça rıza veriyorum.
              </p>
              <p>Kişisel Verileri Koruma Kurumu</p>
              <p>
                KVKK kapsamında; kişisel verilerime ilişkin olarak,
                verilerimin işlenip işlenmediğini öğrenme, işlenmişse amacını öğrenme, yanlış işlenmişse düzeltme talep etme, verilerin silinmesini veya yok edilmesini isteme, işlemenin sınırlandırılmasını talep etme, 5/1 maddesine dayalı verdiğim açık rızayı geri alma haklarına sahip olduğumu ve taleplerimi iletisim@primeskool.com adresine yazı ile iletebileceğimi anladım ve kabul ediyorum.
              </p>
              <p>Bu metni okudum, anladım ve onaylıyorum.</p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setShowKvkkModal(false)}
                className="btn-secondary"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Ticari İleti Modal */}
      {showCommsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="max-w-3xl w-full bg-background rounded-2xl border border-border shadow-xl p-6 space-y-4 overflow-y-auto max-h-[80vh]">
            <h3 className="text-lg font-semibold">Ticari İleti Onayı</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                Prime Skool tarafından; eğitim duyuruları dışında kampanya, reklam ve promosyon amaçlı mesajlar, bilgilendirme ve tanıtım içerikleri, e-posta, SMS, WhatsApp ve diğer dijital iletişim kanalları üzerinden ticari elektronik iletiler gönderilmesi amacıyla kişisel verilerimin işlenmesine ve benimle iletişime geçilmesine özgür irademle açık rıza veriyorum.
              </p>
              <p>
                Bu onayı dilediğim zaman, hiçbir gerekçe göstermeden geri çekme hakkına sahip olduğumu; iptal talebimi iletisim@primeskool.com adresine ileterek ya da gelen iletilerdeki çıkış/iptal seçeneklerini kullanarak yapabileceğimi anladım.
              </p>
              <p>“Pazarlama ve ticari ileti gönderimine onay veriyorum.”</p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setShowCommsModal(false)}
                className="btn-secondary"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LeadMagnet;
