---
layout: post
title: "Thieves' Cant Generator"
date: 2021-02-27 10:00 +0100
categories: RPG DM
author: Angel 
---
<style>
    #right {
        text-align: right;
        margin-top: 1em;
    }

    #input {
        font-size: 1.1em;
        width: 100%;
        border: 0px solid #000000;
        border-bottom-width: 1px;
        background-color: transparent;
        margin-bottom: 0.5em;
    }

    #input:hover
    {
    border-color: #000066;
    background-color: #FFFFF7;
    }

    #button-div {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 0.5em;
    }
    #button-div a {
        cursor: pointer;
    }

    #result {
        font-size: 1.8em;
    }

    #caution-text {
        font-size: 0.8em;
        text-align: center;
        margin-bottom: 2em;
    }

    #gen-background {
        border-radius: 10px 30px;
        padding: 1em;
        margin: 1em 0;
        padding: 2em;
        box-shadow: 2px 3px 20px black, 0 0 60px #8a4d0f inset;
        background: #fffef0;
    }
    
</style>


<script src="/assets/scripts/thievescant.js"></script>

<div id="gen-background" markdown="block">

<form action="#" onsubmit="return false">
    <div>
        <input type="text" id="input" value="Lets rob the ruch guy. The guards at the market are careless. He won't suspect a thing!" maxlength="89">
    </div>
</form>

 {: #result}
> Epithets swab the kitsch identify. The shards at the star cut are airless. He won't circumspect a wring!

 {: #tooltip}
>


 <div id="button-div">
        <a onClick="convertToThievesCant(document.getElementById('input').value);">Go Rogue!</a>
 </div>

 {: #caution-text}
*Word of caution: the rhymes that are displayed might be offensive. Sorry, gentleman thieves!*

</div>

 {: #right}
> What do you mean thieves can't? I haven't found a single thing a thief cannot do! <br>
> -- Jim "Shank" Malone, human rogue. Int 7


Language is undoubtedly an incredibly powerful tool when it comes to evoking emotions in people. What fascinates me is that you don't need to *know* the language to get some emotions going. A couple of Italians talking about something probably incredibly mundane is something I've found myself being weirdly mesmerised by and to this day I'm unsure why. Maybe lacking the semantic context gives me a clean slate to appreciate the melody of the phonetics. But the reason why is not important here. We're interested in how we can incorporate this trans-linguistic phenomenon in our games!

I and many other DMs alike give make-belief languages to the NPCs that speak in foreign languages my players cannot understand. And yes, there are your stereotypical brutish orkish *grug-zog-tag*s and the sing-songy elven *amadon-ishary-yani* or however you've decided they are going to sound in your world, but one unique language got me thinking. This language is of course *thieves cant* and it's uniqueness comes from the fact that it unites individuals not based on species, but on their inclination to be vagabonds. And of course, this has been [documented historically](https://archive.org/details/cu31924073798740) and if you would like a more *ye-olden* type of thieves cant, by all means go to the source and use those dictionaries in your games. But in my games people don't speak like its the 13th century and I'd like thieves cant to feel like its something that has been snuck in right under your nose during a conversation. But how?

Spending some years in South London had introduced me to *cockney rhyming slang*. I've heard several legends of how this linguistic tool became a thing and I choose to believe the following: when the English middle class would be so rudely interrupted by the presence of a working class individual, they would switch to French as to keep their conversations private. As a spiteful riposte, the working class devised a clever slang, which would substitute words in a phrase with something that rhymes with them. There are many variations of this, my favourite is taking a word you want to encode `phone`, finding a phrase that has a word that rhymes with our original word `dog and bone` and then substituting our original word to the *non-rhyming word* `dog`. Now `I'm on the phone` becomes `I'm on the dog`! Weird and senseless, but that's what makes cockney rhyming slang so intricate for me. It's like trying to understand a conversation someone is having on their phone whilst you're walking past them on a busy street. 

I've build this generator for me and all other regular humans that cannot find quirky rhymes on the spot. It takes a more simplistic approach of attempting to find a rhyme for each valid word in the sentence. You can see what I consider valid words by taking a look at the [repo](https://github.com/asyncmeonov/asyncmeonov.github.io/tree/master/assets/scripts).

This generator is by no means an adequate substitute for the incredibly sharp and culture-reference heavy wit of a real cockney, but I've had it give me some fun moments in my games so I hope it can do some good for you as well.

If you've never had the pleasure of speaking to a cockney, you can get a taster by watching any of Guy Ritchie's signature movies (highly recommending the classics *Snatch* and *Lock stock and two smoking barels*). Until then, *use the generator, ya Berkley Hunts*.