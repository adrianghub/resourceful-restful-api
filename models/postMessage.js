import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  craetor: String,
  tags: [tags],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0
  },
  craetedAt: {
    type: Date,
    default: newDate()
  }
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;