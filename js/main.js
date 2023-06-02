/* Validation form */

$(document).ready(function () {
  const $RegisterName = $('#name');
  const $RegisterEmail = $('#email');
  const $RegisterMessage = $('.form-textarea');
  const $RegisterForm = $('.registration__form-area');

  function validateField($field, regex) {
    if (!regex.test($field.val().trim())) {
      $field.css({
        border: '1px solid red',
        boxShadow: 'inset 0 0 5px red'
      });
      return false;
    } else {
      $field.css({
        border: '',
        boxShadow: ''
      });
      return true;
    }
  }

  $RegisterName.blur(function () {
    validateField($RegisterName, /^[A-Za-z\s]+$/);
  });

  $RegisterEmail.blur(function () {
    validateField($RegisterEmail, /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  });

  $RegisterMessage.blur(function () {
    validateField($RegisterMessage, /^.+$/);
  });

  $RegisterForm.submit(function (event) {
    event.preventDefault();
    if (validateField($RegisterName, /^[A-Za-z\s]+$/) &&
      validateField($RegisterEmail, /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) &&
      validateField($RegisterMessage, /^.+$/)) {
      console.log('Form submitted successfully');
    }
  });
});

/* Navigation */
document.querySelectorAll('.header__burger-menu-list-item-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const blockID = this.getAttribute('href').substr(1);
    const element = document.getElementById(blockID);
    const headerHeight = 80;
    const windowHeight = window.innerHeight;

    const elementOffsetTop = element.getBoundingClientRect().top + window.pageYOffset;

    const yOffset = headerHeight > windowHeight ? -(headerHeight - windowHeight) / 2 : -headerHeight / 2;
    const y = elementOffsetTop + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  });
});


