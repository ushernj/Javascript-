const welcome = () => {
    const inputValue = document.querySelector('input').value
    const generatedElement = document.createElement('p');
    generatedElement.innerHTML = '<p>Hello ${inputValue}, welcome to the bootcamp </p>';
    document.body.appendChild(generatedElement);
}
