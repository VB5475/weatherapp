document.addEventListener('DOMContentLoaded', () => {
    function updateClock() {
        const now = new Date();
        document.getElementById('header-date').textContent = now.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        document.getElementById('header-time').textContent = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }
    setInterval(updateClock, 1000);
    updateClock();

    const empCode = sessionStorage.getItem('empCode') || '20047859';
    const proc = sessionStorage.getItem('proc') || 'TRANSFER';
    if(document.getElementById('emp-code-display')) document.getElementById('emp-code-display').textContent = empCode;
    if(document.getElementById('proc-badge')) document.getElementById('proc-badge').textContent = proc;

    const submitBtn = document.getElementById('submit-btn');
    const overlay = document.getElementById('success-overlay');
    if(submitBtn) {
        submitBtn.addEventListener('click', () => {
            overlay.classList.add('active');
        });
    }
});
