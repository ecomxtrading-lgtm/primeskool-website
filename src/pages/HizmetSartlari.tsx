import PolicyPage from "./PolicyPage";

const HizmetSartlari = () => {
  return (
    <PolicyPage
      title="Hizmet Şartları"
      content={
        <>
          <p>Son güncelleme: 02.11.2025</p>
          <p>
            Bu Hizmet Şartları, PrimeSkool (“platform”, “biz”) tarafından sunulan eğitim
            içerikleri, dijital hizmetler ve bunlara bağlı iletişim araçlarının kullanımına
            ilişkin koşulları düzenler. PrimeSkool platformunu kullanan herkes bu şartları
            kabul etmiş sayılır.
          </p>

          <h3>1. Hizmetin Kapsamı</h3>
          <p>
            PrimeSkool; çevrim içi eğitim içerikleri, dijital materyaller, bilgilendirme
            hizmetleri ve eğitim süreçlerini destekleyici iletişim kanallarından oluşan bir
            eğitim platformudur. Platform kapsamında, kullanıcılarla iletişim kurmak amacıyla
            WhatsApp gibi mesajlaşma servisleri kullanılabilir.
          </p>

          <h3>2. Kullanıcı Yükümlülükleri</h3>
          <p>Kullanıcılar:</p>
          <ul>
            <li>Platforma sağladıkları bilgilerin doğru ve güncel olduğunu,</li>
            <li>Eğitim içeriklerini yalnızca kişisel kullanım amacıyla kullandıklarını,</li>
            <li>
              Platformu yürürlükteki mevzuata ve genel ahlak kurallarına uygun şekilde
              kullandıklarını
            </li>
            kabul eder.
          </ul>

          <h3>3. İletişim ve Bildirimler</h3>
          <p>
            PrimeSkool, eğitim süreçleri kapsamında eğitim bilgilendirmeleri, hatırlatma ve
            duyurular, kullanıcı taleplerine yanıt amaçlarıyla kullanıcılarla WhatsApp veya
            benzeri iletişim kanalları üzerinden iletişime geçebilir. Bu iletişimler ticari
            spam amacı taşımaz.
          </p>

          <h3>4. Yasaklı Kullanımlar</h3>
          <ul>
            <li>Platformu hukuka aykırı şekilde kullanamazsın.</li>
            <li>Eğitim içeriklerini izinsiz çoğaltamaz veya paylaşamazsın.</li>
            <li>Platform altyapısını kötüye kullanamazsın.</li>
          </ul>
          <p>Bu tür durumlarda PrimeSkool, gerekli gördüğü tedbirleri alma hakkını saklı tutar.</p>

          <h3>5. Üçüncü Taraf Hizmetler</h3>
          <p>
            PrimeSkool, WhatsApp (Meta) gibi üçüncü taraf servislerden faydalanabilir. Bu
            servislerin kendi kullanım şartları ve gizlilik politikaları ayrıca geçerlidir.
          </p>

          <h3>6. Hizmetin Değiştirilmesi</h3>
          <p>
            PrimeSkool, sunulan eğitim içeriklerini, platform özelliklerini veya iletişim
            yöntemlerini önceden bildirimde bulunmaksızın değiştirme hakkını saklı tutar.
          </p>

          <h3>7. Sorumluluğun Sınırlandırılması</h3>
          <ul>
            <li>Eğitim içeriklerinin kesin sonuç garantisi verdiğini taahhüt etmez.</li>
            <li>Üçüncü taraf servislerden kaynaklanan teknik aksaklıklardan sorumlu tutulamaz.</li>
          </ul>

          <h3>8. Fikri Mülkiyet Hakları</h3>
          <p>
            PrimeSkool’a ait tüm eğitim içerikleri, videolar, metinler ve dijital materyaller
            fikri mülkiyet kapsamındadır. İzinsiz kullanılamaz, çoğaltılamaz veya dağıtılamaz.
          </p>

          <h3>9. Hizmetin Sonlandırılması</h3>
          <p>
            Kullanıcılar, platformu kullanmayı diledikleri zaman bırakabilir. PrimeSkool, bu
            şartlara aykırı kullanım halinde erişimi sınırlandırabilir.
          </p>

          <h3>10. Uygulanacak Hukuk</h3>
          <p>Bu hizmet şartları, Türkiye Cumhuriyeti hukuku çerçevesinde uygulanır.</p>

          <h3>11. Değişiklikler</h3>
          <p>
            Bu hizmet şartları gerektiğinde güncellenebilir. Güncel versiyon web sitesi
            üzerinden yayımlandığı tarihte yürürlüğe girer.
          </p>

          <h3>12. İletişim</h3>
          <p>
            Bu hizmet şartları ile ilgili sorular için:
            <br />
            📧 <strong>support@primeskool.com</strong>
          </p>
        </>
      }
    />
  );
};

export default HizmetSartlari;
