
const addClickEvent = (id, hideID, hideID2, hideID3, hideID4, profile) => {
    document.getElementById(id).style.display = 'block';
    document.getElementById(hideID).style.display = 'none';
    document.getElementById(hideID2).style.display = 'none';
    document.getElementById(hideID3).style.display = 'none';
    document.getElementById(hideID4).style.display = 'none';
    document.getElementById(profile).style.display = 'none';
}

// bg color show func
const showColor = (id, hideID, hideID2, hideID3, hideID4, profile) => {
    Object.assign(document.getElementById(id).style, {
        backgroundColor: '#60a5fa',
        color: 'white',
        borderRadius: '8px'
    });

    Object.assign(document.getElementById(hideID).style, {
        backgroundColor: '#F3F4F6',
        color: 'black',
        borderRadius: '0px'
    })
    Object.assign(document.getElementById(hideID2).style, {
        backgroundColor: '#F3F4F6',
        color: 'black',
        borderRadius: '0px'
    })
    Object.assign(document.getElementById(hideID3).style, {
        backgroundColor: '#F3F4F6',
        color: 'black',
        borderRadius: '0px'
    })
    Object.assign(document.getElementById(hideID4).style, {
        backgroundColor: '#F3F4F6',
        color: 'black',
        borderRadius: '0px'
    })
    Object.assign(document.getElementById(profile).style, {
        backgroundColor: '#F3F4F6',
        color: 'black',
        borderRadius: '0px'
    })


}

document.getElementById('dashboardBtn').addEventListener('click', () => {
    addClickEvent('dashboard', 'searchItem' ,'chatboxItem', 'orderItem', 'wishtItem' , 'profileItem');
    showColor('dashboardBtn', 'searchBtn', 'chatBtn','orderBtn', 'wishBtn', 'profileBtn')
})

document.getElementById('searchBtn').addEventListener('click', () => {
    addClickEvent('searchItem', 'dashboard' , 'chatboxItem', 'orderItem', 'wishtItem', 'profileItem');
    showColor('searchBtn', 'dashboardBtn', 'chatBtn','orderBtn', 'wishBtn', 'profileBtn')
})

document.getElementById('chatBtn').addEventListener('click', () => {
    addClickEvent('chatboxItem', 'searchItem' ,'dashboard', 'orderItem', 'wishtItem', 'profileItem');
    showColor('chatBtn', 'dashboardBtn', 'searchBtn','orderBtn', 'wishBtn', 'profileBtn')
})

document.getElementById('orderBtn').addEventListener('click', () => {
    addClickEvent('orderItem', 'searchItem' ,'dashboard', 'chatboxItem', 'wishtItem', 'profileItem');
    showColor('orderBtn', 'dashboardBtn', 'searchBtn', 'chatBtn', 'wishBtn', 'profileBtn')
})

document.getElementById('wishBtn').addEventListener('click', () => {
    addClickEvent('wishtItem', 'searchItem' ,'dashboard', 'chatboxItem','orderItem', 'profileItem');
    showColor('wishBtn', 'dashboardBtn', 'searchBtn', 'chatBtn', 'orderBtn', 'profileBtn')
})
document.getElementById('profileBtn').addEventListener('click', () => {
    addClickEvent('profileItem', 'searchItem' ,'dashboard', 'chatboxItem','orderItem', 'wishtItem');
    showColor('dashboardBtn', 'dashboardBtn', 'searchBtn', 'chatBtn', 'orderBtn', 'wishBtn')
})