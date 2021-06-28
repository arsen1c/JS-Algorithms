function removeDuplicates(str) {
    const storage = new Map();

    for (let x = 0; x < str.length; x++) {
        // If current alphabet exists in storage Delete that from the storage
        if (storage.has(str[x])) {
            storage.delete(str[x]);
            continue;
        }

        // Add the current element in the Map
        storage.set(str[x]);
    };

    // Join the keys in the storage map and return it
    return [...storage.keys()].join('');
}

console.log(removeDuplicates("aababaab"));