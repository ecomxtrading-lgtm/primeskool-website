import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Bu eğitim yeni başlayanlar için mi yoksa deneyimliler için mi?",
    answer:
      "Hem yeni başlayanlar hem de halihazırda satış yapanlar için uygundur. Seviyeden bağımsız olarak ürünü doğru okuma ve doğru karar alma becerisi kazandırır.",
  },
  {
    question: "Eğitime başlamak için yüksek bütçe gerekiyor mu?",
    answer:
      "Hayır. Eğitim yüksek bütçelerle değil, doğru test mantığıyla ilerler. Minimum riskle maksimum öğrenme hedeflenir.",
  },
  {
    question: "Sadece Amazon mı yoksa Shopify da var mı?",
    answer:
      "Eğitim tek bir platforma odaklanmaz. Amazon ve Shopify araç olarak görülür; asıl odak doğru stratejiyi kurmaktır.",
  },
  {
    question: "Topluluk desteği nasıl çalışıyor?",
    answer:
      "Topluluk ile ilerlemek hataları geç fark etmeyi önler. Haftalık canlı yayınlar, ortak akıl ve paylaşılan deneyimlerle sürekli destek alırsın.",
  },
  {
    question: "Rastgele ürün seçmekten nasıl kaçınabilirim?",
    answer:
      "Rastgele denemek yerine ürüne göre strateji kurma refleksi kazanırsın. Veri odaklı analiz ve pazar okuması ile doğru ürünleri seçersin.",
  },
];

const FAQ = () => {
  return (
    <section className="section-spacing">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-section mb-4">
              FAQ's – Bu eğitim gerçekten bana{" "}
              <span className="text-accent">uygun mu?</span>
            </h2>
            <p className="body-default text-muted-foreground">
              Evet. Bu eğitim hem yeni başlayanlar hem de hali hazırda satış yapanlar için uygundur çünkü seviyeden bağımsız olarak ürünü doğru okuma ve doğru karar alma becerisi kazandırır.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-6 border-none"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-medium pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
