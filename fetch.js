let text_id = document.getElementById("text_id");

let author_id = document.getElementById("author_id");

// let tag_id = document.getElementById("tag_id");

let btnquotee = document.getElementById("btnquote");

console.log("Hiii");


function generatequote() {

    try {
        console.log("Hiii....");

        console.log("Hello")

        fetch("https://jacintodesign.github.io/quotes-api/data/quotes.json").then(response => {
            return response.json()
        }).then(data => {
            console.log(data)

            let randomValue = Math.floor(Math.random() * 1000);
            console.log(randomValue);



            if (text_id.textContent.length > 80) {

                text_id.style.fontSize = "32px"
            } else {
                text_id.style.fontSize = "44px"

            }
            text_id.innerHTML =   '<span class="big-quote">"  </span>' +   data[randomValue].text
            // tag_id.textContent = data[randomValue].tag

            author_id.textContent =
                (data[randomValue].author.trim() === "Anonymous")
                    ? "Undefined"
                    : data[randomValue].author.trim();
        })

    } catch (error) {

    }
}

try {

    btnquotee.addEventListener("click", generatequote)
} catch (error) {
    console.log(error)
}

