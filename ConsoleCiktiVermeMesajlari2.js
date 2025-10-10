//window objesinin tüm özelliklerini gösterir.
console.dir(window);

//mevcut sayfanın alan adı bilgisini yazdırır.
console.dir(window.document.location.host);

//documentURL sini yazdırınız.
console.dir(window.document.documentURI);

//port numarasını yazdırınız
console.dir(window.location.port);


//Document write eski bir yöntem olduğu için üzerini çizer onun yerine writeln kullanılabilir.
document.writeln("Çisem Yaşar"+"<br>"); //string ifade
document.writeln(18 +"<br>"); //integer
document.writeln(3.5 +"<br>"); //float
document.writeln(true +"<br>"); //boolean
document.writeln(null +"<br>"); //obje


//Alert, prompt, confirm() Diyalog kutuları

//alert() uyarı mesajı veriyor

alert("Merhaba Çisem");
alert("İşleme devam etmek için lütfen bekleyiniz");

//prompt() kullanıcıdan bilgi alıyor

let isim = prompt("İsminizi Giriniz:");
let soyisim = prompt("Soyisminizi Giriniz:")
console.log("İsminiz:"+isim);
console.log("Soyisminiz:"+soyisim);

//confirm onay kutucuğu
let sonuc = confirm("Silmek istediğinize emin misiniz?");
console.log(sonuc);

//SweeatAlert2 kullanımı
Swal.fire("Merhaba Çisem");



