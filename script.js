// Function to copy content to clipboard
function copyContent() {
    // Get the text field
    var content = document.getElementById("content-to-copy");

    // Create a temporary input element
    var tempInput = document.createElement("input");
    tempInput.value = content.textContent || content.innerText;  // Get the content from the paragraph
    document.body.appendChild(tempInput);

    // Select the content
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);  // For mobile devices

    // Execute the copy command
    document.execCommand("copy");

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Optional: show an alert or a message
    alert("內容已複製！");

    document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle"); // 取得漢堡圖示按鈕
    const navMenu = document.getElementById("nav-menu"); // 取得手機選單

    // 監聽漢堡圖示的點擊事件
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active"); // 切換選單顯示與隱藏
    });

    // 點擊畫面其他地方時，關閉選單（如果開啟的話）
    document.addEventListener("click", function (event) {
        if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove("active"); // 點擊外部時關閉選單
        }
    });
});
}
