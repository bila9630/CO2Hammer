import { Container, Button } from '@mantine/core'
import React from 'react'
import { useRouter } from "next/router";

const Secondquestions = () => {
    const router = useRouter();
    const switchPage = () => {
        router.push("/result");
    }
    return (
        <div>
            <Container>
                <h2>Schritt 2: Verbrauchs- und Bestandsanalyse Fragen</h2>
                <p>Heizungstyp/Energieträger</p>
                <p>Baujahr</p>
                <p>Postleitzahl</p>
                <p>Saniert?</p>
                <p>Anzahl an Bewohner</p>
                <p>Gebäudekatalog Tooltips</p>
                <p>Wurden die Fenster saniert?</p>
                <p></p>
                <br />
                <div style={{ display: "flex", justifyContent: "center", marginTop: 20, marginBottom: 20 }}>
                    <Button variant="filled" onClick={() => switchPage()}>Weiter mit Schritt 2</Button>
                </div>
            </Container>
        </div>
    )
}

export default Secondquestions