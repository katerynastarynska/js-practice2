for (let i = 0; i <= 100; i += 1) {
  if (i % 2 === 0 && i % 3 === 0) {
    console.log("fooBuzz");
  } else if (i % 2 === 0) {
    console.log("foo");
  } else if (i % 3 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}