const Course = require('../models/Course')
const {singleMongoose} = require('../../utils/mongoose')
const { redirect } = require('express/lib/response')

class CourseController {
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then(course => res.render('course/show', {course: singleMongoose(course)}))
      .catch(next)
  }

  create(req, res, next) {
    return res.render('course/create')
  }

  store(req, res, next) {
    req.body.image = `https://i.ytimg.com/vi_webp/${req.body.videoId}/maxresdefault.webp`
    const course = new Course(req.body)

    course
      .save()
      .then(() => res.redirect('/me/stored/courses'))
      .catch(err => {})
  }

  edit(req, res, next) {
    Course.findById(req.params.id)
      .then(course => res.render('course/edit', {
        course: singleMongoose(course)
      }))
      .catch(next)
  }

  update(req, res, next) {
    Course.updateOne({_id: req.params.id}, req.body)
      .then(()=> res.redirect('/me/stored/courses'))
      .catch(next)
  }

  destroy(req, res, next) {
    Course.delete({_id: req.params.id})
      .then(() => res.redirect('back'))
      .catch(next)
  }

  forceDestroy(req, res, next) {
    Course.deleteOne({_id: req.params.id})
      .then(() => res.redirect('back'))
      .catch(next)
  }

  restore(req, res, next) {
    Course.restore({_id: req.params.id})
      .then(() => res.redirect('back'))
      .catch(next)
  }
}

module.exports = new CourseController();
