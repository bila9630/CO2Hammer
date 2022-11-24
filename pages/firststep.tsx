import { Button, Container, Radio } from '@mantine/core'
import React from 'react'
import { useRouter } from "next/router";

const Firststep = () => {
    const router = useRouter();

    const switchPage = () => {
        router.push("/secondstep");
    }

    return (
        <div>
            <Container>
                <h2>Schritt 1: Verbrauchsanalyse Fragen</h2>
                <Radio.Group
                    name="person"
                    label="Ich bin"
                    withAsterisk
                >
                    <Radio value="Hauseigentümer*in" label="Hauseigentümer*in" />
                    <Radio value="Wohnungseigentümer*in" label="Wohnungseigentümer*in" />
                    <Radio value="Hausverwalter*in" label="Hausverwalter*in" />
                    <Radio value="Mieter*in" label="Mieter*in" />
                </Radio.Group>
                <br />
                <Radio.Group
                    name="home type"
                    label="Das Gebäude ist ein..."
                    withAsterisk
                >
                    <Radio value="Ein- oder Zweifamilienhaus" label="Ein- oder Zweifamilienhaus" />
                    <Radio value="Mehrfamilienhaus" label="Mehrfamilienhaus" />
                </Radio.Group>
                <br />
                <Radio.Group
                    name="heating"
                    label="In dem Gebäude läuft eine..."
                    withAsterisk
                >
                    <Radio value="Zentralheizung" label="Zentralheizung" />
                    <Radio value="Nachtspeicherheizung" label="Nachtspeicherheizung" />
                </Radio.Group>
                <br />
                <Radio.Group
                    name="heating material"
                    label="Es wird geheizt mit..."
                    withAsterisk
                >
                    <Radio value="Erdgas" label="Erdgas" />
                    <Radio value="Heizöl" label="Heizöl" />
                    <Radio value="Fernwärme" label="Fernwärme" />
                    <Radio value="Flüssiggas" label="Flüssiggas" />
                    <Radio value="Holzpellets" label="Holzpellets" />
                    <Radio value="Erdwärmepumpe" label="Erdwärmepumpe" />
                    <Radio value="Luftwärmepumpe" label="Luftwärmepumpe" />
                    <Radio value="Grundwasserwärmepumpe" label="Grundwasserwärmepumpe" />
                </Radio.Group>
                <p>Es folgen Inputs, die zur API weitergeleitet werden</p>
                <br />
                <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
                    <Button variant="filled" onClick={() => switchPage()}>Weiter mit Schritt 1</Button>
                </div>
            </Container>
        </div>
    )
}

export default Firststep