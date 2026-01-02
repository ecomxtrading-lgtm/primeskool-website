import PolicyPage from "./PolicyPage";

const VeriSilme = () => {
  return (
    <PolicyPage
      title="Kullanıcı Verilerinin Silinmesi"
      content={
        <>
          <p>
            Kişisel verilerinin silinmesini talep etmek için iletisim@primeskool.com
            adresine e-posta gönderebilirsin. Talebini aldıktan sonra kimlik doğrulaması
            yapar ve yasal süreler içinde ilgili verileri siler veya anonim hale getiririz.
          </p>
          <ul>
            <li>Silme talebin KVKK ve ilgili mevzuata uygun olarak değerlendirilir.</li>
            <li>Hukuki saklama yükümlülüğü olan veriler gerekli süre sonunda imha edilir.</li>
            <li>Silme işlemi tamamlandığında sana bilgi verilir.</li>
          </ul>
          <p>
            Daha fazla bilgi için Gizlilik Politikası’nı inceleyebilir veya bize yazabilirsin.
          </p>
        </>
      }
    />
  );
};

export default VeriSilme;
