document.addEventListener('DOMContentLoaded', () => {
    // ── DATE & TIME ──
    function updateClock() {
        const now = new Date();
        const dateStr = now.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        const timeStr = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        document.getElementById('header-date').textContent = dateStr;
        document.getElementById('header-time').textContent = timeStr;
    }
    setInterval(updateClock, 1000);
    updateClock();

    // ── POPULATE DATA ──
    const empCode = sessionStorage.getItem('empCode') || '20047859';
    const proc = sessionStorage.getItem('proc') || 'Transfer';
    
    document.getElementById('emp-code-display').textContent = empCode;
    document.getElementById('proc-badge').textContent = proc;

    // ── SUBMISSION LOGIC ──
    const submitBtn = document.getElementById('submit-btn');
    const overlay = document.getElementById('success-overlay');

    submitBtn.addEventListener('click', () => {
        // Here you would normally do an AJAX post
        overlay.classList.add('active');
    });
});
