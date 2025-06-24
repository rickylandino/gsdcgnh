export function performSend(postdata) {
    const apiEndpoint = '/api/sendEmail';
  
    return fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(postdata),
    })
      .then((res) => res.json())
      .then((response) => response)
      .catch((err) => err);
  }

  export function buildHtmlMessage(email, name, phone, subject, message) {
    var buildHtml = 
        <div>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phone}</p>
            <p><strong>Subject:</strong> {subject}</p>
            <p><strong>Message:</strong> {message}</p>
        </div>
    return (
        `${buildHtml}`
    );
  }

  export function buildTextMessage(email, name, phone, subject, message) {
    return (
        `\n
        Name: ${name}\n
        Email: ${email}\n
        Phone: ${phone}\n
        Subject: ${subject}\n
        Message: ${message}`
    );
  }