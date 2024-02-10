# Version goals
### 1.0
This will be the first fully-functional version of the extension, made for the Eugene store.
The idea is to get a working MVP which we can use with customers to see how they respond to it, and to get feedback from employees. 
It will include:
- Professional-looking customer-facing form
- A static and non-customizable form for pre-tests and repairs to be performed
- Will only work for phones
- A button added to the ticket-editing page which will generate the form
- A way to store the form inside the ticket and easily view it at any time later

### 1.x
This(these) version(versions) will focus on making changes from customer and employee feedback, as well as fixing bugs as we find them.

### 2.0 
Here, we'll focus on some more long-term implementations of certain features, and expand device compatibility by adding customizable checklists.
- Better solution for storing and accessing forms, if needed
- Options for customizing checklists 
- Different checklists for different device types

### 3.0
Adding other features:
- Alternate device labels which additional information such as contact method
- Model/manufacturer-specific information added to the bottom of a ticket. This would mostly be used for warranty and disclaimer text

# To-do:
- [x] Create a template file for the customer-facing form
- [ ] Create the input form for the pre-test checklist
    BW: I already have a working version of this, but I need to make some serious changes to it before it's ready
- [ ] Functions for pulling customer, device, ticket, and repair details
    BW: nearly done, just need to pull ticket information and customer contact information. Will need to come up with a solution for contact method. I think the intake form should just have a drop-down which includes call, text, email, customer to return, and another drop-drop down which includes primary number (pulled from RQ), alt number, email, or custom 
- [ ] Barcode generator. I'm just using a sample barcode PNG for CSS prototyping. This doesn't have to be a QR code, but it should be labelled "ticket number: 1234567"
- [ ] Create the Chrome extension. Will add a button alongside the ticket-status buttons to pull up the intake form
- [ ] Find a solution for saving the form for later viewing
    BW: since I'm hoping to avoid storing any information off-site, the obvious approach is to encode the intake information into RQ somehow. We could save a JSON object as the contents of a note or custom form. This is gonna be tricky, though
- [ ] Test with different types of ticket. Chrome extensions trigger based on URLs, and there are at least two URL variants for ticket editing. Element selectors may be different on claim tickets, too.

# Ideas:
- I want to add good/bad OLED as an option, but this will probably have to wait until customization is added, at this point. I think we can provide templates such as Pass/Fail/Can't test, Yes/No, x%, x amps. 