class Logger {
    constructor() {
        this.status;
    }

    ok(message) {
        this.status = '[OK] ' + message;
        console.log(this.status);
    }

    err(message) {
        this.status = '[ERR] ' + message;
        console.log(this.status);
    }

    wrn(message) {
        this.status = '[WRN] ' + message;
        console.log(this.status);
    }
}

module.exports = Logger;
