document.addEventListener('DOMContentLoaded', () => {
    const weightInput = document.getElementById('weightInput');
    const submitWeight = document.getElementById('submitWeight');
    const result = document.getElementById('result');

    submitWeight.addEventListener('click', () => {
        const weight = weightInput.value;
        if (weight) {
            fetch('/api/weight', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ weight })
            })
            .then(response => response.json())
            .then(data => {
                result.innerHTML = `<p>Your weight is ${data.weight} kg</p>`;
            })
            .catch(error => {
                result.innerHTML = `<p>Error: ${error.message}</p>`;
            });
        } else {
            result.innerHTML = '<p>Please enter a valid weight.</p>';
        }
    });
});
