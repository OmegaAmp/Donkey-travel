import React from 'react';


type BoekingenProps = {
    id: number;
    StartDatum: string;
    PINCode: number;
    FKtochtenID: number;
    FKklantenID: number;
    FKstatussenID: number;
};


function BoekingenItem({
                           id,
                           StartDatum,
                           PINCode,
                           FKtochtenID,
                           FKklantenID,
                           FKstatussenID,
                       }: BoekingenProps) {
    return (
        <section>
            <h1>ID: {id}</h1>
            <p>Start Datum: {StartDatum}</p>
            <p>PIN Code: {PINCode}</p>
            <p>FK Tochten ID: {FKtochtenID}</p>
            <p>FK Klanten ID: {FKklantenID}</p>
            <p>FK Statussen ID: {FKstatussenID}</p>
        </section>
    );
}

export default BoekingenItem;