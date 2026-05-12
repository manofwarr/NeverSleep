const mapLang = new Map([
  ["en", "Relax, leaving this page open will help your device never sleep."],
  ["es", "Relájese, mantener esta página abierta evitará que su dispositivo entre en modo de suspensión."],
  ["fr", "Détendez-vous, garder cette page ouverte empêchera votre appareil de dormir."],
  ["pt", "Relaxe, mantendo esta página aberta vai impedir o seu computador de dormir."],
  ["de", "Entspannen Sie sich, das Offenhalten dieser Seite verhindert, dass Ihr Gerät in den Schlafmodus wechselt."],
  ["it", "Rilassati, mantenere questa pagina aperta impedirà al dispositivo di andare in standby."],
  ["ru", "Расслабьтесь, открытая страница предотвратит переход устройства в спящий режим."],
  ["zh", "放松，保持此页面打开将防止您的设备进入睡眠模式。"],
  ["ja", "リラックスして、このページを開いたままにすると、デバイスがスリープ状態になるのを防ぎます。"],
  ["ko", "편안히 계세요, 이 페이지를 열어두면 기기가 절전 모드로 전환되지 않습니다."],
  ["ar", "استرخِ، إبقاء هذه الصفحة مفتوحة سيمنع جهازك من الدخول في وضع السكون."],
  ["hi", "आराम करें, इस पृष्ठ को खुला रखने से आपका डिवाइस स्लीप मोड में नहीं जाएगा।"],
  ["tr", "Rahatlayın, bu sayfayı açık tutmak cihazınızın uyku moduna geçmesini engelleyecektir."],
  ["nl", "Ontspan, het openhouden van deze pagina voorkomt dat uw apparaat in de slaapstand gaat."],
  ["sv", "Koppla av, att hålla den här sidan öppen förhindrar att din enhet går i viloläge."],
  ["pl", "Zrelaksuj się, otwarcie tej strony zapobiegnie przejściu urządzenia w tryb uśpienia."],
]);


function processMessage() {
	const language = (navigator.language || navigator.userLanguage).substr(0, 2)
	document.getElementById("message").innerHTML = mapLang.has(language) ? mapLang.get(language) : mapLang.get("en");
};

window.addEventListener("load", function() {
	processMessage();
});

document.addEventListener("focus", function(e) {
    const favicon = document.querySelector("link[rel='icon']");
    
    if (e.detail === "in") {
        document.title = "NeverSleep: Enabled";
        document.body.style.backgroundColor = 'rgba(103, 168, 111, 1)';
        favicon.href = "img/neversleep-awake.png?v=" + Date.now();
    } else {
        document.title = "NeverSleep: Disabled";
        document.body.style.backgroundColor = 'rgba(232, 56, 56, 1)';
        favicon.href = "img/neversleep-asleep.png?v=" + Date.now();
    }
});

