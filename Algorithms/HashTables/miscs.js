// Voting problem
const voted = new Map();

function checkVoter(name) {

    if (voted.has(name)) {
        return true;
    }

    voted.set(name);
    return false;
}

console.log(checkVoter('arsenic'));
console.log(checkVoter('arsenic'));
