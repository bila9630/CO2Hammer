import { Button, Container, Radio, NumberInput } from '@mantine/core'
import React, { useContext, useState } from 'react'
import { useRouter } from "next/router";
import { DatabaseContext } from '../context/DatabaseContext';

const Firststep = () => {
    const router = useRouter();
    const [area, setArea] = useState<any | null>(100)
    const [gas, setGas] = useState<any | null>(4000)
    const [electric, setElectric] = useState<any | null>(10000)
    const [propertyType, setPropertyType] = useState("RESIDENTIAL_SINGLE_FAMILY_HOUSING")
    const { setCelcius }: any = useContext(DatabaseContext);

    const switchPage = async () => {

        const response = await fetch("https://gateway2.switchboard-api.de/right/realestatecalculation/v1.0/building/baseline", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'switchboard-key': 'd1e38ac862a54bd2aee335cd342b5038'
            },
            body: JSON.stringify({
                "area": area,
                "baseYear": 2018,
                "country": "DEU",
                "emissions": {
                    "districtCooling": 0,
                    "districtHeating": 0,
                    "electricity": electric * 0.441,
                    "fuel": gas * 0.2,
                    "fugitive": 0
                },
                "propertyType": propertyType,
                // "shares": {
                //     "electricCooling": 0.3,
                //     "electricHeating": 0.27,
                //     "fuelHeating": 0.2
                // },
                "targetYear": 2050
            }),
        })
        let data = await response.json()
        setCelcius(data.total)
        console.log(data)
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
                    onChange={setPropertyType}
                >
                    <Radio value="RESIDENTIAL_SINGLE_FAMILY_HOUSING" label="Ein- oder Zweifamilienhaus" />
                    <Radio value="RESIDENTIAL_MULTI_FAMILY_HOUSING" label="Mehrfamilienhaus" />
                </Radio.Group>
                <br />
                <NumberInput label="Hausfläche in qm" value={area} onChange={(val) => setArea(val)} />
                <br />
                <NumberInput label="Gasverbrauch in kWh" value={gas} onChange={(val) => setGas(val)} />
                <br />
                <NumberInput label="Stromverbrauch in kWh" value={electric} onChange={(val) => setElectric(val)} />
                <br />
                {/* <Radio.Group
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
                </Radio.Group> */}
                <br />
                <div style={{ display: "flex", justifyContent: "center", marginTop: 20, marginBottom: 20 }}>
                    <Button variant="filled" onClick={() => switchPage()}>Weiter mit Schritt 1</Button>
                </div>
            </Container>
        </div>
    )
}

export default Firststep