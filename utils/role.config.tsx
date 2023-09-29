'use server'

import { Role } from "@/utils/role";
import { cookies } from 'next/headers';

export async function getUserRole(): Promise<Role> {
    const userRoleCookie = cookies().get('user-role');
    if (!userRoleCookie || !Object.values(Role).includes(userRoleCookie.value as Role)) {
        return Role.USER;
    }
    return userRoleCookie.value as Role;
}

export async function userHasRole(role: Role): Promise<boolean> {
    return await getUserRole() === role;
}

export async function setUserRole(role: Role) {
    cookies().set('user-role', role);
}
