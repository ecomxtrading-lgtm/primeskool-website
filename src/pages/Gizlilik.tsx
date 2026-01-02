import PolicyPage from "./PolicyPage";

const Gizlilik = () => {
  return (
    <PolicyPage
      title="Gizlilik Politikası"
      content={
        <>
          <p>
            Bu gizlilik politikası, PrimeSkool (“biz”, “platform”, “hizmet”) tarafından işletilen web sitesi ve bu site üzerinden sunulan hizmetler kapsamında toplanan kişisel verilerin nasıl işlendiğini açıklamaktadır.
            PrimeSkool, kullanıcı gizliliğini önemser ve kişisel verilerin korunmasına ilişkin yürürlükteki mevzuata (KVKK, GDPR ve ilgili platform politikaları dahil) uygun hareket eder.
          </p>

          <h3>1. Toplanan Kişisel Veriler</h3>
          <p>
            PrimeSkool üzerinden sunulan hizmetler kapsamında aşağıdaki veriler toplanabilir:
            <br />
            Telefon numarası
            <br />
            Ad ve soyad
            <br />
            E-posta adresi
            <br />
            Kullanıcı tarafından formlar aracılığıyla paylaşılan bilgiler
          </p>

          <h3>2. Kişisel Verilerin Toplanma Yöntemi</h3>
          <p>Kişisel veriler, kullanıcıların primeskool.com alan adı üzerinden yer alan formlara kendi rızalarıyla bilgi girmesi yoluyla toplanır.</p>

          <h3>3. Kişisel Verilerin İşlenme Amaçları</h3>
          <p>
            Toplanan kişisel veriler aşağıdaki amaçlarla işlenir:
            <br />
            Kullanıcı ile iletişime geçilmesi
            <br />
            WhatsApp üzerinden bilgilendirme veya otomatik mesaj gönderimi
            <br />
            Kullanıcının talep ettiği hizmetin sunulması
            <br />
            Hizmet kalitesinin geliştirilmesi
            <br />
            Yasal yükümlülüklerin yerine getirilmesi
          </p>

          <h3>4. WhatsApp ve Üçüncü Taraf Hizmetler</h3>
          <p>
            PrimeSkool, kullanıcıların talebi doğrultusunda WhatsApp mesajlaşma hizmeti aracılığıyla otomatik mesajlar gönderebilir.
            <br />
            Telefon numaraları, yalnızca mesaj gönderimi amacıyla kullanılır
            <br />
            WhatsApp / Meta platformlarının kendi gizlilik politikaları da geçerlidir
            <br />
            Kişisel veriler izinsiz olarak üçüncü taraflarla paylaşılmaz
          </p>

          <h3>5. Kişisel Verilerin Saklanma Süresi</h3>
          <p>
            Kişisel veriler, işlenme amacının gerektirdiği süre boyunca veya ilgili mevzuatta öngörülen süreler kadar saklanır.
            Saklama süresi sona erdiğinde veriler silinir, yok edilir veya anonim hale getirilir.
          </p>

          <h3>6. Kişisel Verilerin Aktarılması</h3>
          <p>
            Kişisel veriler:
            <br />
            Yasal yükümlülükler dışında
            <br />
            Kullanıcının açık rızası olmadan
            <br />
            üçüncü taraflarla paylaşılmaz.
            <br />
            Teknik altyapı gereği, mesaj gönderimi amacıyla WhatsApp (Meta) servisleri kullanılabilir.
          </p>

          <h3>7. Kullanıcı Hakları</h3>
          <p>
            Kullanıcılar, kişisel verileriyle ilgili olarak:
            <br />
            Hangi verilerin işlendiğini öğrenme
            <br />
            Verilerin düzeltilmesini talep etme
            <br />
            Verilerin silinmesini veya yok edilmesini isteme
            <br />
            İşlemeye itiraz etme
          </p>

          <h3>8. Veri Silme Talebi</h3>
          <p>
            Kullanıcılar, kişisel verilerinin silinmesini talep etmek için <a href="mailto:support@primeskool.com">support@primeskool.com</a> adresine e-posta gönderebilir.
            Talepler, gerekli doğrulamalar yapıldıktan sonra en geç 30 gün içinde sonuçlandırılır.
          </p>

          <h3>9. Güvenlik</h3>
          <p>
            PrimeSkool, kişisel verilerin güvenliğini sağlamak için teknik ve idari tedbirler almaktadır. Yetkisiz erişim, veri kaybı veya kötüye kullanımın önlenmesi amaçlanır.
          </p>

          <h3>10. Değişiklikler</h3>
          <p>
            Bu gizlilik politikası gerektiğinde güncellenebilir. Güncellemeler web sitesi üzerinden yayımlandığı tarihte yürürlüğe girer.
          </p>

          <h3>11. İletişim</h3>
          <p>
            Bu gizlilik politikası ile ilgili sorularınız için:
            <br />
            📧 <a href="mailto:support@primeskool.com">support@primeskool.com</a>
          </p>
        </>
      }
    />
  );
};

export default Gizlilik;
