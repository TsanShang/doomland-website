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
}
