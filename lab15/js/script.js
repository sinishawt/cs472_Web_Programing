/*

    This is the JS file for E library Application

    I have used the XMLHttpRequest method for the List of books Page

    and Fetch to Add New Book

    @author Sinishaw T.

 */

const ourRequest = new XMLHttpRequest();
$(document).ready(function () {

    const sPath = window.location.pathname;
    const sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
    if(sPage === "ListOfBooks.html"){
        listBooks();
    }
    else if(sPage  === "AddNewBook.html"){
        newBook();
        console.log("This is add new book");
    }




});

function listBooks() {
    ourRequest.open('GET', 'https://elibraryrestapi.herokuapp.com/elibrary/api/book/list');

    ourRequest.onload = function () {
        if(ourRequest.status >= 200 && ourRequest.status <400){
            const ourData = JSON.parse(ourRequest.responseText);
            renderHTML(ourData);
        }else {
            console.log("Connected to server but data problem");
        }

    };
    ourRequest.onerror = function(){
        console.log("Connection Error");
    };

    ourRequest.send();
}

function newBook() {
    const bookForm = document.getElementById("form");
    const isbnTxt = document.querySelector("#isbn");
    const titleTxt= document.querySelector("#bookTitle");
    const overdueTxt = document.querySelector("#overdueFee");
    const publisherTxt = document.querySelector("#publisher");
    const datePublishedTxt = document.querySelector("#date");
    const alertMessage = document.getElementById("alert");
    const alertMessage2 = document.getElementById("alert2");

    bookForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const isbn = isbnTxt.value;
        const title = titleTxt.value;
        const overdue = parseFloat(overdueTxt.value);
        const publisher = publisherTxt.value;
        const datePublished = datePublishedTxt.value;

        const newBookData = {
            "isbn": isbn,
            "title": title,
            "overdueFee": overdue,
            "publisher": publisher,
            "datePublished": datePublished
        };

        fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/add", {
            method: "post",
            body: JSON.stringify(newBookData),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response) {
            return response.json();
        }).then(function (jsonResponseData) {
                console.log(jsonResponseData);
                alertMessage.style.display = "block";
                //clean inputs
                isbnTxt.value = "";
                titleTxt.value = "";
                overdueTxt.value = "0.00";
                publisherTxt.value = "";
                datePublishedTxt.value = "";

                titleTxt.focus();
        }).catch(function (error) {
            console.error(error);
            alertMessage2.style.display = "block";
        })

    });
}

function renderHTML(data) {
    let htmlstring = "";


    for(const book in data){
            htmlstring +=
           " <tr>" +
               " <th scope=\"row\">" + data[book].bookId + "</th> " +
                "<td>" + data[book].isbn + "</td> " +
                "<td>" + data[book].title + "</td> " +
                "<td>" + data[book].overdueFee + "</td> " +
                "<td>" + data[book].publisher + "</td> " +
                "<td>" + data[book].datePublished + "</td> ";
    }


    htmlstring += "</tr>";

    display.insertAdjacentHTML('beforeend', htmlstring);
}
