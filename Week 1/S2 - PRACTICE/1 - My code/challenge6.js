function challenge6(votes) {
    if (votes.length === 0) {
        return "There is not vote yet.";
    }
    // add the number of candidates to array
    var candidates = [];
    for (var i = 0; i < votes.length; i++) {
        if (candidates.includes(votes[i])) {
            continue;
        }
        candidates.push(votes[i]);
    }
    // count the number of election
    var electionResults = [];
    var winner = [];
    for (var i = 0; i < candidates.length; i++) {
        var count = 0;
        for (var j = 0; j < votes.length; j++) {
            if (candidates[i] == votes[j]) {
                count++;
            }
        }
        electionResults.push(count);
    }
    // find the max number of election and winner
    var maxCount = Math.max(...electionResults)
    for (var i = 0; i < electionResults.length; i++) {
        if (electionResults[i] == maxCount && !electionResults.includes(candidates[i])) {
            winner.push(candidates[i]);
        }
    }

    return (winner.length == 1) ? winner[0] + " is the winner" : winner.join(" and ") + " are both winners";
}

var listCandidates1 = ['B', 'A', 'A', 'C', 'A'];
var listCandidates2 = ['B', 'A', 'B', 'C', 'A'];
var listCandidates3 = [];

console.log(challenge6(listCandidates1));
console.log(challenge6(listCandidates2));
console.log(challenge6(listCandidates3));