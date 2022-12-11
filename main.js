const { render } = require('@nexrender/core')

const main = async () => {
    const result = await render('main.json', {
        binary: 'C:/Program Files/Adobe/Adobe After Effects 2020/Support Files/aerender',
        skipCleanup: true,
        debug: true
    })
}

main().catch(console.error);