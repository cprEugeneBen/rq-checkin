// This is an example of how data should be stored in variables:

let data = {
    // In case we decide to redo this whole thing at some point
    version: 1.0,
    // All the metadata about this ticket
    ticketInfo: {
        customer: {
            name: "",
            contact: {
                method: "",
                number: ""
            },
            methods: [
                "(541)555-5555",
                "(808)888-8888",
                "fix@cpr.com"
                // All the differnt contact options, pulled from RQ
            ]
        },
        ticket: {
            // No ticket number because that isn't often available until
            // the ticket is saved
            estimate: "$329.99",
            due: "1/1/24 - 1:00"
        },
        technician: {
            name: "Ben Wyborney",
            number: "(541) 914-1230",
            email: "repairs@cpr-eugene.com"
        },
        device: {
            model: "Samsung Galaxy S22 Ultra",
            serial: "45648461564861685"
        },
        notes: "Screen replacement - the glass is cracked."
            // The initial diagnostic notes from the ticket
    },
    // Everyting to be included in column A. These will essentially be labels
    // for each component that is getting tested. They will be stored here 
    // instead of being hard-coded into the page in order to make it easier to
    // implement custom options here.
    columnA: {
        values: [
            "Front cracked?",
            "Battery health?",
            "Biometric scanner"
        ]
    },
    // The results of those tests:
    columnB: {
        // The format is being defined here, again to allow for custom options
        // down the road. There will be a check for keywords like "percent"
        // to determine if different logic applies to each row. Otherwise, what
        // will end up on the printed page is a concatenation of these arrays
        // along with unicode characters for checked and unchecked boxes
        format: [
            ["Yes", "No"],
            ["percent"], // the other keyword would be "amps"
            ["Pass", "Fail", "Not testable"]
        ],
        // These values determine where to place the checked boxes
        values: [
            0, 
            "85",
            1
        ]
        // In this case, the outputs would be the following:
            // "\u2611 Yes \u2610 No "
            // 85%
            // "\u2610 Pass \u2611 Fail \u2610 Not testable"
        // There will be a default value of 999 for each of these.
            // This is to prevent submitting before filling everything out.
    },
    // This column contains the values for repairs we will perform. It works
    // the same way as columnB
    columnC: {
        format: [
            ["Screen replacement"],
            ["OEM", "AFM LCD", "AFM OLED"],
            ["Other"]
        ],
        // These values will do different things depending on keywords in the
        // above formats, as well as the lengths of the above arrays.
        // For example, the first row is one value long, so it will look for a
        // 0 or a 1 to represent checked or unchecked. The second one will look
        // for where to place the checkmark. The third one sees the "Other" 
        // keyword and looks for a string to append. It will still look for a
        // checkmark below in the values, and the text will be in the second
        // value in the array
        values:  [
            [0],
            [1, 0, 0],
            [1, '']
        ]
    }
}


// Here's the default, non-filled version:
let defaultData = {
    version: 1.0,
    ticketInfo: {
        customer: {
            name: "",
            contact: "",
            methods: [
                ""
            ]
        },
        ticket: {
            number: "",
            estimate: "",
            due: ""
        },
        technician: {
            name: "",
            number: "",
            email: ""
        },
        device: {
            model: "",
            serial: ""
        },
        notes: ""
    },
    columnA: {
        values: [
            ""
        ]
    },
    columnB: {
        format: [
            [""]
        ],
        values: [
            999
        ]
    },
    columnC: {
        format: [
            [""]
        ],
        values:  [
            999 
        ]
    }
}