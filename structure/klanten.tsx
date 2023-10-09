import prisma from '@/utils/prisma';
import { Prisma, Klant } from '@prisma/client';

function getAllKlanten(): Promise<Klant[]> {
    return prisma.klant.findMany({
        orderBy: {
            gewijzigd: 'desc',
        },
    });
}

function createKlant(data: Prisma.KlantCreateInput): Promise<Klant> {
    return prisma.klant.create({ data });
}

function updateKlant(id: number, naam: string, email: string, telefoon: string, wachtwoord: string): Promise<Klant> {
    return prisma.klant.update({
        where: { id },
        data: { naam, email, telefoon, wachtwoord },
    });
}

function deleteKlant(id: number): Promise<Klant> {
    return prisma.klant.delete({
        where: { id },
    });
}

function getKlantById(id: number): Promise<Klant | null> {
    return prisma.klant.findUnique({
        where: { id },
    });
}

export {
    getAllKlanten,
    createKlant,
    updateKlant,
    deleteKlant,
    getKlantById,
};
