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


function doesCandidateHaveRequirement(candidate, requirement) {
  if (!candidate.options) return
   return candidate.options.some(option => {
    return option.code == requirement;
  })
}

function candidateHasNoOptions(candidate) {
  return !candidate.options
}

function candidatesWithRequirement(candidates, requirement) {
  return candidates.filter(candidate => {
    return doesCandidateHaveRequirement(candidate, requirement);
  })
}

function doesCandidateHaveAllRequirements(candidate, requirements) {
  let candidateCodes = candidate.options.map(option => option.code);
  return requirements.every(requirement => candidateCodes.includes(requirement))
}

function candidatesWithAllRequirements(candidates, requirements) {
  return candidates.filter(candidate => {
    if(candidateHasNoOptions(candidate)) return
    return doesCandidateHaveAllRequirements(candidate, requirements)
  });
}

function filterCandidates(candidates, requirements) {
  if(!requirements || requirements.length === 0) {
    return candidates
  };

  if (requirements.includes('AVAILABLE_IMMEDIATELY')) {
    return candidatesWithRequirement(candidates, 'AVAILABLE_IMMEDIATELY')
  }

  if (requirements.includes('FRESH_GRAD')) {
    return candidatesWithRequirement(candidates, 'FRESH_GRAD')
  }

  return candidatesWithAllRequirements(candidates, requirements)

}

module.exports = filterCandidates;
