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

 function filterByAvailableImmediately(candidates) {
   return candidates.filter(candidate => {
     return candidate.options.some(isAvailableImmediately);
   })
 }

 function isAvailableImmediately(option){
   return option.code == 'AVAILABLE_IMMEDIATELY';
 }

 function filterByFreshGrad(candidates) {
   return candidates.filter(candidate => {
     return candidate.options.some(isFreshGrad);
   })
 }

 function isFreshGrad(option){
   return option.code == 'FRESH_GRAD';
 }

function filterCandidates(candidates, filters) {
  var filteredCandidates = [];
  var numberOfCandidates = candidates.length;
  var numberOfFilters = filters.length;
  var hasOptions;
  var availableImmediatelyRequested = false;
  var freshGradRequested = false;

  if (numberOfFilters) {
    if (filters.includes('AVAILABLE_IMMEDIATELY')) {
      return filterByAvailableImmediately(candidates);
    } else if (filters.includes('FRESH_GRAD')) {
      return filterByFreshGrad(candidates)
    }

    for (var candidateIndex = numberOfCandidates; candidateIndex--; ) {
      hasOptions = candidates[candidateIndex].options && candidates[candidateIndex].options.length > 0; //has.options

      if (candidates[candidateIndex].options) {
        for (var filterIndex = numberOfFilters; filterIndex--; ) {
          // loop through filters
          var hasFilter = false;
          for (var optionsIndex = candidates[candidateIndex].options.length; optionsIndex--; ) {
            if (!availableImmediatelyRequested && !freshGradRequested) {
              if (filters[filterIndex] == candidates[candidateIndex].options[optionsIndex].code) {
                hasFilter = true;
              }
            } else if (
              availableImmediatelyRequested &&
              candidates[candidateIndex].options[optionsIndex].code === 'AVAILABLE_IMMEDIATELY'
            ) {
              hasFilter = true;
            } else if (
              freshGradRequested &&
              candidates[candidateIndex].options[optionsIndex].code === 'FRESH_GRAD'
            ) {
              hasFilter = true;
            }
          }
          hasOptions = hasOptions && hasFilter;
        }
      }
      if (hasOptions) {
        filteredCandidates.unshift(candidates[candidateIndex]);
      }
    }
  } else {
    filteredCandidates = candidates;
  }
  return filteredCandidates;
}

module.exports = filterCandidates;
