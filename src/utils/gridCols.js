export function statsGridCols(count) {
    if (count <= 0) return 'repeat(1, 1fr)';
    if (count <= 3) return `repeat(${count}, 1fr)`;  // always single row for small counts
    const cols = Math.ceil(Math.sqrt(count));
    return `repeat(${cols}, 1fr)`;
}