document.addEventListener('DOMContentLoaded', async function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const newsContainer = document.getElementById('news-container');
    const searchQueryElement = document.getElementById('search-query');
    const defaultQuery = 'Kenya';
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${encodeURIComponent(defaultQuery)}&apiKey=8f4c5e88c22c4c8485b142c4f294a2b6`);
      const data = await response.json();
      console.log({ data });
      newsContainer.innerHTML = '';
      displayNews(data.articles);
    } catch (error) {
      console.error('Error fetching default news:', error);
    }
    searchButton.addEventListener('click', async () => {
      const query = searchInput.value.trim();
      if (!query) return;
      try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=8f4c5e88c22c4c8485b142c4f294a2b6`);
        const data = await response.json();
        console.log({ data });
        newsContainer.innerHTML = '';
        searchQueryElement.textContent = `Search results for: ${query}`;
        displayNews(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    });
});