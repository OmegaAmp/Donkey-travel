import React from 'react';

type UserType = {
    id: number;
    email: string;
    password: string;
    name?: string | null;
    role: string;
};

type UserProps = {
    user: UserType;
};

const UserItem: React.FC<UserProps> = ({ user }) => {
    return (
        <section>
            <h1>User Information</h1>
            <div>
                <strong>ID:</strong> {user.id}
            </div>
            <div>
                <strong>Email:</strong> {user.email}
            </div>
            <div>
                <strong>Password:</strong> {user.password}
            </div>
            {user.name && (
                <div>
                    <strong>Name:</strong> {user.name}
                </div>
            )}
            <div>
                <strong>Role:</strong> {user.role}
            </div>
        </section>
    );
};

export default UserItem;
