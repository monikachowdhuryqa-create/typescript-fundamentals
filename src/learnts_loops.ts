//loops
for (let i: number = 0; i < 5; i++) {
    console.log(i);
}

let browsers: string[] = ["Chrome", "Firefox", "Safari", "Edge"]

for (let i: number = 0; i < browsers.length; i++) {
    console.log(browsers[i]);
}

//for of loop
for (let browser of browsers) {
    console.log(browser);
}

//while loop
let retries: number = 3;

// while (retries > 0) {
//     console.log(retries);
//     retries--;
// }

//do while loop
let count: number = 0;

do {
    console.log("run once")
    count++
} 
while (count < 1);

//break and continue
for (let i: number = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}

for (let i: number = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}