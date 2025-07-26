const quotes = [
  "Unity in diversity is the soul of India.",
  "Our languages may differ, but our hearts beat as one.",
  "Bharat Ipsum is a melody of cultures woven together.",
  "Every word tells the story of a billion dreams.",
  "The rhythm of India lies in its unity, beyond words.",
  "Celebrate the beauty of every language of Bharat.",
  "Unity in diversity is not a phrase, it is the heartbeat of India.",

"Every language of India is a color, together they form a vibrant tapestry.",

"India speaks in many voices, but sings one song of harmony.",

"In every grain of soil, the soul of Bharat lives on.",

"Our heritage is not history; it is a living inspiration for tomorrow.",

"Festivals in India are not just events, they are a celebration of unity.",

"India teaches us that strength is found in compassion.",

"Every word in Bharat Ipsum echoes a thousand stories.",

"India's diversity is its superpower.",

"A billion dreams, one nation, one spirit.",

"Tradition and modernity are not opposites, but partners in India's journey.",

"India's true strength lies in its simplicity and kindness.",

"From the Himalayas to Kanyakumari, the spirit of India flows endlessly.",

"Bharat Ipsum is not filler text, it's the melody of many cultures.",

"Our differences make us beautiful; our unity makes us powerful.",

"India stands tall because of its deep roots in culture.",

"A single festival in India tells a hundred stories of joy.",

"Every corner of India has a story waiting to be told.",

"India is not just a place, it is a feeling.",

"The true meaning of Bharat Ipsum is harmony in diversity.",

"India doesn't speak one language; it speaks the language of love.",

"In every temple bell, every mosque prayer, and every church hymn, India lives.",

"India's beauty lies in its contrasts and connections.",

"India's future is built on the foundation of its timeless past.",

"Bharat Ipsum reflects the soul of India, word by word.",

"Every Indian language is a star in our cultural sky.",

"India is where spirituality meets innovation.",

"Unity doesn't mean sameness, it means harmony in difference.",

"India shows the world how strength comes from kindness.",

"Every Indian festival is a celebration of togetherness.",

"Diversity is not our challenge, it is our gift.",

"India is not defined by borders but by the hearts of its people.",

"Bharat Ipsum celebrates India's thousand shades of culture.",

"India's true wealth lies in its wisdom and traditions.",

"We are many, but we are one — that is Bharat's spirit.",

"India is a land of stories, each waiting to inspire.",

"Bharat Ipsum is the poetry of Indian unity.",

"India is a symphony of countless voices singing in unison.",

"Culture is not a backdrop here, it is the stage itself.",

"Bharat Ipsum holds the rhythm of India's heartbeat.",

"India is not a word, it is a universe of meaning.",

"Each Indian language is a drop in the ocean of Bharat.",

"India proves that differences create harmony, not division.",

"In every Indian festival, you find the spirit of sharing.",

"Bharat Ipsum is the canvas where all Indian colors blend.",

"India is not just a country, it's an experience of life.",

"The soul of India lies in its everyday acts of kindness.",

"India's past is glorious, its present vibrant, and its future limitless.",

"Bharat Ipsum reminds us of the voices that shaped this land.",

"From diverse languages rises a single echo of unity.",

"India is a journey, not a destination.",

"Bharat Ipsum is the music of cultures.",

"India's diversity is a festival that never ends.",

"Tradition is not old-fashioned; it's the essence of India.",

"Every word in Bharat Ipsum carries a piece of history.",

"India's heart beats in every village and city alike.",

"Unity is the thread that weaves India's cultural fabric.",

"India's spirit is unshaken, even in its differences.",

"The magic of India lies in its everyday stories.",

"Bharat Ipsum is a tribute to the voices of a billion people.",

"India's languages are its wealth and pride.",

"Every festival in India is a festival of hearts.",

"India's unity is its timeless story.",

"In India, every stone tells a tale.",

"India proves that diversity is not a barrier, but a bridge.",

"Bharat Ipsum reminds us of the roots that keep us strong.",

"India is culture, courage, and compassion in one breath.",

"India's beauty lies in its contradictions and connections.",

"India is the art of being many and one at the same time.",

"Every Indian festival reflects love and light.",

"Bharat Ipsum is not just filler, it's heritage.",

"India's stories are endless, like its spirit.",

"We don't just celebrate festivals; we live them.",

"India speaks from the soul, not just the tongue.",

"Unity in India is not taught; it's lived.",

"Every Indian language is a melody in our song of life.",

"India's strength is its togetherness in diversity.",

"In Bharat Ipsum, every word is alive with meaning.",

"India's history is carved in its languages.",

"The voice of India is a chorus of many cultures.",

"India's spirit flows through every festival and prayer.",

"Bharat Ipsum celebrates the people behind every word.",

"India is the land of warm hearts and open minds.",

"India thrives on its unity, powered by love.",

"India is where every sunrise brings a new story.",

"India's diversity is its pride, not its challenge.",

"The magic of Bharat Ipsum is in its cultural depth.",

"India's voice is strong, soft, and soulful.",

"India's languages are treasures that tell its journey.",

"India is not one story; it is millions of stories.",

"The unity of India is its greatest achievement.",

"Bharat Ipsum is a reflection of India's soul.",

"India's festivals are windows to its heart.",

"India's culture is its true wealth.",

"India is not just known, it's felt.",
  // Add up to 365 quotes here for a full year
];

function getDailyQuote() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  return quotes[dayOfYear % quotes.length]; // Cycle if fewer than 365 quotes
}

document.getElementById('dailyQuote').innerText = getDailyQuote();
