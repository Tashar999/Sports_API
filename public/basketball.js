async function getBasketballData(first_name, last_name) {
    try {
        const response = await fetch(`http://localhost:3000/api/basketball?first_name=${first_name}&last_name=${last_name}`);
            if (!response.ok) {
            throw new Error('Failed to fetch basketball data');
        }
        const data = await response.json();

        console.log(data)
        console.log(data.player.data[0])
    } catch (error) {
        console.error('Error:', error);
    }
}

document.getElementById('BBPSearch').addEventListener('click', function() {
    const firstName = document.getElementById('BBPFirstName').value;
    const lastName = document.getElementById('BBPLastName').value;
    
    getBasketballData(firstName, lastName);
});