export function randomSettings() {
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    const rotate = Math.floor(Math.random() * 90) - 45;
    let fontSize = Math.floor(Math.random() * 5);
    fontSize = fontSize < 2 ? 2 : fontSize;
    return { x, y, rotate, fontSize };
}

export function ramdonColor() {
    const rgb = {
        r: Math.floor(Math.random() * 255),
        g: Math.floor(Math.random() * 255),
        b: Math.floor(Math.random() * 255)
    }
    return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
}

export function selectFontFamily() {
    const fonts = [
        'Croissant One, cursive',
        'Dosis, sans-serif',
        'Indie Flower, cursive',
        'Josefin Sans, sans-serif',
        'Lilita One, cursive',
        'Lobster, cursive',
        'Onest, sans-serif',
        'Pacifico, cursive',
        'Permanent Marker, cursive',
        'Shadows Into Light, cursive'
    ];
    const index = Math.floor(Math.random() * fonts.length);
    return fonts[index]
}