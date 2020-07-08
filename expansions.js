const textExpansions = {}

textExpansions.rmdt = {
  alias:     "rmdt",
  name:      "Roam Daily Note Template",
  url:       /roamresearch\.com/,
  expansion: `
- # Daily Plan
    -
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
  alias:     "rmbg",
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

const addTextExpansions = (textExpansionSettings) => {
  Object.values(textExpansionSettings).forEach((s) => {
    imapkey(
      s.alias,
      `Text expanding ${s.name}`,
      () => window.navigator.clipboard.writeText(s.expansion),
      { domain: s.domain },
    )
  })
}

module.exports = { textExpansions, addTextExpansions }
