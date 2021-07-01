var NEW_DATA = [];

const deleteBill = (req, res) => {
  var id = `${req.params.id}`;
  let valid = false;
  for (let i = 0; i < NEW_DATA.length; i++) {
    console.log(NEW_DATA[i].id);
    console.log(id);
    if (id == NEW_DATA[i].id) {
      NEW_DATA.splice(i, 1);
      valid = true;
    }
  }

  if (!valid) res.json({ message: 'Bill not found' }, 404);
  else res.json({}, 200);
};

const getBills = (req, res) => {
  var customerR = req.query.customer;
  var returnDataARRAY = [];
  for (let i = 0; i < NEW_DATA.length; i++) {
    if (customerR == NEW_DATA[i].customer) {
      returnDataARRAY.push(NEW_DATA[i]);
    }
  }
  if (returnDataARRAY == '') res.json({ message: 'Bill not found' }, 401);
  else res.json({ result: returnDataARRAY }, 200);
};

const newBiils = (req, res) => {
  var body = req.body;

  if (body.amount) res.status(405);
  if (body.produtc) res.status(405);
  if (body.paymentMethod) res.status(405);
  if (body.customer) res.status(405);

  var data = {
    id: Math.random().toString(36).substr(2, 9),
    amount: body.amount,
    produtc: body.produtc,
    paymentMethod: body.paymentMethod,
    customer: body.customer,
  };
  NEW_DATA.push(data);
  res.json({ message: 'Bill added with success', bill: data }, 200);
};

module.exports = {
  deleteBill,
  getBills,
  newBiils,
};
