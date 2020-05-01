let i = 0;
let j = 0;
myLoop : for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
        if (i * j > 25) {
            break myLoop;
        }
    }
}
alert(i);
alert(j);