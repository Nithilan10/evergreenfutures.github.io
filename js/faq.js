// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const button = item.querySelector('button');
    const content = item.querySelector('.accordion-content');

    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      
      // Close all other accordion items
      accordionItems.forEach(otherItem => {
        const otherButton = otherItem.querySelector('button');
        const otherContent = otherItem.querySelector('.accordion-content');
        
        if (otherItem !== item) {
          otherButton.setAttribute('aria-expanded', 'false');
          otherContent.style.maxHeight = '0';
          otherContent.style.padding = '0 1.5rem';
        }
      });

      // Toggle current item
      button.setAttribute('aria-expanded', !isExpanded);
      
      if (!isExpanded) {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.padding = '0 1.5rem 1.5rem';
      } else {
        content.style.maxHeight = '0';
        content.style.padding = '0 1.5rem';
      }
    });
  });
}); 