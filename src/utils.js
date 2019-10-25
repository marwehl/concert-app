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
   const dateString = new Date(fullDate).toLocaleDateString("de-DE", {
     year: "numeric",
     month: "2-digit",
     day: "2-digit"
   });
   return dateString;
 }

 export function formatTime(fullDate) {
   const timeString = new Date(fullDate).toLocaleString("de-DE", {
     hour: "2-digit",
     minute: "2-digit"
   });

   return timeString;
 }
