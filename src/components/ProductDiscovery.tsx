import { Zap, TrendingUp, Radar } from "lucide-react";
import DuotoneIcon from "./ui/DuotoneIcon";
import ImagePlaceholder from "./ui/ImagePlaceholder";

const ProductDiscovery = () => {
  return (
    <section className="section-spacing">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                İYİ ÜRÜN PARA KAZANDIRIR
              </p>
              <h2 className="heading-section mb-6">
                Piyasaya Yeni Giren Ürünleri{" "}
                <span className="text-accent">Herkesten Önce</span> Keşfet
              </h2>
              <p className="body-default text-muted-foreground">
                Kazandıran ürünler herkes fark ettiğinde değil, henüz fark edilmeden önce bulunur. Bu sistemle; pazara yeni giren, rekabeti düşük ve ölçeklenme potansiyeli yüksek ürünleri kolayca tespit eder, doğru zamanda doğru hamleyi yaparsın.
              </p>
            </div>

            <div className="space-y-4">
              <div className="glass-card p-5 flex items-start gap-4 group">
                <DuotoneIcon icon={Zap} size="sm" />
                <div>
                  <h4 className="font-semibold mb-1">Erken Sinyaller</h4>
                  <p className="text-sm text-muted-foreground">
                    Yeni listelenen ve yükselme potansiyeli gösteren ürünleri erken aşamada fark edersin.
                  </p>
                </div>
              </div>

              <div className="glass-card p-5 flex items-start gap-4 group">
                <DuotoneIcon icon={TrendingUp} size="sm" />
                <div>
                  <h4 className="font-semibold mb-1">Rekabet Avantajı</h4>
                  <p className="text-sm text-muted-foreground">
                    Düşük rekabet, doğru fiyat ve hızlı aksiyonla pazarda avantaj yakalarsın.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="animate-slide-in-right">
            <ImagePlaceholder
              id="IMG-04"
              ratio="1:1"
              icon={Radar}
              brief="Radar, sinyal dalgaları, küçük veri noktaları, yükselen trend çizgisi — erken sinyaller / keşif / fırsat"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDiscovery;
