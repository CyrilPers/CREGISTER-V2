export function decodePdfToLink(encodedPdf) {
    const binaryData = atob(encodedPdf);
    const blob = new Blob([new Uint8Array([...binaryData].map(char => char.charCodeAt(0)))], { type: 'application/pdf' });

    const url = URL.createObjectURL(blob);

    return url;
};