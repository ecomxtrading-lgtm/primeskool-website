import PolicyPage from "./PolicyPage";

const HizmetSartlari = () => {
  return (
    <PolicyPage
      title="Hizmet Şartları"
      content={
        <>
          <p>
            Bu şartlar, Prime Skool hizmetlerini kullanırken geçerli hak ve
            sorumluluklarını belirler. Platformu kullanarak bu şartları kabul etmiş
            sayılırsın.
          </p>
          <ul>
            <li>Hesap bilgilerini doğru ve güncel tutmakla yükümlüsün.</li>
            <li>Eğitim içerikleri izinsiz kopyalanamaz veya dağıtılamaz.</li>
            <li>Platform, gerektiğinde hizmetleri güncelleme veya sonlandırma hakkını saklı tutar.</li>
          </ul>
          <p>
            Destek veya soruların için iletisim@primeskool.com adresine yazabilirsin.
          </p>
        </>
      }
    />
  );
};

export default HizmetSartlari;
