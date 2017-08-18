
function getBeerIndex(beers, id) {
  return beers.findIndex(beer => beer.id === id)
}

function getBeer(beers, id) {
  return beers[getBeerIndex(beers, id)]
}

module.exports = {
  getBeerIndex,
  getBeer
};
