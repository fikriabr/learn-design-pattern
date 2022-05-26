/**
 * Builder
 * ----------------------------------------------------------------
 */
class Email {
    constructor({
        mailSubject,
        mailBody,
        mailFrom,
        mailTo = [],
        mailCC = [],
        mailBCC = [],
        mailAttachments = [],
    } = {}) {
        this.mailSubject = mailSubject;
        this.mailBody = mailBody;
        this.mailFrom = mailFrom;
        this.mailTo = mailTo;
        this.mailCC = mailCC;
        this.mailBCC = mailBCC;
        this.mailAttachments = mailAttachments;
    }

    toString() {
        console.log('mailSubject :', this.mailSubject);
        console.log('mailBody :', this.mailBody);
        console.log('mailFrom :', this.mailFrom);
        console.log('mailTo :', this.mailTo.join(', '));
        console.log('mailCC :', this.mailCC.join(', '));
        console.log('mailBCC :', this.mailBCC.join(', '));
        console.log('mailAttachments :', this.mailAttachments.join(', '));
    }

    static Builder = class {
        constructor() {
            this.mailSubject = '';
            this.mailBody = '';
            this.mailFrom = '';
            this.mailTo = [];
            this.mailCC = [];
            this.mailBCC = [];
            this.mailAttachments = [];
        }
        setSubject(mailSubject) {
            this.mailSubject = mailSubject;
            return this;
        }
        setBody(mailBody) {
            this.mailBody = mailBody;
            return this;
        }
        setFrom(mailFrom) {
            this.mailFrom = mailFrom;
            return this;
        }
        setMailTo(...mailTo) {
            this.mailTo.push.apply(this.mailTo, mailTo);
            return this;
        }
        setMailCC(...mailCC) {
            this.mailCC.push.apply(this.mailCC, mailCC);
            return this;
        }
        setMailBCC(...mailBCC) {
            this.mailBCC.push.apply(this.mailBCC, mailBCC);
            return this;
        }
        setAttachments(...mailAttachments) {
            this.mailAttachments.push.apply(this.mailAttachments, mailAttachments);
            return this;
        }
        build() {
            return new Email({
                mailSubject: this.mailSubject,
                mailBody: this.mailBody,
                mailFrom: this.mailFrom,
                mailTo: this.mailTo,
                mailCC: this.mailCC,
                mailBCC: this.mailBCC,
                mailAttachments: this.mailAttachments,
            });
        }
    };
}

const email = new Email.Builder()
    .setSubject('Test Email')
    .setBody('Body Email')
    .setFrom('mailfrom@mail.id')
    .setMailTo('aaaTo@mail.com', 'testTo@mail.com')
    .setMailTo('bbbTo@mail.com')
    .setMailCC('aaaCC@mail.com', 'testCC@mail.com')
    .setMailBCC('aaaBCC@mail.com')
    .setMailBCC('bbbBCC@mail.com')
    .setAttachments('picture.jpg', 'file.doc')
    .build();

email.toString();

/**
 * Output
 * ----------------------------------------------------------------
 * mailSubject : Test Email
 * mailBody : Body Email
 * mailFrom : mailfrom@mail.id
 * mailTo : aaaTo@mail.com, testTo@mail.com, bbbTo@mail.com
 * mailCC : aaaCC@mail.com, testCC@mail.com
 * mailBCC : aaaBCC@mail.com, bbbBCC@mail.com
 * mailAttachments : picture.jpg, file.doc
 * ----------------------------------------------------------------
 */
