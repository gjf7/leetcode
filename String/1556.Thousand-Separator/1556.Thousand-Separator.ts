function thousandSeparator(n: number): string {
    const numArray = n.toString().split("").reverse();

    return numArray.reduce((acc, val, index) => {
        if ((index + 1) % 3 === 0 && index !== numArray.length - 1) {
            return "." + val + acc;
        } else {
            return val + acc;
        }
    }, "")
}
