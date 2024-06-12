var http = require('http');
var event = require('events');
var mail = require('./Mymailer');
var em = new event.EventEmitter();
var mailer = new mail.MyMail();

var RegisterEmail = function (receiver_email) {
    mailer.send(receiver_email, 'welcome email', 'it is welcome message');
};
var ProductEmail = function (receiver_email) {
    mailer.send(receiver_email, 'Product catalog', 'it is product catalog');
};
var TermsAndCondition = function (receiver_email) {
    mailer.send(receiver_email, 'Terms & condition', 'it is terms & condition');
};

// Define the time range
var startHour = 20; // 8 PM
var endHour = 0; // 12 AM

// Function to check the current hour and manage listeners
function manageListeners() {
    var currentHour = new Date().getHours();

    if (currentHour >= startHour || currentHour < endHour) {
        // Between 8 PM and 12 AM, remove listeners
        em.removeListener('register', RegisterEmail);
        em.removeListener('register', ProductEmail);
        em.removeListener('register', TermsAndCondition);
    } else {
        // Outside of 8 PM to 12 AM, add listeners
        if (!em.listeners('register').includes(RegisterEmail)) {
            em.on('register', RegisterEmail);
        }
        if (!em.listeners('register').includes(ProductEmail)) {
            em.addListener('register', ProductEmail);
        }
        if (!em.listeners('register').includes(TermsAndCondition)) {
            em.on('register', TermsAndCondition);
        }
    }
}

// Initial call to manage listeners based on current time
manageListeners();

// Create server
var server = http.createServer(function(request, response) {
    var url = request.url;
    if (url === '/register') {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write('registration successful');
        response.end();

        // Re-check time and manage listeners just before emitting the event
        manageListeners();
        em.emit('register', 'hensi@gmail.com');
    }
});

server.listen(5000);
console.log('ready to accept request');
