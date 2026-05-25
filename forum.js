console.log("Forum-sivu avattu")

const messages = [
    {
        "sender": "mr customer",
        "date": "2010-05-10",
        "title": "looking for someone",
        "body": "Hi, I'm looking for someone I used to know in high school. I'm wondering if I could find him here?"
    },
    {
        "sender": "Moe",
        "date": "2010-05-10",
        "title": "re: looking for someone",
        "body": "Let's ask around. What's his name?"
    },
    {
        "sender": "mr customer",
        "date": "2010-05-10",
        "title": "re: looking for someone",
        "body": "Yeah, his name is Seymore Butz."
    },
    {
        "sender": "Moe",
        "date": "2010-05-10",
        "title": "re: looking for someone",
        "body": "Is there a Butz here? Everybody! I wanna Seymore Butz!"
    },
    {
        "sender": "Barney",
        "date": "2010-05-10",
        "title": "re: looking for someone",
        "body": "LOL"
    },
    {
        "sender": "Moe",
        "date": "2010-05-10",
        "title": "re: looking for someone",
        "body": "Oh, wait a minute. Listen you little scum-sucking pus bucket. When I get my hands on you, I'm gonna pull out your eyeballs with a corkscrew!"
    },
    {
        "sender": "mr customer",
        "date": "2010-05-10",
        "title": "re: looking for someone",
        "body": "😂😂😂😂😂😂😂😂😂😂😂"
    }
]

    const messageList = document.getElementById("messageList");
    const dialog = document.getElementById("messageDialog");


    function renderMessages() {

      messageList.innerHTML = "";

      messages.forEach(message => {

        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message");

        messageDiv.innerHTML = `
          <small>${message.sender} - ${message.date}</small>
          <h3>${message.title}</h3>
          <p>${message.content}</p>
        `;

        messageList.appendChild(messageDiv);
      });
    }

    document
      .getElementById("openDialogBtn")
      .addEventListener("click", () => {
        dialog.showModal();
      });

    document
      .getElementById("cancelBtn")
      .addEventListener("click", () => {

        dialog.close();
      });

    document
      .getElementById("messageForm")
      .addEventListener("submit", (event) => {

        event.preventDefault();

        const today = new Date();

        const date =
          today.getDate() + "." +
          (today.getMonth() + 1) + "." +
          today.getFullYear();

        const newMessage = {
          sender: document.getElementById("sender").value,
          date: date,
          title: document.getElementById("title").value,
          content: document.getElementById("content").value
        };

        messages.push(newMessage);

        renderMessages();

        document.getElementById("messageForm").reset();

        dialog.close();
      });

    renderMessages();


    