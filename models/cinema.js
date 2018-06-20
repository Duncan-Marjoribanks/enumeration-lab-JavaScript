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



module.exports = Cinema;
