import { Container, Button, NumberInput, Select, Checkbox } from '@mantine/core'
import React from 'react'
import { useRouter } from "next/router";
import { SliderInput } from '../components/SliderInput';

const Secondquestions = () => {
    const router = useRouter();
    const switchPage = () => {
        router.push("/result");
    }
    return (
        <div>
            <Container>
                <h2>Schritt 2: Verbrauchs- und Bestandsanalyse Fragen</h2>
                <Select
                    label="Heizungstyp?"
                    placeholder="Gas"
                    data={[
                        { value: 'Gas', label: 'Gas' },
                        { value: 'Öl', label: 'Öl' },
                        { value: 'Wärmepumpe', label: 'Wärmepumpe' },
                        { value: 'Pellets', label: 'Pellets' },
                    ]}
                />
                <br />

                <NumberInput
                    defaultValue={1990}
                    placeholder="1990"
                    label="Baujahr"
                />

                <br />
                <Checkbox
                    label="saniert?"
                />
                <br />
                <NumberInput
                    defaultValue={70191}
                    placeholder="70191"
                    label="Postleitzahl"
                />
                <br />
                <SliderInput />
                <br />

                <div style={{ display: "flex", justifyContent: "center", marginTop: 20, marginBottom: 20 }}>
                    <Button variant="filled" onClick={() => switchPage()}>Zu den Maßnahmen</Button>
                </div>
            </Container>
        </div>
    )
}

export default Secondquestions