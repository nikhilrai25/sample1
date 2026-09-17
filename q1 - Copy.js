function CopyArrayMultiplyBy2(MyArray) {
    const output = [];

    for (let i = 0; i < MyArray.length; i++) {
        output.push(MyArray[i] * 2);
    }

    return output;
}

const MyArray = [1, 2, 3];
const result = CopyArrayMultiplyBy2(MyArray);

console.log(result);