import { Container, Grid, Image } from '@mantine/core'
import React from 'react'
import { Card, Text, Button, Group } from '@mantine/core';
import { useRouter } from "next/router";

const Overview = () => {
    const router = useRouter();

    const switchPage = () => {
        router.push("/firststep");
    }
    return (
        <div>
            <Container>
                <div style={{ marginLeft: "auto", marginRight: "auto" }}>
                    <Image
                        radius={"md"}
                        src="step1.png"
                        alt="first step"
                    />
                </div>
                <h2>Schritt 1: Verbrauchsanalyse</h2>
                <p>
                    Für das Prüfen des Potenzials Ihres Gebäudes bewerten wir als
                    erstes den aktuellen Energieverbrauch.
                </p>
                <p>
                    Dafür geben Sie die Basisdaten Ihres Gebäudes und des verwendeten
                    Heizsystems an. Dazu noch die Verbrauchsdaten von mindestens einem
                    Abrechnungszeitraum.
                </p>
                <Grid>
                    <Grid.Col sm={12} md={6}>
                        <Card shadow="sm" p="lg" radius="md" withBorder>
                            <Group position="apart" mt="md" mb="xs">
                                <Text weight={500}>Am Schluss dieses Schritts erfahren Sie:</Text>
                            </Group>
                            <Text size="sm" color="dimmed">
                                - wie viel Energie Ihr Gebäude verbraucht <br />
                                - ob es im Vergleich zu ähnlichen Gebäuden gut oder schlecht dasteht <br />
                                - wie groß der Einfluss Ihres Energieverbrauchs auf das Klima ist
                            </Text>
                        </Card>
                    </Grid.Col>
                    <Grid.Col sm={12} md={6}>
                        <Card shadow="sm" p="lg" radius="md" withBorder>
                            <Group position="apart" mt="md" mb="xs">
                                <Text weight={500}>Bitte halten Sie diese Informationen bereit:</Text>
                            </Group>
                            <Text size="sm" color="dimmed">
                                Verbrauchsdaten, zum Beispiel in Form einer Energiekostenabrechnung, einer Abschlagszahlung oder Zählerständen
                            </Text>
                        </Card>
                    </Grid.Col>
                </Grid>
                <div style={{ display: "flex", justifyContent: "center", marginTop: 20, marginBottom: 20 }}>
                    <Button variant="filled" onClick={() => switchPage()}>Weiter mit Schritt 1</Button>
                </div>
            </Container>
        </div>
    )
}

export default Overview