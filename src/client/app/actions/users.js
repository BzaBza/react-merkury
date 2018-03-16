var mockApiData = [
    {taskName: 'New website for Symu.co', days: '5 days delays', className: 'red'},
    {taskName: 'Free business PSD Template ', days: '2 days delays', className: 'red'},
    {taskName: 'New logo for JCD.pl', days: '5 days left', className: 'gray'},
    {taskName: 'New logo for JCD.pl', days: '10 days left', className: 'gray'},
];

export const getUsersData = () => dispatch => {
    setTimeout(() => {
        dispatch({type: 'FETCH_USER_DATA_SUCCESS', payload: mockApiData})
    }, 1000)
};