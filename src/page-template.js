const body = (cards) => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>

<body>
    <div class="h-15 p-5 bg-danger border rounded-3 text-center text-light">
        <h2>My Team</h2>
    </div>

    <div class="container">
        <div class="row d-flex justify-content-center">

            ${cards}



        </div>

        </div>
    </body>
    <footer class="container text-center py-3">
        <h5 class="text-dark"> &copy; ${new Date().getFullYear()} by Lydia Loy</h5>
    </footer>
    
    </html>
    `
}


module.exports = body;