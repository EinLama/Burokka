# Very simple Adblocker for Chrome

This is rather an experiment than a working blocker. However, it blocks basic advertisement, both images and iframes.

It **does not** (yet):

* clean up the DOM. Banners are not displayed, but they might still occupy space.
* neutralize anchor-tags. Banners/ads are removed and no trackings are performed, but you can still accidentally click on an ad when you hit the space it once occupied.

## How to install

This script is too stupid to be made available as signed package. Therefore, you have to install it manually.

Download as ZIP file, extract it. Open your extensions page (`chrome://extensions`) and check the `developer mode` in the top right corner. Click `load extracted extension` and select the folder you just downlaoded.

