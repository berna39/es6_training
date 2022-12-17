let promise = new Promise((reflect, reject) => {
    setTimeout(reflect('Job done'), 3000);
});

promise.then(res => console.log(res));
