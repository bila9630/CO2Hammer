import { Button, Container, Radio, NumberInput } from '@mantine/core'
import React, { useContext, useState } from 'react'
import { useRouter } from "next/router";
import { DatabaseContext } from '../context/DatabaseContext';

const Firststep = () => {
    const router = useRouter();
    const [area, setArea] = useState<any | null>(500)
    const [gas, setGas] = useState<any | null>(80000)
    const [electric, setElectric] = useState<any | null>(20000)
    const [person, setPerson] = useState("Hauseigentümer*in")
    const [propertyType, setPropertyType] = useState("RESIDENTIAL_MULTI_FAMILY_HOUSING")
    const { setCelcius, setGasConsumption, setElectricConsumption }: any = useContext(DatabaseContext);

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
                    value={person}
                    onChange={setPerson}
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
                    value={propertyType}
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
                <br />
                <div style={{ display: "flex", justifyContent: "center", marginTop: 20, marginBottom: 20 }}>
                    <Button variant="filled" onClick={() => {
                        setGasConsumption(gas)
                        setElectricConsumption(electric)
                        switchPage()
                    }}>
                        Berechnen</Button>
                </div>
            </Container>
        </div>
    )
}

export default Firststep