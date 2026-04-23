document.addEventListener('DOMContentLoaded', () => {
    function updateClock() {
        const now = new Date();
        document.getElementById('header-date').textContent = now.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        document.getElementById('header-time').textContent = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }
    setInterval(updateClock, 1000);
    updateClock();

    const processCards = document.querySelectorAll('.process-card');
    let selectedProcess = 'Transfer';
    processCards.forEach(card => {
        card.addEventListener('click', () => {
            processCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            selectedProcess = card.dataset.value;
        });
    });

    const reqOtpBtn = document.getElementById('req-otp-btn');
    const otpArea = document.getElementById('otp-area');
    const empCodeInput = document.getElementById('empCode');
    const otpInputs = document.querySelectorAll('.otp-box');

    if(reqOtpBtn) {
        reqOtpBtn.addEventListener('click', () => {
            if (!empCodeInput.value.trim()) { alert('Enter employee code'); return; }
            otpArea.style.display = 'block';
            otpInputs[0].focus();
        });
    }

    otpInputs.forEach((input, idx) => {
        input.addEventListener('input', (e) => { if (e.target.value.length === 1 && idx < otpInputs.length - 1) otpInputs[idx + 1].focus(); });
        input.addEventListener('keydown', (e) => { if (e.key === 'Backspace' && !e.target.value && idx > 0) otpInputs[idx - 1].focus(); });
    });

    const verifyBtn = document.getElementById('verify-btn');
    if(verifyBtn) {
        verifyBtn.addEventListener('click', () => {
            if (otpArea.style.display === 'none' || !otpArea.style.display) { reqOtpBtn.click(); return; }
            const otpValues = Array.from(otpInputs).map(i => i.value).join('');
            if (otpValues === '1234') {
                sessionStorage.setItem('empCode', empCodeInput.value.trim());
                sessionStorage.setItem('proc', selectedProcess);
                window.location.href = 'transfer_page2_new.html';
            } else {
                document.getElementById('otp-error').style.display = 'block';
            }
        });
    }
});
