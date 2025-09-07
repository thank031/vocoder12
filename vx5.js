// highlight ประโยคของ Liang เป็นสีชมพูอ่อน
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container p');
    if(container){
        let html = container.innerHTML;
        html = html.replace(/(Liang: .*?)(<br>)/g, '<span class="highlight">$1</span>$2');
        container.innerHTML = html;
    }

    // เอฟเฟกต์ hover ให้ประโยคตัวอย่างเปลี่ยนสี
    const highlights = document.querySelectorAll('.highlight');
    highlights.forEach(span => {
        span.addEventListener('mouseenter', () => {
            span.style.backgroundColor = '#d1b0ff';
            span.style.color = '#fff';
        });
        span.addEventListener('mouseleave', () => {
            span.style.backgroundColor = '#ffebf5';
            span.style.color = '#4a004f';
        });
    });
});