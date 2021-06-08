const title = { title: "Salva a la Tierra"},
index = (req, res) => res.render("index", title),
second = (req,res) => res.render ("second", title),
third = (req, res) => res.render("third", title);

module.exports = { index, second, third }