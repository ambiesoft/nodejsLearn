function avg(n) {
    var sum = 0;
    for (let i = 0; i < n; i++) sum += i;
    let avg = sum / n;
    console.log('avg: ' + avg);
}

avg(100);