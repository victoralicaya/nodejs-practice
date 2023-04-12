const express = require('express')
const router = express.Router()
const SubscriberController = require('../controllers/subscriberController');

const getSubsController = new SubscriberController();

// Getting all
router.get('/', async (req, res) => {
  getSubsController.getAllSubcribers(req, res);
})

// Getting One
router.get('/:id', (req, res) => {
  getSubsController.getOneSubcriber(req, res);
})

// Creating one
router.post('/', async (req, res) => {
  getSubsController.insertSubscriber(req, res);
})

// Updating One
router.patch('/:id', async (req, res) => {
  getSubsController.updateSubscriber(req, res);
})

// Deleting One
router.delete('/:id', async (req, res) => {
  getSubsController.deleteSubsriber(req, res);
})

// async function getSubscriber(req, res, next) {
//   let subscriber
//   try {
//     subscriber = await Subscriber.findById(req.params.id)
//     if (subscriber == null) {
//       return res.status(404).json({ message: 'Cannot find subscriber' })
//     }
//   } catch (err) {
//     return res.status(500).json({ message: err.message })
//   }

//   res.subscriber = subscriber
//   next()
// }

module.exports = router