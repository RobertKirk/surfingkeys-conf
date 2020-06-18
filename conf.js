const util = require("./util")
const keys = require("./keys")
const completions = require("./completions")

// ---- Settings ----//
util.addSettings({
  hintAlign:                "left",
  omnibarSuggestionTimeout: 500,
  scrollStepSize:           175,
  richHintsForKeystroke:    1,
  blacklistPattern:         /alt.org\/*/,
  theme:                    `
    .sk_theme {
      font-family: Input Sans Condensed, Charcoal, sans-serif;
      font-size: 10pt;
      background: #002B36;
      color: #93A1A1;
    }
    .sk_theme input {
      color: #93A1A1;
    }
    .sk_theme .url {
      color: #268BD2;
    }
    .sk_theme .annotation {
      color: #93A1A1;
    }
    .sk_theme kbd {
      background: #EEE8D5;
      color: #111;
    }
    .sk_theme .omnibar_highlight {
      color: #CB4B16;
    }
    .sk_theme .omnibar_folder {
      color: #2AA198;
    }
    .sk_theme .omnibar_timestamp {
      color: #657B83;
    }
    .sk_theme .omnibar_visitcount {
      color: #B58900;
    }
    .sk_theme .prompt, .sk_theme .resultPage {
      color: #93A1A1;
    }
    .sk_theme .feature_name {
      color: #859900;
    }
    .sk_theme .separator {
      color: #859900;
    }
    .sk_theme #sk_omnibarSearchResult ul li:nth-child(odd) {
      background: #002F3B;
    }
    .sk_theme #sk_omnibarSearchResult ul li.focused {
      background: #083D4A;
    }
    #sk_status, #sk_find {
      font-size: 12pt;
    }
    #sk_keystroke {
      background: #002B36;
    }
    .expandRichHints span.annotation {
      color: #93A1A1;
    };
  `,
})

Hints.characters = "asdfghjkl;eruitybnvm,c"

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

// eslint-disable-next-line
unmapAllExcept(
  ["j", "k", "J", "K", "H", "L", "S", "D", "i", "gi", "gg", "G", "PgUp", "PgDown"],
  /roamresearch.com/,
)
// eslint-disable-next-line
unmapAllExcept(["J", "K", "H", "L", "S", "D"], /mail.google.com|calendar.google.com/)

module.exports = { siteleader, searchleader }
