setTimeout(function(){
    Toastify({
        text: "Olá, Seja Bem Vindo!",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #FFC222, #FF0000)",
        },
    }).showToast();
},400);