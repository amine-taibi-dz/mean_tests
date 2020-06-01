//process.argv.forEach((e) => console.log("** " + e));
process.argv.forEach((val, idx) => { if (idx > 1) console.log(`[${idx}] = ${val}`); });