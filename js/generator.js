const START_PHRASE = "Bharat ipsum dolor sit amet, namaste adipiscing elit, sed do utsav tempor incididunt ut seva et utsah magna aliqua.";

const wordPool = [
  "bharat", "ipsum", "dolor", "sit", "amet", "namaste", "adhyayan", "utsav", "seva", "utsah", "dhyanam",
  "yogic", "shakti", "prana", "vayu", "swaraj", "satyam", "ahimsa", "vedanta", "sarovar", "rangoli", "vikas","chai", "kumbh",

  // Telugu
  "chekkiligintalu", "chirutapuli", "saripoindhi", "bagunnara", "andhariki", "avunu", "kaadhu", "manchi",
  "eeroju", "Udayam", "sayantram", "bangaram", "thaskarinchuta", "gelupu", "thalupu", "gunde", "parugu",
  "aavakaya", "guruvu", "brahmanandam",

  // Tamil
  "therukoothu", "pudhumai", "paalpayasam", "kolam", "ille", "aamaa", "oru",
  "karumbu", "thiruvizha", "vazhai", "aadi", "pookalam", "vanakkam", "nandri",
  "nalladhu", "Kattil", "thangam", "chellam", "ammadi", "thanthai", "kadhiravan", "maalai", "vetri", "odu", "vadivelu", "nanba", "taai",

  // Kannada
  "davangere", "avalakki", "nuchchu", "bisi", "uppittu",
  "ragi", "mandya", "benne", "nudi", "koli", "keli", "beka", 
 "namaskara", "dayavittu", "haudu", "snehitha", "kshamisi", "hullu", "beda", "madhyahna",
  "jaya", "hegiddira", "channagidini", "yelli", "hogu", "oota", "gottilla", "jaasti",

  // Malayalam
  "meenpollichathu", "pookalam", "vellappam", "thoran", "avial",
  "parotta", "parippu", "thiruvonam", "vattayappam", "naïriya",
  "sahodaran", "mesha", "adipoli", "chettaa", "chechi", "athe",
  "mitwan", "milla", "sukhamaano", "nanni", "sanji", "kudikkuka",
  "odukka", "pithavu", "makal", "njaan", "choru", "veedu",

  // Hindi / Sanskrit
  "agniśāmak", "anatara", "ekvarnī", "samay", "vishvaas",
  "prakriti", "praṇu", "adhikār", "satyam", "tākṭar",

  // Marathi
  "solkadhi", "puranpoli", "zunka", "pitla", "bakarwadi",
  "maza", "modak", "pakhwada", "vadā",

  // Bengali
  "puchka", "rosogolla", "sandesh", "paturi", "ghugni",
  "aðvata", "manush", "kukur", "shomudro", "jol",

  // Punjabi / Urdu-inflected Hindi (Desi)
  "loṭā", "jhoothā", "pagṛī", "ṭharrā", "jhuggī",
  "ṭhakkar", "gaṛbaṛ", "phusphusānā", "jhandā", "bakbak",

  // Gujarati / Odia / Punjabi mix
  "chatori", "dhandhā", "kachchhep", "veṭṭaka", "pokhari",

  // Odia / Sanskrit tatsama
  "drishtī", "nāyana", "jagath", "lokā", "durg",

  // Misc Latin-style filler
  "dolor", "sit", "amet", "consectetur", "elit", "adipiscing"
];

const softSentences = [
  "Bharat speaks in many languages, yet the heart understands one rhythm of unity.",
  "From the Himalayas to the oceans, stories of courage and compassion flow freely.",
  "Every festival is a reminder of togetherness, gratitude, and celebration.",
  "Innovation and tradition walk together, shaping a confident and compassionate future.",
];

const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];

function makeSentence(min = 10, max = 18) {
  const len = Math.floor(Math.random() * (max - min + 1)) + min;
  if (Math.random() < 0.25) return rand(softSentences);
  const words = Array.from({ length: len }, () => rand(wordPool));
  let s = words.join(' ');
  return s.charAt(0).toUpperCase() + s.slice(1) + '.';
}

function makeParagraph() {
  return Array.from({ length: 3 + Math.floor(Math.random() * 3) }, makeSentence).join(' ');
}

function makeWords(n) {
  const out = Array.from({ length: n }, () => rand(wordPool));
  let s = out.join(' ');
  return s.charAt(0).toUpperCase() + s.slice(1) + '.';
}

function generate() {
  const rawCount = document.getElementById('genCount').value.trim();
  const count = parseInt(rawCount, 10);

  if (isNaN(count) || count <= 0) {
    document.getElementById('genOutput').innerHTML = '';
    return;
  }

  const type = document.getElementById('genType').value;
  const startWith = document.getElementById('startWith').checked;
  const out = [];

  if (type === 'paragraphs') {
    for (let i = 0; i < count; i++) out.push(makeParagraph());
    if (startWith && out.length) out[0] = START_PHRASE + " " + out[0];
    document.getElementById('genOutput').innerHTML = out.map(p => `<p>${p}</p>`).join('\n');
  } else if (type === 'sentences') {
    for (let i = 0; i < count; i++) out.push(makeSentence());
    if (startWith) out[0] = START_PHRASE;
    document.getElementById('genOutput').innerText = out.join(' ');
  } else {
    let wordsNeeded = count;
    let acc = startWith ? [START_PHRASE] : [];
    while (wordsNeeded > 0) {
      const chunk = Math.min(wordsNeeded, 80);
      acc.push(makeWords(chunk));
      wordsNeeded -= chunk;
    }
    document.getElementById('genOutput').innerText = acc.join(' ');
  }
}


function copyOutput() {
  const text = document.getElementById('genOutput').innerText.trim();
  if (!text) return alert("Nothing to copy yet. Generate first!");
  navigator.clipboard.writeText(text);
  alert("Copied!");
}
