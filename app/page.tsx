'use client'

import {Card} from "@/components/ui/card";
import UserItem from "@/components/user";

export default function Home () {
        // Define a user object with sample data
        const user = {
                id: 1,
                email: 'example@example.com',
                password: 'password123',
                name: 'John Doe',
                role: 'user',
        };
    return (
        <section>
            <Card>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus aperiam consectetur debitis dolorem enim eveniet, hic itaque nulla pariatur quaerat quisquam, ratione, repellendus rerum totam. Ab est harum voluptatibus?</p>
            </Card>
                <UserItem user={user} />
        </section>
    )
}