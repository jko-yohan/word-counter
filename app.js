(() => {
    const input = document.getElementById('text-input');

    function update() {
        const text = input.value;
        const trimmed = text.trim();

        const words = trimmed ? trimmed.split(/\s+/).length : 0;
        const characters = text.length;
        const charactersNoSpace = text.replace(/\s/g, '').length;
        const sentences = trimmed ? (trimmed.match(/[.!?]+/g) || []).length || (trimmed.length > 0 ? 1 : 0) : 0;
        const paragraphs = trimmed ? trimmed.split(/\n\s*\n/).filter(p => p.trim()).length : 0;

        const readingMin = words / 275;
        const speakingMin = words / 150;

        document.getElementById('words').textContent = words;
        document.getElementById('characters').textContent = characters;
        document.getElementById('characters-no-space').textContent = charactersNoSpace;
        document.getElementById('sentences').textContent = sentences;
        document.getElementById('paragraphs').textContent = paragraphs;
        document.getElementById('reading-time').textContent = formatTime(readingMin);
        document.getElementById('speaking-time').textContent = formatTime(speakingMin);
    }

    function formatTime(minutes) {
        if (minutes < 1) return Math.round(minutes * 60) + 's';
        const m = Math.floor(minutes);
        const s = Math.round((minutes - m) * 60);
        return m + 'm ' + s + 's';
    }

    input.addEventListener('input', update);

    document.getElementById('btn-clear').addEventListener('click', () => {
        input.value = '';
        update();
    });

    document.getElementById('btn-copy').addEventListener('click', () => {
        navigator.clipboard.writeText(input.value);
    });

    document.getElementById('btn-uppercase').addEventListener('click', () => {
        input.value = input.value.toUpperCase();
        update();
    });

    document.getElementById('btn-lowercase').addEventListener('click', () => {
        input.value = input.value.toLowerCase();
        update();
    });

    document.getElementById('btn-titlecase').addEventListener('click', () => {
        input.value = input.value.replace(/\b\w/g, c => c.toUpperCase());
        update();
    });
})();
