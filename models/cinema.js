const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getTitles = function() {
  const titlesArray = this.films.map((film) => {
    return film.title;
  })
  return titlesArray;
};

Cinema.prototype.findByTitle = function (title) {
  const filmToFind = this.films.find((film) =>{
    return (film.title === title)
  })
  return filmToFind;
};

Cinema.prototype.filmSortByGenre = function (genre){
  const filmGenreArray = this.films.filter((film) => {
    return (film.genre === genre)
  })
return filmGenreArray;
};

Cinema.prototype.searchFilmsByYear = function (year) {
  const filmsOfTheYear = this.films.filter((film) => {
    return (film.year === year)
  })
  return filmsOfTheYear;
};

Cinema.prototype.checkByLength = function (time) {
  const filmsOverLength = this.films.filter((film) => {
    return (film.length > time)
  })
  return filmsOverLength;
};

module.exports = Cinema;
