export const getEnv = (key, defaultValue = undefined) => {
    const value = process.env[key];

    if (value === undefined) {
        if (defaultValue !== undefined) {
            return defaultValue;
        }
        throw new Error(`Environment variable ${key} is missing!`);
    }

    return value;
};
