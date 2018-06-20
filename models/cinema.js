const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getTitles = function(filmArray) {
  const titlesArray = filmArray.map((film) => {
    return film.title;
  })
  return titlesArray;
};
module.exports = Cinema;
