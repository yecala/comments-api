import { getCommentsService, addCommentService, getCommentByIdService, updateCommentService, deleteCommentService } from '../services/commentService.js';

export const getAllCommentsController = async (req, res) => {
  try {
    const comments = await getCommentsService();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving comments', error });
  }
};

export const createCommentController = async (req, res) => {
  try {
    const newComment = await addCommentService(req.body);
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ message: 'Error creating comment', error });
  }
};


export const getCommentByIdController = async (req, res) => {
  const { id } = req.params;

  try {
    console.log("Buscando comentario con ID:", id);
    const comment = await getCommentByIdService(id);
    console.log("Resultado obtenido:", comment);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.json(comment);
  } catch (error) {
    console.error("Error getting the comment:", error);
    res.status(500).json({ error: "Error getting the comment" });
  }
};

export const updateCommentController = async (req, res) => {
  const { id } = req.params;
  const { content, rating } = req.body;

  try {
    const updated = await updateCommentService(id, content, rating);
    res.json({
      message: "Comment has been successfully updated",
      updatedComment: updated,
    });
  } catch (error) {
    console.error("Error updating the comment:", error);
    res.status(500).json({ error: "Error updating the comment" });
  }
};

export const deleteCommentController = async (req, res) => {
  const { id } = req.params;

  try {
    await deleteCommentService(id);
    res.json({ message: "The comment has been deleted successfully" });
  } catch (error) {
    console.error("Error deleting the comment:", error);
    res.status(500).json({ error: "Error deleting the comment" });
  }
};