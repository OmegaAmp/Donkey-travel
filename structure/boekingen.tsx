import prisma from '@/utils/prisma';
import { Prisma, Boeking } from '@prisma/client';

function getAllBoekingen(): Promise<Boeking[]> {
    return prisma.boeking.findMany({
        orderBy: {
            startDatum: 'desc',
        },
    });
}

function createBoeking(data: Prisma.BoekingCreateInput): Promise<Boeking> {
    return prisma.boeking.create({ data });
}

function updateBoeking(id: number, startDatum: Date, fkTochtenId: number, fkKlantenId: number, fkStatussenId: number): Promise<Boeking> {
    return prisma.boeking.update({
        where: { id },
        data: { startDatum, fkTochtenId, fkKlantenId, fkStatussenId },
    });
}

function deleteBoeking(id: number): Promise<Boeking> {
    return prisma.boeking.delete({
        where: { id },
    });
}

function getBoekingById(id: number): Promise<Boeking | null> {
    return prisma.boeking.findUnique({
        where: { id },
    });
}

export {
    getAllBoekingen,
    createBoeking,
    updateBoeking,
    deleteBoeking,
    getBoekingById,
};
