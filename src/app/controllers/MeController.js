const Course = require('../models/Course')
const { redirect } = require('express/lib/response');
const { multipleMongoose } = require('../../utils/mongoose');

class MeController {
  storeCourses(req, res, next) {
    Promise.all([Course.find({}), Course.countDocumentsDeleted()])
      .then(([courses, deletedCount]) => res.render('me/stored-courses', {
          courses: multipleMongoose(courses),
          deletedCount
        })
      )
      .catch(next)
  }

  trashCourses(req, res, next) {
    Course.findDeleted({})
      .then(courses => res.render('me/trash-courses', {
        courses: multipleMongoose(courses),
      }))
      .catch(next)
  }
}

module.exports = new MeController();
