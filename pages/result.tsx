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
                            total={100}
                            stats={[
                                { "value": 447, "label": "Remaining" },
                                { "value": 76, "label": "In progress" },
                            ]}
                        />
                    </Grid.Col>
                    <Grid.Col sm={12} md={6}>
                        <StatsRingCard
                            title="Wärmepumpe einbauen"
                            completed={1887}
                            total={2334}
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