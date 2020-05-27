const util = require("./util")
const keys = require("./keys")
const completions = require("./completions")

// ---- Settings ----//
util.addSettings({
  hintAlign:                "left",
  omnibarSuggestionTimeout: 500,
  scrollStepSize:           225,
  richHintsForKeystroke:    1,
  blacklistPattern:         /alt.org\/*/,
  theme:                    `
    /* Disable RichHints CSS animation */
    .expandRichHints {
        animation: 0s ease-in-out 1 forwards expandRichHints;
    }
    .collapseRichHints {
        animation: 0s ease-in-out 1 forwards collapseRichHints;
    }
  `,
})

Hints.characters = "asdfghjkl;eruitybnvm,c"

// eslint-disable-next-line
unmapAllExcept(
  ["j", "k", "J", "K", "H", "L", "S", "D", "i", "gi", "gg", "G", "PgUp", "PgDown"],
  /roamresearch.com/,
)
// eslint-disable-next-line
unmapAllExcept(["J", "K", "H", "L", "S", "D"], /mail.google.com|calendar.google.com/)

// map("J", "R")
// map("K", "E")

// Leader for site-specific mappings
const siteleader = ","

// Leader for OmniBar searchEngines
const searchleader = "<Space>"

// Process mappings and completions
// See ./keys.js and ./completions.js
util.rmMaps(keys.unmaps.mappings)
util.rmSearchAliases(keys.unmaps.searchAliases)
util.processMaps(keys.maps, keys.aliases, siteleader)
util.processCompletions(completions, searchleader)

module.exports = { siteleader, searchleader }
