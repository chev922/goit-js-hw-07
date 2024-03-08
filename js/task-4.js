const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
    event.preventDefault();

    const formData = {};
    const formElements = event.target.elements;

    for (const element of formElements) {
        if (element.nodeName === 'INPUT') {
            const trimmedValue = element.value.trim();
            formData[element.name] = trimmedValue;

            if (!trimmedValue) {
                alert('All form fields must be filled in');
                return;
            }
        }
    }

    console.log(formData);
    loginForm.reset();
});
