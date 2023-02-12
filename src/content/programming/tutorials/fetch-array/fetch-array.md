---
title: Fetch an array of urls! Applying Promise.allSettled()
alt: carousel slider tutorial thumbnail
thumbnail: /test-images/senjougahra.png
description: lorem ipsum dolor sit amat sdsd dnksl dsklds edsnjf sdnvk ernj vernvje reev
href: /programming/tutorials/Fetch-an-Array-of-URLs
date: 2/9/2023
slug: Fetch-an-Array-of-URLs
---

<br><br>
You can fetch an array of urls (if you ever need that for some reason) by mapping the fetch results to the urls array.

Consider the following code block explaining the aove:
<br><br>

```javascript
const urls = [
  "https://some-url-1/some-api-end-point",
  "https://some-url-2/some-api-end-point",
  "https://some-url-3/some-api-end-point",
];

const results = urls.map(async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
});
```

<br><br>

The code above, suprisingly, returns an array of promises! Not an array of the raw data as you might think. The first time I `console.log()` the data I sure was surprised.

In order to get an array of the data/results you should do the following:
<br><br>

```javascript
Promise.all(results).then((data) => {
  // do something with the data
  // for example: setSomeState(data) in react
});
```
