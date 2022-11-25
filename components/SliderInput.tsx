import { useState } from 'react';
import { createStyles, NumberInput, Slider } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
    },

    input: {
        height: 'auto',
        paddingTop: 22,
        paddingBottom: 3,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
    },

    label: {
        position: 'absolute',
        pointerEvents: 'none',
        paddingLeft: theme.spacing.sm,
        paddingTop: theme.spacing.sm / 2,
        zIndex: 1,
    },

    slider: {
        position: 'absolute',
        width: '100%',
        bottom: -1,
    },

    thumb: {
        width: 16,
        height: 16,
    },

    track: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
    },
}));

export function SliderInput() {
    const { classes } = useStyles();
    const [value, setValue] = useState<number | undefined>(2);
    return (
        <div className={classes.wrapper}>
            <NumberInput
                value={value}
                onChange={setValue}
                label="Anzahl der Bewohner*innen"
                placeholder="4 is an average value"
                step={1}
                min={1}
                max={10}
                hideControls
                classNames={{ input: classes.input, label: classes.label }}
            />
            <Slider
                max={10}
                step={1}
                min={0}
                label={null}
                value={value}
                onChange={setValue}
                size={2}
                radius={0}
                className={classes.slider}
                classNames={{ thumb: classes.thumb, track: classes.track }}
            />
        </div>
    );
}