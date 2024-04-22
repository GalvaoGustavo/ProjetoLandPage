function toggleReadMore(btn) {
    const content = btn.previousElementSibling;
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
    btn.innerText = content.style.display === 'none' ? 'Ler mais' : 'Ler menos';
}
