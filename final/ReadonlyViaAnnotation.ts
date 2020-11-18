export { };

// Define by sleek / styled-components
interface Theme {
    readonly primary: string;
    readonly fontWeight: number;
}

// Application space

const THEME = {
    primary: '#212121',
    fontWeight: 600,
} as const;

