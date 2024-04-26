export const containerVariants = (delay = 0) => (
    {
        "offscreen": {
            opacity: 0,
            y: 30,
        },
        "onscreen": {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                duration: 2,
                delay
            }
        }
    }
)


export const tagVariants = {
    "offscreen": {
        opacity: 0,
        y: 10,
    },
    "onscreen": {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 2,
        }
    }
}

export const titleVariants = {
    "offscreen": {
        opacity: 0,
        y: 30,
    },
    "onscreen": {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 2.2,
        }
    }
}

export const desVariants = {
    "offscreen": {
        opacity: 0,
        y: 40,
    },
    "onscreen": {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 2.6,
            delay: .4
        }
    }
}

export const xVariants = {
    "offscreen": {
        opacity: 0,
        x: -20,
    },
    "onscreen": {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            duration: 2.6,
            delay: .7
        }
    }
}

export const xVariants2 = {
    "offscreen": { opacity: 0, x: -100 },
    "onscreen": {
        opacity: 1,
        x: 0,
        transition: {
            type: "easeIn",
            duration: 2,
            delay: 0.7,
        },
    }
}

export const xVariants3 = {
    "offscreen": { opacity: 0, x: 100 },
    "onscreen": {
        opacity: 1,
        x: 0,
        transition: {
            type: "easeIn",
            duration: 2,
            delay: 0.7,
        },
    }
}

export const xVariants4 = {
    "offscreen": { opacity: 0, x: -100 },
    "onscreen": {
        opacity: 1,
        x: 0,
        transition: {
            type: "easeIn",
            duration: 1.5,
        },
    }
}