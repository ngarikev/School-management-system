const Activity = require('../models/activityModel')

//fetching activities data from databased
exports.getActivies = async(req, res) => {
  try {
    const activity = await Activity.getAllActivities()
    if(!activity.length){
      return res.status(404).json({message: "No activity found"})
    }
    return res.status(200).json(activity)
  } catch (error) {
    console.error('Error fetching activities:', error.message);
    res.status(500).json({ message: 'An unexpected error occurred', error });
  }
}