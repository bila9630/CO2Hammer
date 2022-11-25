import { Container, Grid } from '@mantine/core'
import React from 'react'
import { StatsRingCard } from '../components/StatsRingCard'

const Result = () => {
    return (
        <div>
            <Container>
                <h2>Ergebnis: Ihr Sparpotenzial ist hoch!</h2>
                <Grid>
                    <Grid.Col sm={12} md={6}>
                        <StatsRingCard
                            title="Fenster austauschen"
                            completed={90}
                            total={5000}
                            cost={30}
                            stats={[
                                { "value": 447, "label": "Remaining" },
                                { "value": 76, "label": "In progress" },
                            ]}
                        />
                    </Grid.Col>
                    <Grid.Col sm={12} md={6}>
                        <StatsRingCard
                            title="Wärmepumpe einbauen"
                            completed={120}
                            total={20000}
                            cost={40}
                            stats={[
                                { "value": 447, "label": "Remaining" },
                                { "value": 76, "label": "In progress" },
                            ]}
                        />
                    </Grid.Col>
                    <Grid.Col sm={12} md={6}>
                        <StatsRingCard
                            title="Dach erneuern"
                            completed={20}
                            total={15000}
                            cost={35}
                            stats={[
                                { "value": 447, "label": "Remaining" },
                                { "value": 76, "label": "In progress" },
                            ]}
                        />
                    </Grid.Col>
                    <Grid.Col sm={12} md={6}>
                        <StatsRingCard
                            title="PV-Anlage einbauen"
                            completed={110}
                            total={10000}
                            cost={60}
                            stats={[
                                { "value": 447, "label": "Remaining" },
                                { "value": 76, "label": "In progress" },
                            ]}
                        />
                    </Grid.Col>
                </Grid>


            </Container>
        </div>
    )
}

export default Result