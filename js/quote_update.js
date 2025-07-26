function scheduleNextQuote() {
  const now = new Date();
  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  const timeToMidnight = tomorrow - now;
  
  setTimeout(() => {
    document.getElementById('dailyQuote').innerText = getDailyQuote();
    scheduleNextQuote();
  }, timeToMidnight);
}

scheduleNextQuote();
