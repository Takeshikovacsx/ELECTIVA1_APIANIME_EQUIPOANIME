export const getAnimeInfo = async (title) => {
  const baseUrl = `https://api.jikan.moe/v4/anime?q=${title}&limit=1`;

  try {
    const response = await fetch(baseUrl);
    const data = await response.json();

    if (!data.data || data.data.length === 0) return null;

    return data.data[0];
  } catch (error) {
    console.error('Error fetching anime info:', error);
    return null;
  }
};