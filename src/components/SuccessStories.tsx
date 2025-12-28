import VideoPlaceholder from "./ui/VideoPlaceholder";

const SuccessStories = () => {
  return (
    <section id="success" className="section-spacing-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="heading-section mb-4">
            BAŞARI <span className="text-accent">HİKAYELERİ</span>
          </h2>
          <p className="body-default text-muted-foreground">
            Topluluk içinden gerçek yolculuklar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <VideoPlaceholder
            id="VIDEO-01"
            caption="(İsim/Marka) — Başarı hikayesi 1"
          />
          <VideoPlaceholder
            id="VIDEO-02"
            caption="(İsim/Marka) — Başarı hikayesi 2"
          />
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
