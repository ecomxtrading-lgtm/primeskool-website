import PolicyPage from "./PolicyPage";

const Gizlilik = () => {
  return (
    <PolicyPage
      title="Gizlilik Politikası"
      content={
        <>
          <p>Son güncelleme: 02.11.2025</p>
          <p>
            Bu gizlilik politikası, PrimeSkool (“biz”, “platform”, “hizmet”) tarafından
            işletilen web sitesi ve bu site üzerinden sunulan hizmetler kapsamında toplanan
            kişisel verilerin nasıl işlendiğini açıklar. PrimeSkool, kullanıcı gizliliğini
            önemser ve kişisel verilerin korunmasına ilişkin yürürlükteki mevzuata (KVKK,
            GDPR ve ilgili platform politikaları dahil) uygun hareket eder.
          </p>

          <h3>1. Toplanan Kişisel Veriler</h3>
          <p>PrimeSkool üzerinden sunulan hizmetler kapsamında aşağıdaki veriler toplanabilir:</p>
          <ul>
            <li>Telefon numarası</li>
            <li>Ad ve soyad (varsa)</li>
            <li>E-posta adresi (varsa)</li>
            <li>Kullanıcı tarafından formlar aracılığıyla paylaşılan bilgiler</li>
          </ul>

          <h3>2. Kişisel Verilerin Toplanma Yöntemi</h3>
          <p>
            Kişisel veriler, kullanıcıların primeskool.com alan adı üzerinden yer alan
            formlara kendi rızalarıyla bilgi girmesi yoluyla toplanır.
          </p>

          <h3>3. Kişisel Verilerin İşlenme Amaçları</h3>
          <p>Toplanan kişisel veriler aşağıdaki amaçlarla işlenir:</p>
          <ul>
            <li>Kullanıcı ile iletişime geçilmesi</li>
            <li>WhatsApp üzerinden bilgilendirme veya otomatik mesaj gönderimi</li>
            <li>Kullanıcının talep ettiği hizmetin sunulması</li>
            <li>Hizmet kalitesinin geliştirilmesi</li>
            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
          </ul>

          <h3>4. WhatsApp ve Üçüncü Taraf Hizmetler</h3>
          <p>
            PrimeSkool, kullanıcıların talebi doğrultusunda WhatsApp mesajlaşma hizmeti
            aracılığıyla otomatik mesajlar gönderebilir.
          </p>
          <ul>
            <li>Telefon numaraları, yalnızca mesaj gönderimi amacıyla kullanılır.</li>
            <li>WhatsApp / Meta platformlarının kendi gizlilik politikaları da geçerlidir.</li>
            <li>Kişisel veriler izinsiz olarak üçüncü taraflarla paylaşılmaz.</li>
          </ul>

          <h3>5. Kişisel Verilerin Saklanma Süresi</h3>
          <p>
            Kişisel veriler, işlenme amacının gerektirdiği süre boyunca veya ilgili mevzuatta
            öngörülen süreler kadar saklanır. Saklama süresi sona erdiğinde veriler silinir,
            yok edilir veya anonim hale getirilir.
          </p>

          <h3>6. Kişisel Verilerin Aktarılması</h3>
          <ul>
            <li>Yasal yükümlülükler dışında</li>
            <li>Kullanıcının açık rızası olmadan</li>
            <li>üçüncü taraflarla paylaşılmaz.</li>
          </ul>
          <p>Teknik altyapı gereği, mesaj gönderimi amacıyla WhatsApp (Meta) servisleri kullanılabilir.</p>

          <h3>7. Kullanıcı Hakları</h3>
          <p>Kullanıcılar, kişisel verileriyle ilgili olarak:</p>
          <ul>
            <li>Hangi verilerin işlendiğini öğrenme</li>
            <li>Verilerin düzeltilmesini talep etme</li>
            <li>Verilerin silinmesini veya yok edilmesini isteme</li>
            <li>İşlemeye itiraz etme</li>
          </ul>

          <h3>8. Veri Silme Talebi</h3>
          <p>
            Kullanıcılar, kişisel verilerinin silinmesini talep etmek için
            <br />
            <strong>support@primeskool.com</strong>
            <br />
            adresine e-posta gönderebilir. Talepler, gerekli doğrulamalar yapıldıktan sonra en geç 30 gün
            içinde sonuçlandırılır.
          </p>

          <h3>9. Güvenlik</h3>
          <p>
            PrimeSkool, kişisel verilerin güvenliğini sağlamak için teknik ve idari tedbirler almaktadır.
            Yetkisiz erişim, veri kaybı veya kötüye kullanımın önlenmesi amaçlanır.
          </p>

          <h3>10. Değişiklikler</h3>
          <p>
            Bu gizlilik politikası gerektiğinde güncellenebilir. Güncellemeler web sitesi üzerinden
            yayımlandığı tarihte yürürlüğe girer.
          </p>

          <h3>11. İletişim</h3>
          <p>
            Bu gizlilik politikası ile ilgili sorularınız için:
            <br />
            📧 <strong>support@primeskool.com</strong>
          </p>
        </>
      }
    />
  );
};

export default Gizlilik;
