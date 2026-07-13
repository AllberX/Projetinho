document.querySelectorAll('.faq-question').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const isOpen = item.classList.contains('active');

    document.querySelectorAll('.faq-item').forEach((faqItem) => {
      faqItem.classList.remove('active');
    });

    if (!isOpen) {
      item.classList.add('active');
    }
  });
});