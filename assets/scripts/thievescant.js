const punc = /([.,\/#!$%\^&\*;:{}=\-_`~()])/g;

function convertToThievesCant(input) {
    document.getElementById("result").innerHTML = "";
    document.getElementById("result").style.color = "#828282";
    document.getElementById("tooltip").innerHTML = "";

    if (input.length > 89) {
        document.getElementById("result").innerHTML += "Nice try, thief :) ! Please stick to the length limit!";
        document.getElementById("result").style.color = "red";
        document.getElementById("tooltip").innerHTML += "I'm using a free tier of the datamuse rhyming API and I cannot afford an unbounded input box. If you want to see the generator improve, feel free to <a href='https://ko-fi.com/dungeoncurator'>buy me a coffee</a>. Thank you for using the generator!";
    } else {
        input = input.replace(punc, " $1 ");
        input = input.replace(/\s\s+/g, ' ');
        const words = input.split(" ");
        const wordMask = getValidWordsMask(words);

        const out = [];
        for (let i = 0; i < wordMask.length; i++) {
            if (wordMask[i] === true) {
                out.push(httpGetAsync(`https://api.datamuse.com/words?rel_rhy=${words[i]}&max=15`));
            } else {
                out.push(Promise.resolve([words[i]]));
            }
        }

        console.log(out);
        console.log(Promise.all(out));

        Promise.all(out).then(data => {
            console.log(data);
            let content = ""
            data.forEach((arrValue, i) => {
                if (arrValue.length === 1) {
                    if (arrValue[0].hasOwnProperty('numSyllables')) {
                        content += randomlyChooseRhyme(words[i], arrValue) + " ";//arrValue.filter(word => word.numSyllables > 1)[0].word + " ";
                    } else {
                        content += arrValue[0] + " ";
                    }
                } else if (arrValue.length > 0) {
                    content += randomlyChooseRhyme(words[i], arrValue) + " ";//arrValue.filter(word => word.numSyllables > 1)[0].word + " ";
                }
            });
            document.getElementById("result").innerHTML = format(content)
        });
    }

}

async function httpGetAsync(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

function getValidWordsMask(words) {
    //Currently words that are rhymable are only non-determiner words
    const mask = [];
    words.forEach(word => {
        mask.push(isAllowed(word));
    });
    return mask;
}

function randomlyChooseRhyme(originalWord, rhymes) {
    rhymes = rhymes.filter(rhyme =>
        !(rhyme.word.includes(originalWord.toLowerCase() ||
            originalWord.toLowerCase().includes(rhyme.word))));

    // prefer: 
    // longest syllable word 70%
    // shorter syllable words 30%
    const longer = rhymes.filter(rhyme => rhyme.numSyllables > 2);
    const shorter = rhymes.filter(rhyme => rhyme.numSyllables <= 2);

    if (longer.length === 0 && shorter.length === 0) {
        //No rhymes were found
        return originalWord;
    }
    else {
        let rand = Math.random();
        if (rand >= 0.3 && longer.length !== 0 || shorter.length === 0) {
            // 70% chance to choose a longer syllable word
            return getRandomElement(longer).word;

        } else {
            // 30% chance to choose a shorter syllable word
            return getRandomElement(shorter).word;
        }
    }
}

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

//TODO check for numbers one, two, three and also 1, 2, 3
function isAllowed(word) {
    word = word.toLowerCase();
    if (word.includes('\'') || word.includes('\`') || word.match(punc) !== null) {
        return false;
    }
    const pronouns = ["i", "me", "you", "he", "she", "it", "they", "them", "we"];
    const determiners = ["is", "are", "the", "a", "an", "this", "that", "these", "those", "my", "your", "his", "her", "its", "our", "their", "of", "most", "some", "any", "enough", "other", "another", "such", "what", "rather", "quite"];
    const quantity = ["few", "little", "much", "many", "lot", "all", "both", "half", "either", "neither", "each", "every"];
    const location = ["at", "in", "on"];
    const forbiddenWords = pronouns.concat(quantity).concat(location).concat(determiners);
    if (forbiddenWords.includes(word)) {
        return false;
    }
    return true;
}

function format(text) {
    const reducedPunc = /([.!\?])/
    let sentences = text.split(reducedPunc);
    sentences = sentences.map(s => s.trim()).map(capitalize);
    text = sentences.join('');
    text = text.replace(reducedPunc, '$1 ')
    return text;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

