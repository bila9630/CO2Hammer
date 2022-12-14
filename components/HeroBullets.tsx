import {
    createStyles,
    Image,
    Container,
    Title,
    Button,
    Group,
    Text,
    List,
    ThemeIcon,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons';
import { useRouter } from "next/router";
// import image from '/env_study.svg';

const useStyles = createStyles((theme) => ({
    inner: {
        display: 'flex',
        justifyContent: 'space-between',
    },

    content: {
        maxWidth: 480,
        marginRight: theme.spacing.xl * 3,

        [theme.fn.smallerThan('md')]: {
            maxWidth: '100%',
            marginRight: 0,
        },
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: 44,
        lineHeight: 1.2,
        fontWeight: 900,

        [theme.fn.smallerThan('xs')]: {
            fontSize: 28,
        },
    },

    control: {
        [theme.fn.smallerThan('xs')]: {
            flex: 1,
        },
    },

    image: {
        flex: 1,

        [theme.fn.smallerThan('md')]: {
            display: 'none',
        },
    },

    highlight: {
        position: 'relative',
        backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
        borderRadius: theme.radius.sm,
        padding: '4px 12px',
    },
}));

export function HeroBullets() {
    const { classes } = useStyles();
    const router = useRouter();

    const switchPage = () => {
        router.push("/firststep")
    }

    return (
        <div>
            <Container>
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>
                            <span className={classes.highlight}>CO2 Hammer</span> ist die Plattform für Ihre energetische Modernisierung
                        </Title>
                        

                        <List
                            mt={30}
                            spacing="sm"
                            size="sm"
                            icon={
                                <ThemeIcon size={20} radius="xl">
                                    <IconCheck size={12} stroke={1.5} />
                                </ThemeIcon>
                            }
                        >
                            <List.Item>
                                <b>Ihr Beitrag zum Klimawandel</b> – Reduzieren Sie Ihre CO2-Emissionen und kommen Sie auf den 1,5°C Pfad
                            </List.Item>
                            <List.Item>
                                <b>Personalisierte Maßnahmen</b> – Wir entwickeln für Sie individuelle Maßnahmen abgestimmt auf Ihre Immobilie
                            </List.Item>
                            <List.Item>
                                <b>Steckbrief in 5 Minuten</b> – Erstellen Sie kostenlos und unverbindlich einen Steckbrief
                                mit individuellen Maßnahmen
                            </List.Item>
                        </List>

                        <Group mt={30}>
                            <Button radius="xl" size="md" className={classes.control} onClick={() => switchPage()}>
                                Jetzt berechnen
                            </Button>
                        </Group>
                    </div>
                    <Image src={"/steckbrief.png"} className={classes.image} alt={"man analyses trees"} />
                </div>
            </Container>
        </div>
    );
}