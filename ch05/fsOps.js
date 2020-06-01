console.log("I am in " + process.cwd());
process.chdir('./..');
console.log("my Parent is : " + process.cwd());


console.log('Starting in ' + process.cwd());
try {
    process.chdir('/');
} catch (error) {
    console.error('chdir: ' + error.message);
}
console.log('Current working directory is now ' + process.cwd());