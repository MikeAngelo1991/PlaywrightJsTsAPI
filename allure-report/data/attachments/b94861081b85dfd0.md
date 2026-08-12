# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: MoreValidations.spec.js >> visual
- Location: tests\MoreValidations.spec.js:46:1

# Error details

```
Error: expect(Buffer).toMatchSnapshot(expected) failed

  392 pixels (ratio 0.01 of all image pixels) are different.

  Snapshot: landing.png

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - main [ref=e4]:
    - article [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e11]:
          - link "Learn about DuckDuckGo" [ref=e13] [cursor=pointer]:
            - /url: /about
          - search "Search the web with DuckDuckGo" [ref=e18]:
            - generic [ref=e19]:
              - combobox "Search with DuckDuckGo" [active] [ref=e22]
              - radiogroup [ref=e25]:
                - generic [ref=e27] [cursor=pointer]:
                  - radio "Search Search" [checked]
                  - generic "Search" [ref=e28]:
                    - button "Search" [ref=e29]
                    - text: Search
                - generic [ref=e33] [cursor=pointer]:
                  - radio "Ask AI Ask AI"
                  - generic "Ask AI" [ref=e34]:
                    - button "Ask AI" [ref=e35]
                    - text: Ask AI
          - generic [ref=e40]:
            - link "Duck.ai" [ref=e41] [cursor=pointer]:
              - /url: https://duck.ai/?origin=funnel_home_website
            - navigation "navigation" [ref=e47]:
              - list [ref=e48]:
                - listitem [ref=e49]:
                  - generic [ref=e50]: Main navigation menu closed
                  - button "Menu" [ref=e51] [cursor=pointer]
        - generic [ref=e56]:
          - heading "Switch to DuckDuckGo. It’s private and free!" [level=1] [ref=e57]: Switch to DuckDuckGo.It’s privateand free!
          - list [ref=e59]:
            - listitem [ref=e60]:
              - paragraph [ref=e62]: Make DuckDuckGo your default search engine.
              - link "Set As Default Search" [ref=e63] [cursor=pointer]:
                - /url: https://chromewebstore.google.com/detail/duckduckgo-search/jhagicoeeifaamcacdeifbjacnbgbeip
            - listitem [ref=e65]:
              - paragraph [ref=e67]: Best Privacy
              - paragraph [ref=e69]: Get our free browser for even more privacy.
              - link "Download Browser" [ref=e70] [cursor=pointer]:
                - /url: https://duckduckgo.com/windows?origin=funnel_home_website__hero
          - paragraph [ref=e75]: Trusted by tens of millions worldwide!
        - button "AI Settings" [ref=e77] [cursor=pointer]
        - button "Scroll down to learn more" [ref=e88] [cursor=pointer]
      - generic [ref=e92]:
        - generic [ref=e95]:
          - heading "Discover more from DuckDuckGo." [level=2] [ref=e96]
          - generic [ref=e97]:
            - button [ref=e99] [cursor=pointer]:
              - paragraph [ref=e100]: Private Search
            - button [ref=e105] [cursor=pointer]:
              - paragraph [ref=e106]: Duck.ai
            - button [ref=e111] [cursor=pointer]:
              - paragraph [ref=e112]: Subscription
            - button [ref=e117] [cursor=pointer]:
              - paragraph [ref=e118]: Email
        - main [ref=e122]:
          - generic [ref=e127]:
            - generic [ref=e135]: Search or enter address
            - generic [ref=e176]:
              - heading "The browser that actively protects your personal information." [level=1] [ref=e188]
              - link "Download DuckDuckGo for Windows" [ref=e189] [cursor=pointer]:
                - /url: https://duckduckgo.com/windows?origin=funnel_home_website__details
              - generic [ref=e194]:
                - paragraph [ref=e195]: Also available on the Microsoft Store
                - link "Download from Microsoft Store" [ref=e196] [cursor=pointer]:
                  - /url: https://apps.microsoft.com/detail/9n74nhxch1n6?referrer=appbadge&mode=direct
                  - img "Download from Microsoft Store" [ref=e197]
          - generic [ref=e199]:
            - button [ref=e200] [cursor=pointer]:
              - img "Protection Shield" [ref=e201]
              - generic [ref=e209]:
                - paragraph [ref=e210]: Evade scams & data-hungry companies
                - paragraph [ref=e211]: Protection
            - button [ref=e212] [cursor=pointer]:
              - img "Cookie" [ref=e213]
              - generic [ref=e220]:
                - paragraph [ref=e221]: Block most ads & cookie pop-ups
                - paragraph [ref=e222]: Privacy
            - button [ref=e223] [cursor=pointer]:
              - img "Mask" [ref=e224]
              - generic [ref=e230]:
                - paragraph [ref=e231]: Search & chat without being tracked
                - paragraph [ref=e232]: Peace of Mind
          - generic [ref=e233]:
            - generic [ref=e234]:
              - heading "See how DuckDuckGo compares." [level=2] [ref=e235]
              - tablist "Browser to compare" [ref=e237]:
                - tab "Chrome" [selected] [ref=e238] [cursor=pointer]
                - tab "Edge" [ref=e240] [cursor=pointer]
                - tab "Safari" [ref=e242] [cursor=pointer]
                - tab "Firefox" [ref=e244] [cursor=pointer]
                - tab "Brave" [ref=e246] [cursor=pointer]
              - generic [ref=e248]:
                - table [ref=e249]:
                  - rowgroup [ref=e250]:
                    - row [ref=e251]:
                      - columnheader "Feature" [ref=e252]
                      - columnheader "Chrome" [ref=e253]
                      - columnheader "DuckDuckGo" [ref=e262]
                  - rowgroup [ref=e274]:
                    - row "Search privately by default" [ref=e275]:
                      - cell [ref=e276]:
                        - paragraph [ref=e283]: Search privately by default
                      - cell [ref=e284]
                      - cell [ref=e288]
                    - row "Chat privately with popular AI chatbots (optional)" [ref=e292]:
                      - cell [ref=e293]:
                        - paragraph [ref=e301]: Chat privately with popular AI chatbots (optional)
                      - cell [ref=e302]
                      - cell [ref=e306]
                    - row "Blocks 3rd-party trackers from Facebook, Google, and others" [ref=e310]:
                      - cell [ref=e311]:
                        - paragraph [ref=e318]: Blocks 3rd-party trackers from Facebook, Google, and others
                      - cell [ref=e319]
                      - cell [ref=e323]
                    - row "Blocks targeted ads" [ref=e327]:
                      - cell [ref=e328]:
                        - paragraph [ref=e334]: Blocks targeted ads
                      - cell [ref=e335]
                      - cell [ref=e339]
                    - row "Blocks cookie pop-ups" [ref=e343]:
                      - cell [ref=e344]:
                        - paragraph [ref=e350]: Blocks cookie pop-ups
                      - cell [ref=e351]
                      - cell [ref=e355]
                    - row "Watch YouTube videos without ads" [ref=e359]:
                      - cell [ref=e360]:
                        - paragraph [ref=e367]: Watch YouTube videos without ads
                      - cell [ref=e368]
                      - cell [ref=e372]
                    - row "Securely manages passwords" [ref=e376]:
                      - cell [ref=e377]:
                        - paragraph [ref=e385]: Securely manages passwords
                      - cell [ref=e386]
                      - cell [ref=e390]
                    - row "Blocks email trackers" [ref=e394]:
                      - cell [ref=e395]:
                        - paragraph [ref=e402]: Blocks email trackers
                      - cell [ref=e403]
                      - cell [ref=e407]
                    - row "Deletes browsing data with one button" [ref=e411]:
                      - cell [ref=e412]:
                        - paragraph [ref=e419]: Deletes browsing data with one button
                      - cell [ref=e420]
                      - cell [ref=e424]
                    - row "Removes personal details from sites that sell them" [ref=e428]:
                      - cell [ref=e429]:
                        - paragraph [ref=e437]: Removes personal details from sites that sell them
                      - cell [ref=e438]
                      - cell [ref=e442]
                    - row "Helps restore your identity" [ref=e446]:
                      - cell [ref=e447]:
                        - paragraph [ref=e453]: Helps restore your identity
                      - cell [ref=e454]
                      - cell [ref=e458]
                    - row "Protects your connection with a VPN" [ref=e462]:
                      - cell [ref=e463]:
                        - paragraph [ref=e470]: Protects your connection with a VPN
                      - cell [ref=e471]
                      - cell [ref=e475]
                - generic [ref=e479]:
                  - generic [ref=e480]:
                    - paragraph [ref=e488]: Included
                    - paragraph [ref=e496]: Limited
                    - paragraph [ref=e504]: Paid
                    - paragraph [ref=e512]: None
                  - paragraph [ref=e513]: Browser comparisons were made with default settings. Information is correct as of December 2025
                - generic [ref=e514]:
                  - link "Download DuckDuckGo for Windows" [ref=e515] [cursor=pointer]:
                    - /url: https://duckduckgo.com/windows?origin=funnel_home_website__details
                  - link "Compare More Protections" [ref=e522] [cursor=pointer]:
                    - /url: /compare-privacy
            - generic [ref=e528]:
              - heading "Protection. Privacy. Peace of mind. Get the browser built for data protection, not data collection." [level=3] [ref=e530]:
                - generic [ref=e531]: Protection.
                - generic [ref=e535]: Privacy.
                - generic [ref=e539]: Peace of mind.
                - text: Get the browser built for data protection,
                - generic [ref=e543]: not data collection.
              - generic [ref=e544]:
                - paragraph [ref=e545]: The DuckDuckGo browser is available on
                - generic [ref=e546]:
                  - link "Windows" [ref=e547] [cursor=pointer]:
                    - /url: https://duckduckgo.com/windows?origin=funnel_home_website__details
                  - link "Mac" [ref=e551] [cursor=pointer]:
                    - /url: https://duckduckgo.com/mac?origin=funnel_home_website__details
                  - link "Android" [ref=e556] [cursor=pointer]:
                    - /url: https://play.google.com/store/apps/details?id=com.duckduckgo.mobile.android&referrer=origin%3Dfunnel_home_website__details
                  - link "iOS" [ref=e560] [cursor=pointer]:
                    - /url: https://apps.apple.com/app/duckduckgo-privacy-browser/id663592361?platform=iphone&pt=866401&mt=8
            - generic [ref=e565]:
              - generic [ref=e566]:
                - heading "Take back control of your personal information." [level=3] [ref=e569]
                - paragraph [ref=e570]: Hidden trackers lurk on 85% of popular websites. We actively block them by default, helping you evade hackers, scammers, and data-hungry companies.
                - generic [ref=e571]:
                  - button [ref=e573] [cursor=pointer]:
                    - paragraph [ref=e574]: Goodbye Incognito mode, hello real privacy in every tab
                  - button [ref=e579] [cursor=pointer]:
                    - paragraph [ref=e580]: Block 3rd-party trackers from Google, Facebook, and others
                  - button [ref=e585] [cursor=pointer]:
                    - paragraph [ref=e586]: Delete all tabs, history, and browsing data in one click
              - generic [ref=e590]:
                - heading "Block most ads & cookie pop-ups for fewer interruptions." [level=3] [ref=e593]
                - paragraph [ref=e594]: Our browser blocks most ads before they even appear, including on videos, so you can enjoy your favorite content with less hassle. We spot cookie pop-ups right away and, where possible, opt you out automatically, so you won’t even see them.
                - generic [ref=e595]:
                  - button [ref=e597] [cursor=pointer]:
                    - paragraph [ref=e598]: Stop ads following you everywhere
                  - button [ref=e603] [cursor=pointer]:
                    - paragraph [ref=e604]: Block annoying cookie pop-ups
                  - button [ref=e609] [cursor=pointer]:
                    - paragraph [ref=e610]: Block ads on YouTube
              - generic [ref=e614]:
                - heading "Data protection, not data collection." [level=3] [ref=e617]
                - paragraph [ref=e618]: We believe the best way to protect your data is to stop it from being collected at all. We never track your searches, and our browsing protections help stop other companies from collecting your data.
                - generic [ref=e619]:
                  - button [ref=e621] [cursor=pointer]:
                    - paragraph [ref=e622]: Search without being tracked
                  - button [ref=e627] [cursor=pointer]:
                    - paragraph [ref=e628]: A simple, secure password manager
                  - button [ref=e633] [cursor=pointer]:
                    - paragraph [ref=e634]: Chat privately with popular AI chatbots (optional)
            - generic [ref=e638]:
              - heading "Don’t just take our word for it." [level=2] [ref=e639]
              - generic [ref=e641]:
                - link [ref=e643] [cursor=pointer]:
                  - /url: https://www.theverge.com/2023/6/22/23769084/duckduckgo-browser-windows-download
                  - generic:
                    - img "The Verge"
                  - blockquote [ref=e644]: “ a solid cross-platform browser that really can keep up with the Chromes and Edges of the world.”
                  - paragraph [ref=e646]: David Pierce
                - link [ref=e648] [cursor=pointer]:
                  - /url: https://www.wired.com/story/privacy-browsers-duckduckgo-ghostery-brave/
                  - generic:
                    - img "Wired"
                  - blockquote [ref=e649]: “ you're getting maximum protection with minimal effort.”
                  - paragraph [ref=e651]: David Nield
                - link [ref=e653] [cursor=pointer]:
                  - /url: https://www.engadget.com/duckduckgo-mac-browser-open-beta-092105957.html
                  - generic:
                    - img "Engadget"
                  - blockquote [ref=e654]: “ easy and quick to import passwords and bookmarks from other browsers like Chrome.”
                  - paragraph [ref=e656]: Mariella Moon
                - link [ref=e658] [cursor=pointer]:
                  - /url: https://www.cnet.com/tech/services-and-software/five-reasons-you-should-use-duckduckgo-instead-of-google/
                  - generic:
                    - img "CNET"
                  - blockquote [ref=e659]: “ frees up bandwidth and lets websites load faster.”
                  - paragraph [ref=e661]: Zachary McAuliffe
                - link [ref=e663] [cursor=pointer]:
                  - /url: https://www.techradar.com/pro/duckduckgo-private-browser
                  - generic:
                    - img "TechRadar"
                  - blockquote [ref=e664]: “ DuckDuckGo is a must-try”
                  - paragraph [ref=e666]: Desire Athow
                - link [ref=e668] [cursor=pointer]:
                  - /url: https://apps.apple.com/us/app/duckduckgo-private-browser/id663592361?see-all=reviews
                  - img "Apple App Store"
                  - blockquote [ref=e669]: “ the most intuitive, well laid out, and quick browser I've used.”
                  - paragraph [ref=e674]: App Store Review
                - link [ref=e676] [cursor=pointer]:
                  - /url: https://apps.apple.com/us/app/duckduckgo-private-browser/id663592361?see-all=reviews
                  - img "Apple App Store"
                  - blockquote [ref=e677]: “ absolutely love this browser, and cannot imagine using any other again.”
                  - paragraph [ref=e682]: App Store Review
                - link [ref=e684] [cursor=pointer]:
                  - /url: https://apps.apple.com/us/app/duckduckgo-private-browser/id663592361?see-all=reviews
                  - img "Apple App Store"
                  - blockquote [ref=e685]: “ I find it faster than Safari, Chrome, and Firefox, and I feel way more protected.”
                  - paragraph [ref=e690]: App Store Review
                - link [ref=e692] [cursor=pointer]:
                  - /url: https://play.google.com/store/apps/details?id=com.duckduckgo.mobile.android&referrer=origin%3Dfunnel_home_website__details
                  - img "Google Play Store"
                  - blockquote [ref=e693]: “ Gives me just the peace of mind that I need.”
                  - paragraph [ref=e698]: Google Play Review
                - link [ref=e700] [cursor=pointer]:
                  - /url: https://play.google.com/store/apps/details?id=com.duckduckgo.mobile.android&referrer=origin%3Dfunnel_home_website__details
                  - img "Google Play Store"
                  - blockquote [ref=e701]: “ it keeps my personal and browsing data away from the big tech companies.”
                  - paragraph [ref=e706]: Google Play Review
                - link [ref=e708] [cursor=pointer]:
                  - /url: https://play.google.com/store/apps/details?id=com.duckduckgo.mobile.android&referrer=origin%3Dfunnel_home_website__details
                  - img "Google Play Store"
                  - blockquote [ref=e709]: “ Pretty much all you could ask for in a browser.”
                  - paragraph [ref=e714]: Google Play Review
                - link [ref=e716] [cursor=pointer]:
                  - /url: https://www.theverge.com/2023/6/22/23769084/duckduckgo-browser-windows-download
                  - generic:
                    - img "The Verge"
                  - blockquote [ref=e717]: “ a solid cross-platform browser that really can keep up with the Chromes and Edges of the world.”
                  - paragraph [ref=e719]: David Pierce
                - link [ref=e721] [cursor=pointer]:
                  - /url: https://www.wired.com/story/privacy-browsers-duckduckgo-ghostery-brave/
                  - generic:
                    - img "Wired"
                  - blockquote [ref=e722]: “ you're getting maximum protection with minimal effort.”
                  - paragraph [ref=e724]: David Nield
                - link [ref=e726] [cursor=pointer]:
                  - /url: https://www.engadget.com/duckduckgo-mac-browser-open-beta-092105957.html
                  - generic:
                    - img "Engadget"
                  - blockquote [ref=e727]: “ easy and quick to import passwords and bookmarks from other browsers like Chrome.”
                  - paragraph [ref=e729]: Mariella Moon
                - link [ref=e731] [cursor=pointer]:
                  - /url: https://www.cnet.com/tech/services-and-software/five-reasons-you-should-use-duckduckgo-instead-of-google/
                  - generic:
                    - img "CNET"
                  - blockquote [ref=e732]: “ frees up bandwidth and lets websites load faster.”
                  - paragraph [ref=e734]: Zachary McAuliffe
                - link [ref=e736] [cursor=pointer]:
                  - /url: https://www.techradar.com/pro/duckduckgo-private-browser
                  - generic:
                    - img "TechRadar"
                  - blockquote [ref=e737]: “ DuckDuckGo is a must-try”
                  - paragraph [ref=e739]: Desire Athow
                - link [ref=e741] [cursor=pointer]:
                  - /url: https://apps.apple.com/us/app/duckduckgo-private-browser/id663592361?see-all=reviews
                  - img "Apple App Store"
                  - blockquote [ref=e742]: “ the most intuitive, well laid out, and quick browser I've used.”
                  - paragraph [ref=e747]: App Store Review
                - link [ref=e749] [cursor=pointer]:
                  - /url: https://apps.apple.com/us/app/duckduckgo-private-browser/id663592361?see-all=reviews
                  - img "Apple App Store"
                  - blockquote [ref=e750]: “ absolutely love this browser, and cannot imagine using any other again.”
                  - paragraph [ref=e755]: App Store Review
                - link [ref=e757] [cursor=pointer]:
                  - /url: https://apps.apple.com/us/app/duckduckgo-private-browser/id663592361?see-all=reviews
                  - img "Apple App Store"
                  - blockquote [ref=e758]: “ I find it faster than Safari, Chrome, and Firefox, and I feel way more protected.”
                  - paragraph [ref=e763]: App Store Review
                - link [ref=e765] [cursor=pointer]:
                  - /url: https://play.google.com/store/apps/details?id=com.duckduckgo.mobile.android&referrer=origin%3Dfunnel_home_website__details
                  - img "Google Play Store"
                  - blockquote [ref=e766]: “ Gives me just the peace of mind that I need.”
                  - paragraph [ref=e771]: Google Play Review
                - link [ref=e773] [cursor=pointer]:
                  - /url: https://play.google.com/store/apps/details?id=com.duckduckgo.mobile.android&referrer=origin%3Dfunnel_home_website__details
                  - img "Google Play Store"
                  - blockquote [ref=e774]: “ it keeps my personal and browsing data away from the big tech companies.”
                  - paragraph [ref=e779]: Google Play Review
                - link [ref=e781] [cursor=pointer]:
                  - /url: https://play.google.com/store/apps/details?id=com.duckduckgo.mobile.android&referrer=origin%3Dfunnel_home_website__details
                  - img "Google Play Store"
                  - blockquote [ref=e782]: “ Pretty much all you could ask for in a browser.”
                  - paragraph [ref=e787]: Google Play Review
            - generic [ref=e788]:
              - generic [ref=e789]:
                - heading "Trusted by tens of millions worldwide!" [level=3] [ref=e790]
                - list [ref=e791]:
                  - listitem [ref=e792]:
                    - generic [ref=e793]: 100%
                    - generic [ref=e794]: Free
                  - listitem [ref=e795]:
                    - generic [ref=e796]: 3 Billion
                    - generic [ref=e797]: Monthly Searches
                  - listitem [ref=e798]:
                    - generic [ref=e799]: 9 Million
                    - generic [ref=e800]: Monthly Downloads
              - generic [ref=e802]:
                - heading "Get our free browser today!" [level=6] [ref=e803]
                - link "Download DuckDuckGo Browser" [ref=e805] [cursor=pointer]:
                  - /url: https://duckduckgo.com/windows?origin=funnel_home_website__details
                - generic [ref=e806]:
                  - generic [ref=e807]:
                    - link "Download DuckDuckGo on the App Store" [ref=e808] [cursor=pointer]:
                      - /url: https://apps.apple.com/app/duckduckgo-privacy-browser/id663592361?platform=iphone&ct=home-atb-home&pt=866401&mt=8
                    - generic [ref=e814]:
                      - generic [ref=e815]:
                        - img "Filled star icon in the context of a rating" [ref=e816]
                        - img "Filled star icon in the context of a rating" [ref=e818]
                        - img "Filled star icon in the context of a rating" [ref=e820]
                        - img "Filled star icon in the context of a rating" [ref=e822]
                        - img "Filled star icon in the context of a rating" [ref=e824]
                      - generic [ref=e826]: "4.8"
                    - paragraph [ref=e827]: 2.9 million ratings
                  - generic [ref=e828]:
                    - link "Download DuckDuckGo on Google Play" [ref=e829] [cursor=pointer]:
                      - /url: https://play.google.com/store/apps/details?id=com.duckduckgo.mobile.android&referrer=utm_campaign%3Dhome-atb-home%26origin%3Dfunnel_home_website__details
                    - generic [ref=e840]:
                      - generic [ref=e841]:
                        - img "Filled star icon in the context of a rating" [ref=e842]
                        - img "Filled star icon in the context of a rating" [ref=e844]
                        - img "Filled star icon in the context of a rating" [ref=e846]
                        - img "Filled star icon in the context of a rating" [ref=e848]
                        - img "Filled star icon in the context of a rating" [ref=e850]
                      - generic [ref=e852]: "4.7"
                    - paragraph [ref=e853]: 2.3 million reviews
            - generic [ref=e854]:
              - generic:
                - img "Dax Magnifying Glass"
              - generic [ref=e855]:
                - heading "Still have questions?" [level=3] [ref=e857]
                - generic [ref=e860]:
                  - generic [ref=e861]:
                    - button "What is DuckDuckGo?" [expanded] [ref=e862] [cursor=pointer]
                    - group "What is DuckDuckGo?" [ref=e867]:
                      - paragraph [ref=e869]:
                        - text: At DuckDuckGo, we believe the best way to protect your personal information from hackers, scammers, and privacy-invasive companies is to stop it from being collected at all. That's why millions of people
                        - link "choose DuckDuckGo over Chrome and other browsers" [ref=e870] [cursor=pointer]:
                          - /url: https://duckduckgo.com/compare-privacy
                        - text: to search and browse online. Our built-in search engine is like Google but never tracks your searches, and our browser blocks ads, trackers, and cookies that collect your data. It also offers private, useful, and optional AI, including
                        - link "Duck.ai" [ref=e871] [cursor=pointer]:
                          - /url: https://duck.ai
                        - text: ", which lets you chat privately with ChatGPT, Claude, and other AIs, all in one place. Oh, and our browser is free. We make money from"
                        - link "privacy-respecting search ads" [ref=e872] [cursor=pointer]:
                          - /url: https://duckduckgo.com/duckduckgo-help-pages/company/how-duckduckgo-makes-money/
                        - text: ", not by exploiting your data. Take back control of your personal information with the browser designed for data protection, not data collection."
                        - link "Learn more" [ref=e873] [cursor=pointer]:
                          - /url: https://duckduckgo.com/duckduckgo-help-pages/company/
                  - button "How does DuckDuckGo protect my privacy?" [ref=e875] [cursor=pointer]
                  - button "Does DuckDuckGo block all trackers on websites I visit?" [ref=e881] [cursor=pointer]
                  - button "How many people use DuckDuckGo?" [ref=e887] [cursor=pointer]
                  - button "How does DuckDuckGo make money?" [ref=e893] [cursor=pointer]
                  - button "Why use DuckDuckGo instead of Google?" [ref=e899] [cursor=pointer]
                  - button "Is Incognito Mode private?" [ref=e905] [cursor=pointer]
                  - button "How do DuckDuckGo Search results compare to Google's?" [ref=e911] [cursor=pointer]
                  - button "Is DuckDuckGo owned by Google or any other entity?" [ref=e917] [cursor=pointer]
            - generic [ref=e923]:
              - generic [ref=e926]:
                - navigation [ref=e927]:
                  - generic [ref=e928]:
                    - heading "Learn More" [level=4] [ref=e929]
                    - list [ref=e930]:
                      - listitem [ref=e931]:
                        - paragraph [ref=e932]:
                          - link "About DuckDuckGo" [ref=e933] [cursor=pointer]:
                            - /url: /about
                      - listitem [ref=e934]:
                        - paragraph [ref=e935]:
                          - link "About Our Browser" [ref=e936] [cursor=pointer]:
                            - /url: /app?origin=funnel_home_website__details
                      - listitem [ref=e937]:
                        - paragraph [ref=e938]:
                          - link "What’s New" [ref=e939] [cursor=pointer]:
                            - /url: /updates
                      - listitem [ref=e940]:
                        - paragraph [ref=e941]:
                          - link "Compare Privacy" [ref=e942] [cursor=pointer]:
                            - /url: /compare-privacy
                      - listitem [ref=e943]:
                        - paragraph [ref=e944]:
                          - link "Blog" [ref=e945] [cursor=pointer]:
                            - /url: https://spreadprivacy.com
                      - listitem [ref=e946]:
                        - paragraph [ref=e947]:
                          - link "Newsletter" [ref=e948] [cursor=pointer]:
                            - /url: /newsletter
                      - listitem [ref=e949]:
                        - paragraph [ref=e950]:
                          - link "Podcast" [ref=e951] [cursor=pointer]:
                            - /url: https://insideduckduckgo.substack.com/?showWelcome=true
                  - generic [ref=e952]:
                    - heading "Other Resources" [level=4] [ref=e953]
                    - list [ref=e954]:
                      - listitem [ref=e955]:
                        - paragraph [ref=e956]:
                          - link "Help" [ref=e957] [cursor=pointer]:
                            - /url: https://duckduckgo.com/duckduckgo-help-pages
                      - listitem [ref=e958]:
                        - paragraph [ref=e959]:
                          - link "Community" [ref=e960] [cursor=pointer]:
                            - /url: https://www.reddit.com/r/duckduckgo/
                      - listitem [ref=e961]:
                        - paragraph [ref=e962]:
                          - link "Careers" [ref=e963] [cursor=pointer]:
                            - /url: /hiring
                      - listitem [ref=e964]:
                        - paragraph [ref=e965]:
                          - link "Privacy Policy" [ref=e966] [cursor=pointer]:
                            - /url: /privacy
                      - listitem [ref=e967]:
                        - paragraph [ref=e968]:
                          - link "Terms of Service" [ref=e969] [cursor=pointer]:
                            - /url: /terms
                      - listitem [ref=e970]:
                        - paragraph [ref=e971]:
                          - link "Press Kit" [ref=e972] [cursor=pointer]:
                            - /url: /press
                      - listitem [ref=e973]:
                        - paragraph [ref=e974]:
                          - link "Advertise on Search" [ref=e975] [cursor=pointer]:
                            - /url: https://duckduckgo.com/duckduckgo-help-pages/company/advertise-on-duckduckgo-search
                      - listitem [ref=e976]:
                        - paragraph [ref=e977]:
                          - link "Collaborations" [ref=e978] [cursor=pointer]:
                            - /url: /collaborations
                - generic [ref=e979]:
                  - heading "About DuckDuckGo" [level=4] [ref=e980]
                  - paragraph [ref=e982]:
                    - text: At DuckDuckGo, we believe the best way to protect your personal information from hackers, scammers, and privacy-invasive companies is to stop it from being collected at all. That's why millions of people
                    - link "choose DuckDuckGo over Chrome and other browsers" [ref=e983] [cursor=pointer]:
                      - /url: https://duckduckgo.com/compare-privacy
                    - text: to search and browse online. Our built-in search engine is like Google but never tracks your searches, and our browser blocks ads, trackers, and cookies that collect your data. It also offers private, useful, and optional AI, including
                    - link "Duck.ai" [ref=e984] [cursor=pointer]:
                      - /url: https://duck.ai
                    - text: ", which lets you chat privately with ChatGPT, Claude, and other AIs, all in one place. Oh, and our browser is free. We make money from"
                    - link "privacy-respecting search ads" [ref=e985] [cursor=pointer]:
                      - /url: https://duckduckgo.com/duckduckgo-help-pages/company/how-duckduckgo-makes-money
                    - text: ", not by exploiting your data. Available to download on"
                    - link "Mac" [ref=e986] [cursor=pointer]:
                      - /url: https://duckduckgo.com/mac?origin=funnel_home_website__details
                    - text: ","
                    - link "Windows" [ref=e987] [cursor=pointer]:
                      - /url: https://duckduckgo.com/windows?origin=funnel_home_website__details
                    - text: ","
                    - link "iOS" [ref=e988] [cursor=pointer]:
                      - /url: https://apps.apple.com/app/duckduckgo-privacy-browser/id663592361?platform=iphone
                    - text: ", and"
                    - link "Android" [ref=e989] [cursor=pointer]:
                      - /url: https://play.google.com/store/apps/details?id=com.duckduckgo.mobile.android&referrer=origin%3Dfunnel_home_website__details
                    - text: .
              - generic [ref=e992]:
                - paragraph [ref=e994]:
                  - text: © 2026
                  - link "DuckDuckGo" [ref=e995] [cursor=pointer]:
                    - /url: https://duckduckgo.com
                - paragraph [ref=e997]: Protection. Privacy. Peace of mind.
  - alert [ref=e999]
```

# Test source

```ts
  1  | const {test, expect} = require('@playwright/test');
  2  | 
  3  | //test.describe.configure({ mode: 'parallel' }); // se configura el modo de ejecución de las pruebas en paralelo
  4  | //test.describe.configure({ mode: 'serial' }); // se configura el modo de ejecución de las pruebas en serie
  5  | test('@Web Popup validations', async ({ page }) => {
  6  | 
  7  |     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  8  |     //await page.goto("https://google.com");
  9  |     //await page.goBack(); // se hace clic en el boton de retroceder del navegador
  10 |     //await page.goForward(); // se hace clic en el boton de avanzar del navegador
  11 |     //await page.reload(); // se hace clic en el boton de recargar del navegador
  12 |     await expect (page.locator("#displayed-text")).toBeVisible(); // se verifica que el elemento este visible en la pagina
  13 |     await page.locator("#hide-textbox").click(); // se hace clic en el boton de ocultar el elemento
  14 |     await expect (page.locator("#displayed-text")).toBeHidden(); // se verifica que el elemento este oculto en la pagina
  15 |     
  16 |     page.on("dialog", dialog => dialog.accept()); // se acepta el cuadro de dialogo
  17 |     await page.locator("#confirmbtn").click(); // se hace clic en el boton de confirmacion 
  18 |     
  19 |     //page.on("dialog", dialog => dialog.dismiss()); // se descarta el cuadro de dialogo
  20 |     //await page.locator("#confirmbtn").click(); // se hace clic en el boton de confirmacion 
  21 | 
  22 |     await page.locator("#mousehover").hover(); // se hace hover sobre el elemento
  23 |     await page.locator(".mouse-hover-content a").last().click(); // se hace clic en el ultimo elemento del menu desplegable
  24 | 
  25 |     const framespage = page.frameLocator("#courses-iframe"); // se busca el iframe por su id
  26 |     framespage.locator("li a[href*='lifetime-access']:visible").click(); // se hace clic en el enlace de acceso de por vida dentro del iframe visible
  27 |     
  28 |     const textCheck = await framespage.locator(".text h2").textContent(); // se obtiene el texto del elemento dentro del iframe
  29 |     console.log(textCheck.split(" ")[1]); // se divide el texto en un array y se obtiene el segundo elemento del array
  30 | 
  31 | })
  32 | 
  33 | 
  34 | test('Screenshot & Visual comparision', async ({ page }) => {
  35 |     
  36 |     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  37 |     await expect (page.locator("#displayed-text")).toBeVisible(); // se verifica que el elemento este visible en la pagina
  38 |     await page.locator("#displayed-text").screenshot({ path: 'partialScreenshot.png' }); // se toma una captura de pantalla del elemento y se guarda en la ruta especificada
  39 |     await page.locator("#hide-textbox").click(); // se hace clic en el boton de ocultar el elemento
  40 |     await page.screenshot({ path: 'screenshot.png' }); // se toma una captura de pantalla de la pagina y se guarda en la ruta especificada
  41 |     await expect (page.locator("#displayed-text")).toBeHidden(); // se verifica que el elemento este oculto en la pagina
  42 |     
  43 | });
  44 | 
  45 | //screenshot -store -> screenshot -> compare 
  46 | test('visual', async ({ page }) => {
  47 | 
  48 |     await page.goto("https://duckduckgo.com/"); // se navega a la pagina de rediff
> 49 |     expect(await page.screenshot({})).toMatchSnapshot('landing.png'); // se toma una captura de pantalla de la pagina y se guarda en la ruta especificada
     |                                       ^ Error: expect(Buffer).toMatchSnapshot(expected) failed
  50 | 
  51 | });
  52 | 
```