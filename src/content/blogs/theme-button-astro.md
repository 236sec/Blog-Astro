---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Theme Button For Astro'
pubDate: 2023-11-9
description: 'Use theme in astro.'
author: '236sec'
tags: ["resource", "study", "astro","code"]
---
## Create script element in astro

```html
<script is:inline>
	//...rest of code
</script>
```


## Code for Manage Theme

```js
const setDarkMode = () => {
    //set theme based on local storage or system preference
    const theme = (() => {
        if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
            return localStorage.getItem('theme');
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    })();

    if (theme === 'light') {
        document.documentElement.classList.remove('dark');
    } else {
        document.documentElement.classList.add('dark');
    }
    window.localStorage.setItem('theme', theme);
}

const handleToggleClick = () => {
    const element = document.documentElement;
    element.classList.toggle("dark");
    const isDark = element.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
}

//intialize dark mode
setDarkMode();

//add event listener to toggle button
document.getElementById("themeToggle").addEventListener("click", handleToggleClick);

//add event listener to astro swap event
document.addEventListener("astro:after-swap",setDarkMode);
```