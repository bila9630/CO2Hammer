import { Container, Image, Card, Group, Text } from '@mantine/core'
import React, { useContext } from 'react'
import { DatabaseContext } from '../context/DatabaseContext';

const Secondstep = () => {
    const { celcius }: any = useContext(DatabaseContext);
    return (
        <div>
            <Container>
                <div style={{ marginLeft: "auto", marginRight: "auto" }}>
                    <Image
                        radius={"md"}
                        src="step2.png"
                        alt="second step"
                    />
                </div>
                <h2>Schritt 2: Bestandsanalyse</h2>
                <h3>Klimawirkung des Gebäudes: {celcius}</h3>
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
                <Card shadow="sm" p="lg" radius="md" withBorder>
                    <Group position="apart" mt="md" mb="xs">
                        <Text weight={500}>Am Schluss dieses Schrittes erfahren Sie:</Text>
                    </Group>
                    <Text size="sm" color="dimmed">
                        - welche Maßnahmen sich für Ihr Gebäude am besten eignen <br />
                        - wie viel Energie und CO2 Sie durch die Modernisierung sparen
                    </Text>
                </Card>
            </Container>
        </div>
    )
}

export default Secondstep