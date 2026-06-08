const express = require('express'); // <-- VÉRIFIEZ BIEN QUE CETTE LIGNE EST LÀ !
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send('🚀 Mon pipeline CI/CD fonctionne avec succès !');
});

app.listen(PORT, () => {
    console.log(`Application démarrée sur le port ${PORT}`);
});
