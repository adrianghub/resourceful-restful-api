import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error })
  }
}

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);

  
  try {
    await newPost.save();

    res.status(201).json(newPost); 
  } catch (error) {
    res.status(409).json({ message: error });
  }
}

export const updatePost = async (req, res) => {
  const { id } = req.params; 
  const { title, author, message, snippetUrl, tags, selectedFile } = req.body;

  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`Id: ${id} not maching any post`);

  const updatedPost = { title, author, message, snippetUrl, tags, selectedFile, _id: id }

  await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

  res.json(updatedPost);
}

export const deletePost = async (req, res) => {
  const { id } = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`Id: ${id} not maching any post`);

  await PostMessage.findByIdAndRemove(id);

  res.json({ message: 'Successfully deleted post!' });
}

export const isLiked = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`Id: ${id} not maching any post`);

  const post = await PostMessage.findById(id);
  const updatedPost = await PostMessage.findByIdAndUpdate(id, { isLiked: !post.isLiked }, { new: true });

  res.json(updatedPost);

} 