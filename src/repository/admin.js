const model = require("../models/auth");
const blogModel = require("../models/blog");

exports.addBlog = async(payload) => {
    return blogModel.create(payload);
}

exports.updateBlog = async(id,payload) => {
    return blogModel.updateOne({_id: id},payload);
}

exports.deleteBlog = async(id) => {
    return blogModel.deleteOne({_id: id});
}

exports.getAllBlogs = async (pageNumber, pageSize) => {
    return blogModel.find().skip((pageNumber - 1 ) * pageSize).limit(pageSize);
}

exports.getBlogById = async (id) => {
    return blogModel.findById({_id: id});
}