export function getSortedConcerts(concerts, activeSort) {
  let sortedConcerts = concerts.slice();

  if (activeSort === "Latest added") {
    sortedConcerts.sort(
      (a, b) => new Date(b.createDate) - new Date(a.createDate)
    );
  }

  if (activeSort === "Date") {
    sortedConcerts.sort((a, b) => new Date(a.fullDate) - new Date(b.fullDate));
  }
  if (activeSort === "Name of Artist") {
    sortedConcerts.sort((a, b) => (a.artist > b.artist ? 1 : -1));
  }
  return sortedConcerts;
}

export function formatDate(fullDate) {
  return new Date(fullDate).toLocaleDateString("de-DE", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });
}

export function formatTime(fullDate) {
 return new Date(fullDate).toLocaleString("de-DE", {
    hour: "2-digit",
    minute: "2-digit"
  });
}

export function getAllGenres(concerts) {
  return Array.from(
    concerts.reduce((prev, concert) => {
      concert.genres && concert.genres.forEach(genre => prev.add(genre));
      return prev;
    }, new Set())
  )
}

export function getConcertsFilteredByGenre(selectedGenre, concerts) {
return selectedGenre === "All"
      ? concerts
      : concerts.filter(
        concert => concert.genres && concert.genres.includes(selectedGenre)
      )
}

export function getFavoritesConcerts(concerts, currentUser) {
  return concerts.filter(concert =>
    currentUser.favorites.includes(concert._id)
  )
}