# Administration Documentation

## Login

1. Go to the **[EmailJS Website](https://www.emailjs.com/)**
2. To sign in, click on the button in the top-right corner of the screen
3. The following tasks can be accessed once you are logged into the EmailJS account.
---

## How to Set Up new Email

1. Access the ***Email Services*** tab on the left-side of the screen.
2. This tab shows you currently-registered emails. To add a new email, click the ***Add New Service*** button. 
Then you can select an email service to register. A free EmailJS account will only allow up to 2 email services at a
time, you can upgrade this by upgrading your EmailJS subscription.
3. Give permission to EmailJS to send emails through your account. Now that your email is registered, you need to make
small changes to the code where the website is hosted, so it will properly send emails on the new account.
4. You will need to locate three strings from the website and use them to update the code. The three strings will 
replace the three strings: `serviceId`, `templateId`, and `publicKey1` in the source code's ***src/Form.js***. These strings
will be in the const Form function in the source code.
   - On the EmailJS website's ***Email Services*** tab, locate the email you set up. Type in the ***Service ID*** or click on 
the vertical ellipsis to copy the service ID. Use this string to replace the current string for the `serviceID` const 
variable in the source code.
   - On the EmailJS website's ***Email Templates*** tab, locate the template you'd like to implement. Type in the
     ***Template ID*** string or click on the vertical ellipsis to copy the Template ID. Use this string to replace the current 
string for the `templateId` const variable in the source code.
   - On the EmailJS website's ***Account*** tab, locate the email you set up. Type in the ***Public Key*** or copy the text with
your keyboard. Use this string to replace the current string for the `publicKey1` const variable in the source code.
5. Once these keys are updated, your Email service will be ready to set up! Make sure to update the Email Template to
have every field you'd like to incorporate into the email.

---

## How to Change Who Receives The Emails and CC/BCCs

1. On the **[EmailJS Website](https://www.emailjs.com/)**, access the ***Email Templates*** tab on the left-side of the
screen. 
2. Select the email template you would like to update. 
3. There will be a sidebar on the right-side of the screen. The following fields will be present:
   - **To Email:** This controls the primary email that will be receiving the emails sent by the form.
   - **From Name:** This controls the name that is on the email being sent.
   - **From Email:** This controls the email that is on the email being sent. If this template is being used on a personal
email service, changing this will NOT change anything.
   - **Reply To:** This controls the email where the replies are being sent to.
   - **Bcc:** This controls which emails are blindly forwarded the email (The receiver can't view who else was sent the email)
   - **Cc:** This controls which emails are openly forwarded the email (The receivers can view who else was sent the email excluding Bcc's)

---

## How to update the Email Template / Add a New Field to Forms

1. On the **[EmailJS Website](https://www.emailjs.com/)**, login and navigate to the ***Email Templates*** tab. 
2. You can edit a current template, or create a new template. Click on the option that you want to change/create.
3. Here, you can update the Subject bar for the email under the ***Subject*** textbox, or edit the content bar under the
   ***Content*** textbox. Format the text box as you'd like.
4. To add a new field from `Form.js`, make sure you're consistent with the `id` and `name` of the new HTML input be the 
keyword you'd like when the new field is added into Forms.js `return`. You will also need to implement the field into 
the `formData` constant. Follow the format of `KEYWORD: event.target.KEYWORD.value`. The term 'KEYWORD' is a placeholder
for whatever you'd like to name your variable.
5. To see the output of the new field in EmailJS, you need to include the `{{KEYWORD}}` anywhere in the ***Subject*** or
***Content*** textbox. Save your updates and the Email will now include this new input field.


---

## How to view History: 

1. On the **[EmailJS Website](https://www.emailjs.com/)**, access the ***Email History*** tab. 

This gives email information on the following:
- Date/time an email was created.
- Whether the email was successfully sent or not.
- Which email service was used.
- Which template was used
- Input information selected for the email (Name, message, property, urgency, etc.)

The free version of EmailJS will save this data for 30 days. To indefinitely preserve this data, a paid-version of 
EmailJS needs to be acquired.