import express from 'express';
import { 
    getAllCommentsController, 
    createCommentController,
    getCommentByIdController,
    updateCommentController,
    deleteCommentController, 
} from '../controllers/commentController.js';

const router = express.Router();

router.get('/', getAllCommentsController);
router.post('/', createCommentController);
router.get("/:id", getCommentByIdController);
router.put("/:id", updateCommentController);
router.delete("/:id", deleteCommentController);

export default router;
