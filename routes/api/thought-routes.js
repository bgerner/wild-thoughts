const router = require('express').Router();
const { getAllThought, getThoughtById, addThought, updateThought, removeThought, addReaction, removeReaction } = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThought)

router
    .route('/:id')
    .get(getThoughtById)

router
    .route('/:userId')
    .post(addThought)

router
    .route('/:thoughtId/reactions')
    .put(addReaction)

router
    .route('/:userId/:thoughtId')
    .put(updateThought)
    .delete(removeThought)

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction)


module.exports = router;