const lightTheme = {
  "--ld-bg": "#fbfbfb",
  "--ld-primary": "#1c1c1c",
  "--ld-contrast": "#fbfbfb",
  "--ld-bgContrast": "#3c3c3c",
  "--ld-primaryTransparency": "#1c1c1ccc",
  "--ld-secondaryBase": "#717171",
  "--ld-secondary01": "#F2F0EDff",
  "--ld-secondary02": "#E5E4E1ff",
  "--ld-secondary03": "#3e3b38",
  "--ld-accentBase": "#414246",
  "--ld-accent01": "#E5E4E1ff",
  "--ld-accent02": "#cccac3",
  "--ld-accent03": "#8a6231",
  "--ld-accent04": "#484138",
  "--ld-accent05": "#484138",
  "--ld-tertiaryBase": "#1399FA",
  "--ld-tertiary01": "#E7F5FE",
  "--ld-errorBase": "#ad1100",
  "--ld-error01": "#a75e56",
  "--ld-error02": "#9b3327",
  "--ld-error03": "#921003",
  "--ld-error04": "#5F0A01",
  "--ld-successBase": "#23b248",
  "--ld-success01": "#2b7a09ff",
  "--ld-success02": "#2b7a09ff",
  "--ld-success03": "#2b7a09ff",
  "--ld-warningBase": "#FF9900",
  "--ld-warning01": "#FFF4E5",
  "--ld-warning02": "#FFD495",
  "--ld-warning03": "#765128",
  "--ld-purpleBase": "#C0437F",
  "--ld-purple01": "#F2D9E5",
  "--ld-purple02": "#DFA1BF",
  "--ld-purple03": "#8C315D",
  "--ld-reaction-lilac": "#3431D0",
  "--ld-reaction-lilac-light-01": "#ABA9EB",
  "--ld-reaction-lilac-light-02": "#EAEAFA",
  "--ld-reaction-orange": "#FF9900",
  "--ld-reaction-orange-light-01": "#FFD495",
  "--ld-reaction-orange-light-02": "#FFF4E5",
  "--ld-reaction-pink": "#FF005C",
  "--ld-reaction-pink-light-02": "#FFE5EE",
  "--ld-reaction-red": "#F32A2A",
  "--ld-reaction-red-light-01": "#FE9FA9",
  "--ld-reaction-red-light-02": "#FDE9E9",
  "--ld-reaction-purple-03": "#8C315D",
  "--ld-reaction-accent-05": "#1A2657",
  "--ld-reaction-error-04": "#5F0A01",
  "--ld-reaction-warning-03": "#765128",
  "--ld-avatarBurgundy": "#554e46",
  "--ld-avatarRed": "#554e46",
  "--ld-avatarDarkPink": "#554e46",
  "--ld-avatarPink": "#554e46",
  "--ld-avatarGold": "#554e46",
  "--ld-avatarNavyGreen": "#554e46",
  "--ld-avatarNavyBlue": "#554e46",
  "--ld-avatarPurple": "#554e46",
  avatarBackground: "#737680ff"
}

const darkTheme = {
  "--ld-bg": "#232220",
  "--ld-primary": "#ffffff",
  "--ld-contrast": "#dcd8d4",
  "--ld-bgContrast": "#333230",
  "--ld-primaryTransparency": "#958d7eb3",
  "--ld-secondaryBase": "#F1F1F4",
  "--ld-secondary01": "#333230",
  "--ld-secondary02": "#292928b0",
  "--ld-secondary03": "#807c76",
  "--ld-accentBase": "#a77741",
  "--ld-accent01": "#333230",
  "--ld-accent02": "#45423c",
  "--ld-accent03": "#8f7251",
  "--ld-accent04": "#aaa094",
  "--ld-accent05": "#aaa094",
  "--ld-tertiaryBase": "#1399FA",
  "--ld-tertiary01": "#1B3655",
  "--ld-errorBase": "#ad1100",
  "--ld-error01": "#5F0A01",
  "--ld-error02": "#9b3327",
  "--ld-error03": "#F07D70",
  "--ld-error04": "#FCE5E2",
  "--ld-successBase": "#dabb00",
  "--ld-success01": "#1F5D2F",
  "--ld-success02": "#2f9005",
  "--ld-success03": "#CDEED4",
  "--ld-warningBase": "#FC9E22",
  "--ld-warning01": "#765128",
  "--ld-warning02": "#FFD495",
  "--ld-warning03": "#FFF4E5",
  "--ld-purpleBase": "#C0437F",
  "--ld-purple01": "#8C315D",
  "--ld-purple02": "#DFA1BF",
  "--ld-purple03": "#F2D9E5",
  "--ld-reaction-lilac": "#3431D0",
  "--ld-reaction-lilac-light-01": "#ABA9EB",
  "--ld-reaction-lilac-light-02": "#EAEAFA",
  "--ld-reaction-orange": "#FF9900",
  "--ld-reaction-orange-light-01": "#FFD495",
  "--ld-reaction-orange-light-02": "#FFF4E5",
  "--ld-reaction-pink": "#FF005C",
  "--ld-reaction-pink-light-02": "#FFE5EE",
  "--ld-reaction-red": "#F32A2A",
  "--ld-reaction-red-light-01": "#FE9FA9",
  "--ld-reaction-red-light-02": "#FDE9E9",
  "--ld-reaction-purple-03": "#8C315D",
  "--ld-reaction-accent-05": "#1A2657",
  "--ld-reaction-error-04": "#5F0A01",
  "--ld-reaction-warning-03": "#765128",
  "--ld-avatarBurgundy": "#766e66",
  "--ld-avatarRed": "#766e66",
  "--ld-avatarDarkPink": "#766e66",
  "--ld-avatarPink": "#766e66",
  "--ld-avatarGold": "#766e66",
  "--ld-avatarNavyGreen": "#766e66",
  "--ld-avatarNavyBlue": "#766e66",
  "--ld-avatarPurple": "#766e66",
  avatarBackground: "#8f7251"
}

function applyTheme(theme) {
  const root = document.documentElement

  for (const [variable, value] of Object.entries(theme)) {
    if (variable !== "avatarBackground") {
      root.style.setProperty(variable, value)
    }
  }

  function updateAvatars() {
    const avatarDivs = document.querySelectorAll('div[data-id="Avatar-index-AvatarRoot"]')
    if (avatarDivs.length > 0) {
      avatarDivs.forEach((div, index) => {
        div.style.setProperty("background-color", theme.avatarBackground, "important")
        console.log(`Avatar div ${index + 1} styled with background-color: ${theme.avatarBackground}`)
      })
    } else {
      console.log("No avatar divs found")
    }
  }

  updateAvatars()

  const observer = new MutationObserver(() => {
    updateAvatars()
  })
  observer.observe(document.body, { childList: true, subtree: true })
}

// applyTheme(lightTheme)

chrome.storage.sync.get(["theme"], (result) => {
  const selectedTheme = result.theme === "dark" ? darkTheme : lightTheme
  applyTheme(selectedTheme)
});

chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === "sync" && changes.theme) {
    const selectedTheme = changes.theme.newValue === "dark" ? darkTheme : lightTheme;
    applyTheme(selectedTheme)
  }
})