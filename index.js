const express = require('express');
const bp = require('body-parser');
const app = express();
const service = require('./src/services');
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

const router = express.Router();
router.get('/', (req, res) => {
  res.send('rodando');
});

router.get('/api/v1/bills', service.getBills);
router.delete('/api/v1/bills/:id', service.deleteBills);
router.post('/api/v1/bills', service.newBiils);

app.use('/', router);

const porta = process.env.PORT;
console.log(porta);

app.listen(porta || 8081, () => {
  console.log('Server startado na porta 8081');
});
