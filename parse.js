console.log('Type a number...')

process.stdin.on('data', data => {
    console.log(`You typed ${data.toString()}`);

    s = data.toString()

    ans = {
        duration: Number(s.substring(0, 2))*60+Number(s.substring(2, 4)),
        startDate: new Date(Number(s.substring(9,13)), Number(s.substring(5,7))-1, Number(s.substring(7,9))),
        accessCode: Number(s.substring(14, 15)),
        dialedNumber: s.substring(16, 22),
        chargedNumber: s.substring(23, 29),
        timeInQueue: Number(s.substring(30))
    }
    console.log(ans)

    process.exit();
});