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

function filter(candidates, filters) {
  var out = [];
  var numberOfCandidates = candidates.length;
  var numberOfFilters = filters.length;
  var hasOptions;
  var availableImmediately = false;
  var freshGrad = false;

  if (numberOfFilters !== 0) {
    if (filters.indexOf('AVAILABLE_IMMEDIATELY') !== -1) {
      availableImmediately = true;
    } else if (filters.indexOf('FRESH_GRAD') !== -1) {
      freshGrad = true;
    }

    for (var i = numberOfCandidates; i--; ) {
      hasOptions = candidates[i].options && candidates[i].options.length > 0; //has.options

      if (candidates[i].options) {
        for (var k = numberOfFilters; k--; ) {
          // loop through filters
          var hasFilter = false;
          for (var j = candidates[i].options.length; j--; ) {
            if (!availableImmediately && !freshGrad) {
              if (filters[k] == candidates[i].options[j].code) {
                hasFilter = true;
              }
            } else if (
              availableImmediately &&
              candidates[i].options[j].code === 'AVAILABLE_IMMEDIATELY'
            ) {
              hasFilter = true;
            } else if (
              freshGrad &&
              candidates[i].options[j].code === 'FRESH_GRAD'
            ) {
              hasFilter = true;
            }
          }
          hasOptions = hasOptions && hasFilter;
        }
      }
      if (hasOptions) {
        out.unshift(candidates[i]);
      }
    }
  } else {
    out = candidates;
  }
  return out;
}

module.exports = filter;
