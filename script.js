// 📌【功能 1】複製文字（適用於 input）
function copyToClipboard() {
    let copyText = document.getElementById("copyText");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // 適用於行動裝置
    document.execCommand("copy");

    // 顯示「已複製」訊息
    let msg = document.getElementById("copyMsg");
    if (msg) {
        msg.classList.remove("hidden");
        setTimeout(() => msg.classList.add("hidden"), 2000);
    }
}

// 📌【功能 2】手機選單（漢堡選單）
const menuToggle = document.getElementById("mobile-menu");
const nav = document.querySelector("nav");

// 監聽點擊事件，切換「active」類別
menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});
