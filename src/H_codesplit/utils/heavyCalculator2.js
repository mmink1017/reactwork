export function analyzeText(text) {
    const words = text.trim().split(/\s+/).filter(() => true);

    const charCount = text.length;

    const wordCount = words.length;

    const frequency = {};

    words.forEach((w) => {
        const cleanWord = w.toLowerCase().replace(/[^a-zA-Z0-9가-힣]/g, "");
        if (cleanWord) {
            frequency[cleanWord] = (frequency[cleanWord] || 0) + 1;
        }
    });

    return {
        charCount,
        wordCount,
        topWords: Object.entries(frequency)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5),
    };
}