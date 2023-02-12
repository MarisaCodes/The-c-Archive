---
title: Why I hate CSS... A lot
href: /programming/misc/css-is-bad
alt: ai art thumbnail
thumbnail: /test-images/cool.png
description: In this post I'll explain why I hate css
date: 2/12/2023
slug: css-is-bad
---

So, if you know anything about web development is that CSS sucks as a styling language. It has many cool features, don't get me wrong, but the amount of stupid fixes for stupid unnecessary problems that you have to implement is insane.
<br /><br/>

```css
.some-class {
  overflow-x: scroll;
}
```

<br /><br/>

Consider the code block above. This right there is already problematic. Setting `overflow-x` to anything but `hidden` would trigger `overflow-y` automatically. It's fucking insane!
