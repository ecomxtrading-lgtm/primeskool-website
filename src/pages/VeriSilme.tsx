import PolicyPage from "./PolicyPage";

const VeriSilme = () => {
  return (
    <PolicyPage
      title="Kullanıcı Verilerinin Silinmesi"
      content={
        <>
          <p>Son güncelleme: 02.11.2025</p>
          <p>
            PrimeSkool, kullanıcı gizliliğine önem verir ve kişisel verilerin korunmasına
            ilişkin yürürlükteki mevzuata uygun hareket eder. Bu sayfa, PrimeSkool tarafından
            işlenen kişisel verilerin silinmesi veya yok edilmesine ilişkin süreçleri
            açıklamaktadır.
          </p>

          <h3>1. Hangi Veriler Silinebilir?</h3>
          <p>Kullanıcı talebi doğrultusunda aşağıdaki kişisel veriler silinebilir:</p>
          <ul>
            <li>Telefon numarası</li>
            <li>Ad ve soyad (varsa)</li>
            <li>E-posta adresi (varsa)</li>
            <li>PrimeSkool platformu üzerinden sağlanan diğer kullanıcı bilgileri</li>
          </ul>
          <p>Yasal zorunluluklar kapsamında saklanması gereken veriler bu kapsama dahil değildir.</p>

          <h3>2. Veri Silme Talebi Nasıl Yapılır?</h3>
          <p>
            Kullanıcılar, kişisel verilerinin silinmesini talep etmek için aşağıdaki
            yöntemlerden birini kullanabilir:
          </p>
          <ul>
            <li>
              Kayıtlı e-posta adresleri üzerinden <strong>support@primeskool.com</strong>{" "}
              adresine
            </li>
            <li>
              Konu başlığı “Kişisel Veri Silme Talebi” olacak şekilde e-posta göndermeleri
              yeterlidir.
            </li>
          </ul>
          <p>Talepte, kullanıcıya ait temel doğrulama bilgilerinin yer alması gerekebilir.</p>

          <h3>3. Değerlendirme ve Süreç</h3>
          <p>Veri silme talepleri:</p>
          <ul>
            <li>Kimlik doğrulaması yapıldıktan sonra</li>
            <li>En geç 30 gün içerisinde</li>
            <li>Değerlendirilir ve sonuçlandırılır.</li>
          </ul>

          <h3>4. Veri Silme Yöntemi</h3>
          <p>Talep onaylandıktan sonra kişisel veriler:</p>
          <ul>
            <li>Sistemlerden kalıcı olarak silinir</li>
            <li>Yedekler üzerinden erişilemez hale getirilir</li>
            <li>Teknik olarak mümkün olmayan durumlarda anonimleştirilir</li>
          </ul>

          <h3>5. Üçüncü Taraf Hizmetler</h3>
          <p>
            PrimeSkool, WhatsApp (Meta) gibi üçüncü taraf hizmetler aracılığıyla iletişim
            sağlayabilir. Bu platformlar üzerindeki verilerin silinmesi, ilgili üçüncü
            tarafın kendi politikalarına tabi olabilir.
          </p>

          <h3>6. Yasal Yükümlülükler</h3>
          <p>
            Yürürlükteki mevzuat gereği saklanması zorunlu olan veriler, ilgili süreler
            boyunca muhafaza edilir ve bu veriler için silme talebi yerine getirilmez.
          </p>

          <h3>7. İletişim</h3>
          <p>
            Kullanıcı verilerinin silinmesi ile ilgili her türlü soru ve talep için:
            <br />
            📧 <strong>support@primeskool.com</strong>
          </p>
        </>
      }
    />
  );
};

export default VeriSilme;
