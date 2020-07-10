const textExpansions = {}

textExpansions.rmdt = {
  alias:     "dt",
  name:      "Roam Daily Note Template",
  url:       /roamresearch\.com/,
  expansion: `
- # What are you [[Noticing]] this week?
- Embed Daily Plan here
- # Notes
    -
- # [[to-read]]
    -
- # Daily [[habit]]s
    - [[Gratitude Journaling]]
        -
    - [[Do something kind every day]]
        -
    - [[Use Your Signature Strengths]]
        -
  `,
}

textExpansions.rmbg = {
  alias:     "bg",
  name:      "Roam Blog Page Template",
  url:       /roamresearch\.com/,
  expansion: `
- [link here](https://arxiv.org/abs/1802.06070)
- authors:: 
- published:: 
- recommended by:: 
- Tags:: #blogpost 
- # Notes
  `,
}

const addTextExpansions = (textExpansionSettings, normalModeExpansionLeader) => {
  Object.values(textExpansionSettings).forEach((s) => {
    mapkey(
      `${normalModeExpansionLeader}${s.alias}`,
      `Normal Mode Text expanding ${s.name}`,
      () => window.navigator.clipboard.writeText(s.expansion),
      { domain: s.domain },
    )
    imapkey(
      `xx${s.alias}`,
      `Insert Mode Text expanding ${s.name}`,
      () => window.navigator.clipboard.writeText(s.expansion),
      { domain: s.domain },
    )
  })
}

module.exports = { textExpansions, addTextExpansions }
