class NewsController {
  index(req, res) {
    res.render('news');
  }

  show(req, res, slug) {}
}

module.exports = new NewsController();
