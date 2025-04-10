document.getElementById('saveKey').addEventListener('click', () => {
  const key = document.getElementById('licenseKey').value;
  chrome.storage.local.set({ licenseKey: key }, () => {
    document.getElementById('status').textContent = "License saved!";
  });
});
