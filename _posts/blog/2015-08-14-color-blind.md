---
layout: 01_post
title: Viewing Maps As If Colorblind
author: Blake Thompson
category: Mapnik
---

I was prompted by reading [this conversation](https://www.reddit.com/r/gis/comments/3fn7ys/does_anyone_have_tips_for_making_maps_for_a/) recently about color blind maps. I realized suddenly that we don't support a way for our cartographers to easily design maps that would be easy to view by a color blind individual. Determined to change this, I quickly dashed off to my development batcave!

![image](https://cloud.githubusercontent.com/assets/1794907/9077377/fb015120-3af2-11e5-96e0-28bd98e350e6.png)

After some quick research I found [a research paper on colour blindness](http://vision.psychol.cam.ac.uk/jdmollon/papers/colourmaps.pdf). After quickly deducing that color should be spelled with out a `u`, I proceeded to throw together an algorithm. (Artem thinks it spelled with a `u`)

![image](https://cloud.githubusercontent.com/assets/1794907/9077401/68673de2-3af3-11e5-88b5-c26c92ca5fcd.png)

I emerged from the bat cave with some new code in Mapnik. Image filters for three types of color blindness.

* Protanopia (1% of males) -- filter: `color-blind-protanope`
* Deuteranopia (1% of males) -- filter: `color-blind-deuteranope`
* Tritanopia (less than 1% of males and females) -- filter: `color-blind-tritanope`

So here are some maps with the color blind filters!

## Original Wheat Paste

![image](https://cloud.githubusercontent.com/assets/1794907/9077535/f186b5e8-3af4-11e5-8fc7-de0dc84961d5.png)

## Protanopia Wheat Paste

![image](https://cloud.githubusercontent.com/assets/1794907/9077535/f186b5e8-3af4-11e5-8fc7-de0dc84961d5.png)

## Deuteranopia Wheat Paste

![image](https://cloud.githubusercontent.com/assets/1794907/9077535/f186b5e8-3af4-11e5-8fc7-de0dc84961d5.png)

## Tritanopia Wheat Paste

![image](https://cloud.githubusercontent.com/assets/1794907/9077535/f186b5e8-3af4-11e5-8fc7-de0dc84961d5.png)

If all those maps look the same to you, you might be color blind.

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

Okay I lied, here are the real ones. 

## Original Wheat Paste

![image](https://cloud.githubusercontent.com/assets/1794907/9077535/f186b5e8-3af4-11e5-8fc7-de0dc84961d5.png)

## Protanopia Wheat Paste

![image](https://cloud.githubusercontent.com/assets/1794907/9089835/d5844212-3b5c-11e5-90ec-879756682b3f.png)

## Deuteranopia Wheat Paste

![image](https://cloud.githubusercontent.com/assets/1794907/9089855/ed32d180-3b5c-11e5-88ce-ceb3a1a18a0f.png)

## Tritanopia Wheat Paste

![image](https://cloud.githubusercontent.com/assets/1794907/9089861/f484cf7e-3b5c-11e5-95e6-e64f4530a747.png)

These image filters are now released in mapnik `3.0.3` and node mapnik `3.4.3`!
