
type NamedStyles<T> = { [P in keyof T]: React.CSSProperties };

interface IStyleSheet {
    create: <T extends NamedStyles<T>>(styles: T) => T,
    compose<T extends React.CSSProperties>(styles: T[]): T,
    compose<T extends React.CSSProperties>(...styles: T[]): T,
}

const StyleSheet: IStyleSheet = {
    create: <T extends NamedStyles<T>>(styles: T): T => {
        return styles;
    },
    compose: <T extends React.CSSProperties>(...styles: T[]): T => {
        let composedStyles: T = {} as T;
        for (const style of Array.isArray(styles[0]) ? styles[0] : styles) {
            if (typeof style !== 'object') {
                throw new Error('Invalid style object');
            }
            composedStyles = {
                ...composedStyles,
                ...style,
            };
        }
        return composedStyles;
    },
};

export { StyleSheet };
