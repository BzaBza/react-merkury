import { combineReducers } from 'redux';

import activityData from  './activityData';
import messageData from  './messageData';
import tasksData from  './tasksData';

export default combineReducers({
    tasksData,
    messageData,
    activityData
});

