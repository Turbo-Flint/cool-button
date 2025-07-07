const { exec } = require('child_process');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('\x1b[32mDo you want to compress all css file? (y/n): \x1b[0m', (answer) => {
    if (answer.toLowerCase() === 'y') {
        console.log('\x1b[34mPlease wait......\x1b[0m');
        exec('npm run compress:main && npm run compress:hover && npm run compress:basic', (error, stdout, stderr) => {
            if (error) {
                console.error(`Command execution failed: ${error.message}`);
                rl.close();
                return;
            }
            if (stderr) {
                console.error(`Command execution produced error output: ${stderr}`);
            }
            console.log('\x1b[36mAll css files has been compressed successfully.\x1b[0m');
            rl.close();
        });
    } else {
        console.log('Cancelled');
        rl.close();
    }
});
