/**
 *  AVAILABLE FILTERS:
 *  ["AVAILABLE_IMMEDIATELY", "FRESH_GRAD", "JUNIOR", "JAVASCRIPT", "PHP", "AWS", "REACT", "JAVA"]
 *
 *  "AVAILABLE_IMMEDIATELY" and "FRESH_GRAD" will override all the other filters if specified
 *
 *  if "AVAILABLE_IMMEDIATELY" and "FRESH_GRAD" are both specified as filter, "FRESH_GRAD" will be ignored
 *
 *
 *  Exercise: refactor this code
 *  - take care of naming variables
 *  - get rid of the 'for loops'
 *  - move it to modern JS!
 *  - oh, there are missing tests/scenario
 *
 *   happy refactory :)
 */


function optionsHasFilter(options, filter){
   return options.some(option => {
    return option.code == filter;
  })
}

function filterCandidates(candidates, filters) {
  if (filters.includes('AVAILABLE_IMMEDIATELY')) {
    return candidates.filter(candidate => {
      return optionsHasFilter(candidate.options, 'AVAILABLE_IMMEDIATELY');
    })
  }

  if (filters.includes('FRESH_GRAD')) {
    return candidates.filter(candidate => {
      return optionsHasFilter(candidate.options, 'FRESH_GRAD')
    })
  }

  return candidates.filter(candidate => {
    var candidateCodes = candidate.options.map(option => option.code);
    return filters.every(filter => candidateCodes.includes(filter))
  });

}

module.exports = filterCandidates;
