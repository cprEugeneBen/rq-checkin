function getDeviceData() {
    
    let deviceInfo = {
        model: '',
        serial: '',
        quote: '',
        notes: ''
    };
    
    // Identify the div containing device info using the unique 'device-row'
    // class, then narrow it down to its children
    let deviceBox = document.getElementsByClassName('device-row')[0].children;
    
    // Go and pull the device information from the correct boxes
    deviceInfo.model = deviceBox[1].innerText;
    deviceInfo.serial = deviceBox[3].children[0].value;
    
    // Get the price quote using the unique 'remaining-balance' class
    deviceInfo.quote = document.getElementsByClassName('remaining-balance')[0].innerText;

    // Get the intake notes
    deviceInfo.notes = document
        .getElementById('ytTicketForm_ticketDevices_0_problem_description_ifr')
        .contentWindow.document.getElementById('tinymce')
        .children[0].innerText;

    return deviceInfo;
}



