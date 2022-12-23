function add(x, y, ...rest) {
  rest.forEach((e) => {
    console.log(e);
  });
}

add(12, 10, 5, 7); // 5 and 7 only
