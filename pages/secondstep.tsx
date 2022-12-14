import { Button, Container, Image, Card, Group, Text, Grid } from '@mantine/core'
import React, { useContext, useState, useEffect } from 'react'
import { DatabaseContext } from '../context/DatabaseContext';
import { useRouter } from "next/router";

// import CustomBarChart from '../components/CustomBarChart';
import dynamic from 'next/dynamic';

const Secondstep = () => {
    const router = useRouter();
    const { celcius }: any = useContext(DatabaseContext);
    const [color, setColor] = useState("#e34e3d")

    useEffect(() => {
        if (celcius < 1.5) {
            setColor("#51CF66")
        } else if (celcius >= 1.5 && celcius < 2.0) {
            setColor("#FCC419")
        }
    }, [celcius])

    const switchPage = () => {
        router.push("/secondquestions");
    }

    const ClientCustomBarChart = dynamic(
        () => import('../components/CustomBarChart'), { ssr: false }
    )

    const ClientCustomAreaChart = dynamic(
        () => import('../components/CustomAreaChart'), { ssr: false }
    )

    return (
        <div>
            <Container>
                <h2>Schritt 2: Verbrauchs- und Bestandsanalyse</h2>
                <h3>Klimawirkung ihres Gebäudes im Vergleich:</h3>
                <p>Klimawirkung des Gebäudes: <Text fz={50} c={color}>{celcius}°C</Text></p>
                <Grid>
                    <Grid.Col sm={12} md={6}>
                        <ClientCustomBarChart />
                    </Grid.Col>
                    <Grid.Col sm={12} md={6}>
                        <ClientCustomAreaChart />
                    </Grid.Col>
                </Grid>
                <p>Für Ihre Beratung betrachten wir das Gebäude ganzheitlich. Dazu benötigen wir weitere Daten:</p>
                <p>
                    - zum Gebäude <br />
                    - der aktuellen Ausstattung sowie <br />
                    - den Maßnahmen, die Sie bereits umgesetzt haben.
                </p>
                <p>
                    Keine Sorge: Sollten Ihnen einzelne Details nicht bekannt sein,
                    können Sie diese Daten auch weglassen. Sie erhalten in jedem Fall
                    ein Ergebnis auf Basis der von Ihnen hinterlegten Daten.
                </p>
                {/* <Card shadow="sm" p="lg" radius="md" withBorder>
                    <Group position="apart" mt="md" mb="xs">
                        <Text weight={500}>Am Schluss dieses Schrittes erfahren Sie:</Text>
                    </Group>
                    <Text size="sm" color="dimmed">
                        - welche Maßnahmen sich für Ihr Gebäude am besten eignen <br />
                        - wie viel Energie und CO2 Sie durch die Modernisierung sparen
                    </Text>
                </Card> */}
                <div style={{ display: "flex", justifyContent: "center", marginTop: 20, marginBottom: 20 }}>
                    <Button variant="filled" onClick={() => switchPage()}>Was kann ich tun?</Button>
                </div>
            </Container>
        </div>
    )
}

export default Secondstep