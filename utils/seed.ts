import prisma from "../utils/prisma";
const bcrypt = require('bcrypt');

async function main() {
    // Seed Status
    const statuses = [
        { statusCode: 1, status: "Active", verwijderbaar: 1, pinToekennen: 0 },
        { statusCode: 2, status: "Inactive", verwijderbaar: 0, pinToekennen: 1 }
    ];
    for (const status of statuses) {
        await prisma.status.create({
            data: status
        });
    }

    // Seed Klant
    const klantPassword = bcrypt.hashSync("password", 10);
    const klant = await prisma.klant.create({
        data: {
            naam: "John Doe",
            email: "john.doe@example.com",
            telefoon: "1234567890",
            wachtwoord: klantPassword,
            gewijzigd: new Date()
        }
    });

    // Seed Tocht
    const tochten = [
        { omschrijving: "Tocht 1", route: "Route 1", aantalDagen: 5 },
        { omschrijving: "Tocht 2", route: "Route 2", aantalDagen: 3 }
    ];
    for (const tocht of tochten) {
        await prisma.tocht.create({
            data: tocht
        });
    }

    // Seed Tracker
    const trackers = [
        { pinCode: 1234, lat: 52.5200, lon: 13.4050, time: new Date() },
        { pinCode: 5678, lat: 40.7128, lon: 74.0060, time: new Date() }
    ];
    for (const tracker of trackers) {
        await prisma.tracker.create({
            data: tracker
        });
    }

    // Seed Herberg
    const herberg = await prisma.herberg.create({
        data: {
            naam: "Herberg 1",
            adres: "123 Main St",
            email: "herberg1@example.com",
            telefoon: "0987654321",
            coordinaten: "52.5200,13.4050",
            gewijzigd: new Date()
        }
    });

    // Seed Restaurant
    const restaurant = await prisma.restaurant.create({
        data: {
            naam: "Restaurant 1",
            adres: "456 Secondary St",
            email: "restaurant1@example.com",
            telefoon: "1122334455",
            coordinaten: "52.5200,13.4050",
            gewijzigd: new Date(),
            statussenId: 1
        }
    });

    // Seed Boeking (example)
    const boeking = await prisma.boeking.create({
        data: {
            startDatum: new Date(),
            pinCode: 1234,
            fkTochtenId: 1, // assuming first tocht
            fkKlantenId: klant.id,
            fkStatussenId: 1 // assuming first status
        }
    });

    // Seed Overnachting (example)
    const overnachting = await prisma.overnachting.create({
        data: {
            fkBoekingenId: boeking.id,
            fkHerbergenId: herberg.id,
            fkStatussenId: 1 // assuming first status
        }
    });

    // Seed PauzePlaats (example)
    const pauzePlaats = await prisma.pauzePlaats.create({
        data: {
            fkBoekingenId: boeking.id,
            fkRestaurantsId: restaurant.id,
            fkStatussenId: 1 // assuming first status
        }
    });

    console.log("Data seeded successfully!");
}

main()
    .then(() => {
        process.exit(0);
    })
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
