function encrypt() {
  const text = document.getElementById("inputText").value;
  const method = document.getElementById("method").value;
  let result = "";

  if (method === "base64") {
    result = btoa(text);
  } else if (method === "rot13") {
    result = text.replace(/[a-zA-Z]/g, function (c) {
      const base = c <= "Z" ? 65 : 97;
      return String.fromCharCode(((c.charCodeAt(0) - base + 13) % 26) + base);
    });
  } else if (method === "sha256") {
    result = shaCrypto(text, "SHA-256");
  } else if (method === "sha512") {
    result = shaCrypto(text, "SHA-512");
  }

  result.then ? result.then(res => document.getElementById("outputText").value = res) :
                document.getElementById("outputText").value = result;
}

function shaCrypto(message, algorithm) {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  return crypto.subtle.digest(algorithm, data).then(hash => {
    return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
  });
}

function copyResult() {
  const output = document.getElementById("outputText");
  output.select();
  document.execCommand("copy");
  alert("📋 Скопировано!");
}

function showTab(tabId) {
  const contents = document.querySelectorAll(".tab-content");
  contents.forEach(c => c.style.display = "none");

  const tabs = document.querySelectorAll(".tab-button");
  tabs.forEach(t => t.classList.remove("active"));

  document.getElementById(tabId).style.display = "block";
  document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add("active");
}
