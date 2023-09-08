import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Anuj Verma',
    email: 'anuj@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Avni Goel',
    email: 'avni@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Bagga Singh',
    email: 'bagga@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
