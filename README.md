# Randomise your loadout!

## Versions

### 0.0.1
**Initial**

- Added some default stuff (not everything) like a welcome screen.
  - should add an option (localstorage variable) that disables the welcome screen.
  - [ ] Done

- Welcome screen is still W.I.P. and will eventually have audio.
  - With audio on page-visit it might be handy to have an audio slider on first visit or an audio slider in a corner that is visible at all times.
  - [ ] Done

- contains a lot of animation work in CSS3, this is still W.I.P. as well.

### 0.1.0

- Added item.json with a few weapons/tools (will add the rest later).
  
- Also created a neat map to read all of the items in a single component.
  
- Added useScreen hook for later use, in case I run into some screen resize issues.

- Added scanlines across the page for a nice VHS effect and a separate css file with it.
  - Will make this optional in the future, as this can make small texts hard to read.
  - [ ] Done

-   Changed some of the text coloring to be the same as in GTFO.

### 0.1.1

- Changed selection color & background to fit the GTFO theme

- Made the title unselectable

### 0.2.0

- Added all the data in item.json.

- Added separate module for Randomized.js.

- Made the boxes 1 to 1 as in GTFO, mostly responsive
  - just need to wrap the boxes on smaller screen sizes.

- Added some colors to :root for the overall theme.

- Added booleans for welcome screen, localstorage key is next on the list for this.

- Also added useEffect with timeout
  - Will calculate the time for the animation to finish next time, this will remove the component on finish.