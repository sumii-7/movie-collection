const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzFiYWRlYWQ0OGZiNGFhMDlhMTY3YTdkN2E5MTA2NCIsInN1YiI6IjY2MjYyMzk1YjI2ODFmMDE3YzczNTA2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3zHV_GlEAH4G6uYGGh_1ffM4fDNsuNnoxhelJO55Cac",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((data) => {
    const movies = data.results; // 영화 목록 추출

    const moviesArea = document.getElementById("card"); // 영화를 추가할 html 영역 선택

    let html = ""; // html 템플릿 문자열 초기화

    movies.forEach((movie) => {
      html += `
    <div class="movie_card" onclick="showAlert(${movie.id})">
    <div class="image_box"><img class="image" src="https://image.tmdb.org/t/p/w500${movie.poster_path}"></div>
        <h3>${movie.title}</h3>
        <p>${movie.overview}</p>
        <p>Rating: ${movie.vote_average}</p>
    </div>
    `; // html 템플릿 추가
    });

    moviesArea.innerHTML = html; // html 영역에 html 붙이기

    const movie_search = document.getElementById("movie_name").value;
  })
  .catch((err) => console.error(err));

// 영화 id 알림창 띄우기
function showAlert(id) {
  alert("영화 id: " + id);
}
