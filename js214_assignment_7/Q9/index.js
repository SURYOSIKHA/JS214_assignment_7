// Function to check coding score
function codingScoreCheck(marks, cutoff) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let average = marks.reduce((a, b) => a + b, 0) / marks.length;
            if (average >= cutoff) {
                resolve(average);
            } else {
                reject("Sorry you haven't cleared the coding round.");
            }
        }, 2000);
    });
}

// Function to check HUKUMU score
function HUKUMUScoreCheck(marks, cutoff) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let average = marks.reduce((a, b) => a + b, 0) / marks.length;
            if (average >= cutoff) {
                resolve(average);
            } else {
                reject("Sorry you haven't cleared the HUKUMU round.");
            }
        }, 2000);
    });
}

// Function to check unit movement
function unitMovementCheck(averageCodingScore, averageHukumuScore, cutoff) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let average = (averageCodingScore + averageHukumuScore) / 2;
            if (average >= cutoff) {
                resolve(average);
            } else {
                reject("Sorry you haven't cleared the final cutoff.");
            }
        }, 2000);
    });
}

// Example marks and cutoff values
let codingMarks = [80, 90, 85, 70];
let hukumuMarks = [75, 80, 65, 70];
let codingCutoff = 75;
let hukumuCutoff = 70;
let finalCutoff = 75;

// Call the functions
codingScoreCheck(codingMarks, codingCutoff)
    .then(averageCodingScore => {
        console.log(`Coding Score: ${averageCodingScore}`);
        return HUKUMUScoreCheck(hukumuMarks, hukumuCutoff);
    })
    .then(averageHukumuScore => {
        console.log(`HUKUMU Score: ${averageHukumuScore}`);
        return unitMovementCheck(averageCodingScore, averageHukumuScore, finalCutoff);
    })
    .then(finalAverage => {
        console.log(`Final Average Score: ${finalAverage}`);
    })
    .catch(error => {
        console.error(error);
    });
