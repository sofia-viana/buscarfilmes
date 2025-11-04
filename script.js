function searchMovie() {
  const movieName = document.getElementById('movieSearch').value.trim();
  const apiKey = '7d459ab1';
  const url = `https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}&plot=short&language=pt-BR`;

  if (movieName === '') {
    document.getElementById('movieDetails').innerHTML = `<p>Por favor, digite o nome de um filme.</p>`;
    return;
  }

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.Response === "True") {
        document.getElementById('movieDetails').innerHTML = `
          <h2>${data.Title} (${data.Year})</h2>
          <p><strong>Gênero:</strong> ${data.Genre}</p>
          <p><strong>Diretor:</strong> ${data.Director}</p>
          <p><strong>Nota IMDb:</strong> ⭐ ${data.imdbRating}</p>
          <img src="${data.Poster !== 'N/A' ? data.Poster : 'https://via.placeholder.com/200x300?text=Sem+Imagem'}" alt="Poster do filme">
        `;
      } else {
        document.getElementById('movieDetails').innerHTML = `<p>🎞️ Filme não encontrado. Tente outro nome.</p>`;
      }
    })
    .catch(error => {
      console.error('Erro ao buscar dados do filme:', error);
      document.getElementById('movieDetails').innerHTML = `<p>❌ Erro na busca. Tente novamente mais tarde.</p>`;
    });
}
