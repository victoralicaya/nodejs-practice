const Subscriber = require('../models/subscriber')

class SubscribersController {

    async getAllSubcribers(req, res) {
        try {
            const subscribers = await Subscriber.find()
            res.json(subscribers)
          } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    async getOneSubcriber(req, res) {
        try {
            let subscriber = await Subscriber.findById(req.params.id)
            if (!subscriber) {
                return res.status(404).json({ message: 'Cannot find subscriber' })
            }
            
            return res.status(200).json(subscriber);
        } catch (err) {
            return res.status(500).json({ message: err.message })
        }
    }

    async insertSubscriber(req, res) {
        try {
            const subscriber = new Subscriber({
                name: req.body.name,
                subscribedToChannel: req.body.subscribedToChannel
            });
            
            const newSubscriber = await subscriber.save()
            res.status(201).json(newSubscriber)
        } catch (err) {
            res.status(400).json({ message: err.message })
        }
    }

    async updateSubscriber(req, res) {
        try {
            let subscriber = await Subscriber.findById(req.params.id)
            if (!subscriber) {
                return res.status(404).json({ message: 'Cannot find subscriber' })
            }

            subscriber.name = req.body.name != null ? req.body.name : 'New Subscriber';
            subscriber.subscribedToChannel = req.body.subscribedToChannel != null ? req.body.subscribedToChannel : 'I am awesome';

            const updatedSubscriber = await subscriber.save();
            res.json(updatedSubscriber);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    async deleteSubsriber(req, res) {
       try {
            let subscriber = await Subscriber.findById(req.params.id)
            if (!subscriber) {
                return res.status(404).json({ message: 'Cannot find subscriber' })
            }
            
            await subscriber.remove();
            res.json({ message: 'Deleted Subscriber' });
       } catch (err) {
            res.status(500).json({ message: err.message });
       }
    }
}

module.exports = SubscribersController