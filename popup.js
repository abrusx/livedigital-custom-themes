document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("themeToggle")
  const body = document.body

  chrome.storage.sync.get(["theme"], (result) => {
    const isDark = result.theme === "dark"
    toggle.checked = isDark
    body.className = isDark ? "dark" : "light"
  })

  toggle.addEventListener("change", () => {
    const theme = toggle.checked ? "dark" : "light"
    chrome.storage.sync.set({ theme }, () => {
      body.className = theme
    })
  })
})