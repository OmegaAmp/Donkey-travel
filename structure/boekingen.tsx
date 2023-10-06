import prisma from '@/utils/prisma';
import { Prisma, Boekingen } from '@prisma/client';

function getAllBoekingen(): Promise<Boekingen[]> {
    return prisma.boekingen.findMany({
        orderBy: {
            startdate: 'desc',
        },
    });
}

function createBoekingen(data: Prisma.BoekingenCreateInput): Promise<Boekingen> {
    return prisma.boekingen.create({ data });
}

function updateBoekingen(id: number, startdate: Date, Tocht: string, KlantId: number, StatusId: number): Promise<Boekingen> {
    return prisma.boekingen.update({
        where: { id },
        data: { startdate, Tocht, KlantId, StatusId },
    });
}

function deleteBoekingen(id: number): Promise<Boekingen> {
    return prisma.boekingen.delete({
        where: { id },
    });
}

function getBoekingenById(id: number): Promise<Boekingen | null> {
    return prisma.boekingen.findUnique({
        where: { id },
    });
}

export {
    getAllBoekingen,
    createBoekingen,
    updateBoekingen,
    deleteBoekingen,
    getBoekingenById,
};
