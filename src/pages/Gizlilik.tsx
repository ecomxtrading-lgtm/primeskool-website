import PolicyPage from "./PolicyPage";

const Gizlilik = () => {
  return (
    <PolicyPage
      title="Gizlilik Politikası"
      content={
        <>
          <p>
            Prime Skool olarak kişisel verilerinin güvenliğine önem veriyoruz. Bu sayfa,
            hangi verileri topladığımızı, nasıl sakladığımızı ve hangi amaçlarla
            kullandığımızı açıklar.
          </p>
          <ul>
            <li>Toplanan veriler: ad, e-posta, telefon, onay bilgileri.</li>
            <li>Amacımız: kayıt işlemleri, eğitim bilgilendirmeleri ve destek.</li>
            <li>Veriler, yasal yükümlülükler ve meşru menfaatler kapsamında saklanır.</li>
          </ul>
          <p>
            KVKK kapsamındaki hakların için iletisim@primeskool.com adresinden bize
            ulaşabilirsin. Gizlilik uygulamalarımızda değişiklik olduğunda bu sayfayı
            güncelleriz.
          </p>
        </>
      }
    />
  );
};

export default Gizlilik;
