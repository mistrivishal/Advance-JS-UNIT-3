let count = 1;
let subLength = 1;

for (let i = 1; i < n; i++) {
    if (A[i] > A[i - 1])
        subLength++;
    else {
        if (count < subLength) {
            count = subLength;
        }
            subLength = 1;
    }
}
if (count < subLength) {
    count = subLength;
}
console.log(count)