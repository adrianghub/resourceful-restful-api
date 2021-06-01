import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  name: String,
  author: String,
  message: String,
  snippetUrl: String,
  tags: [String],
  selectedFile: String,
  isLiked: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;