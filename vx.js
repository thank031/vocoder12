document.addEventListener('DOMContentLoaded', () => {
    // สร้างเอฟเฟกต์ไล่สีฟ้า-น้ำเงิน-ขาว ให้แต่ละเมนู
    const menuItems = document.querySelectorAll('.menu li a');
    const colors = ['#b3e0ff', '#80c1ff', '#4da3ff', '#1a85ff'];

    menuItems.forEach((item, index) => {
        const color = colors[index % colors.length];
        item.style.backgroundColor = color;
        item.style.color = '#003366';
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = '#003366';
            item.style.color = '#ffffff';
        });
        item.addEventListener('mouseleave', () => {
            item.style.backgroundColor = color;
            item.style.color = '#003366';
        });
    });

    // เพิ่มเอฟเฟกต์เลื่อนเนื้อหาให้เมนูเปลี่ยนสีเมื่อ scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if(window.scrollY > 50){
            nav.style.backgroundColor = '#0059b3';
        } else {
            nav.style.backgroundColor = '#007acc';
        }
    });
});