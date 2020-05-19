document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
    const number = document.querySelector('input[type="number"]').value;
    const xhr = new XMLHttpRequest();
    const url = `http://api.icndb.com/jokes/random/${number}ee`;

    xhr.open('GET', url, true);

    xhr.onload = function () {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            console.log(response);
            let jokesList = '';

            if (response.type === 'success') {
                //response.forEach will not work since response is an object
                response.value.forEach(function (joke) {
                    jokesList += `<li>${joke.joke}</li>`;

                });

            } else {
                output += `<li>Something went wrong!</li>`;
            }
            document.querySelector('.jokes').innerHTML = jokesList;
        }
    }

    xhr.send();

    e.preventDefault();
}
