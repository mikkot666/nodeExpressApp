const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

app.listen(port, () => console.log(`Esimerkki ohjelma kuuntelee portissa ${port}!`));

const html = `
<!DOCTYPE html>
<html>
    <head>
        <title>
            Moikka täältä Renderistä!
        </title>
    </head>
    <body>
        <section>
            Moikka Täältä Renderistä!
        </section>
    </body>
</html>
`