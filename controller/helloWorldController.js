const helloWorldController = (req, res) => {
    const items = [
        { name: 'Hello World!!' },
        { name: 'Seja bem vindo!!' },
        { name: 'teste' },
      ];
      res.render('index', {items});
};

module.exports = {
  helloWorldController,
};