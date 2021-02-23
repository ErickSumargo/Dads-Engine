const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const main = async () => {
    for (i = 0; i < 10; i++) {
        await prisma.dadJoke.create({
            data: {
                setup: "Setup " + (i + 1),
                punchline: "Punchline " + (i + 1)
            }
        })
    }
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.disconnect()
    })