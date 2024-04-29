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
    const movies = data.results; // 영화 목록 추출∫

    // html의 id 값 가져오기
    const moviesArea = document.getElementById("card");

    function movieList(val = "") {
      moviesArea.innerHTML = movies
        .map((movie) => {
          if (movie.title.toLowerCase().includes(val.toLowerCase())) {
            return `
    <div class="movie_card" onclick="showAlert(${movie.id})">
        <img class="image" src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
        <h3>${movie.title}</h3>
        <p class= "overview">${movie.overview}</p>
        <p class= "vote_average" >Rating: ${movie.vote_average}</p>
    </div>
    `;
          } // html 템플릿 추가
        })
        .join("");
    }
    movieList();

    // 검색기능 구현을 위한 html id 가져오기
    const searchInput = document.getElementById("movie_name"); // input
    const searchBtn = document.getElementById("searchbtn"); // button

    searchBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const val = searchInput.value;
      console.log(val);
      movieList(val);
    });
  })
  .catch((err) => console.error(err));

// 영화 id 알림창 띄우기
function showAlert(id) {
  alert("영화 id: " + id);
}
