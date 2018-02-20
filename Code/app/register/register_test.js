describe('TroveSpace Signup', function() {
    it('should successfully sign up', function() {
        browser.get('http://127.0.0.1:60788/#!/register');

        element.all(by.model('username')).sendKeys('test0');
        element.all(by.model('email')).sendKeys('blahblahblah4@test.com');
        element.all(by.model('password')).sendKeys('blahblahblah');
        element.all(by.model('confirmPassword')).sendKeys('blahblahblah');

        element(by.name('register')).click();
        browser.sleep(1000);
        expect(element(by.name('errorMessage')).getText()).toEqual("Verification email sent");
        element(by.name('confirm')).click();

    });

    it('should deny email already exists', function() {
        browser.get('http://127.0.0.1:60788/#!/register');

        element.all(by.model('username')).sendKeys('test1');
        element.all(by.model('email')).sendKeys('blahblahblah4@test.com');
        element.all(by.model('password')).sendKeys('blahblahblah');
        element.all(by.model('confirmPassword')).sendKeys('blahblahblah');

        element(by.name('register')).click();

        browser.sleep(2000);
        expect(element(by.name('errorMessage')).getText()).toEqual("User already exists.");
        element(by.name('confirm')).click();
    });

    it('should deny invalid email', function() {
        browser.get('http://127.0.0.1:60788/#!/register');

        element.all(by.model('username')).sendKeys('test2');
        element.all(by.model('email')).sendKeys('hello');
        element.all(by.model('password')).sendKeys('blahblahblah');
        element.all(by.model('confirmPassword')).sendKeys('blahblahblah');

        element(by.name('register')).click();

        browser.sleep(2000);
        //expect(element(by.name('errorMessage')).getText()).toEqual("Looks like you didn't enter a valid email. Please enter an email as your username.");
        //element(by.name('confirm')).click();
    });

    it('should deny too short email', function() {
        browser.get('http://127.0.0.1:60788/#!/register');

        element.all(by.model('username')).sendKeys('test3');
        element.all(by.model('email')).sendKeys('@.');
        element.all(by.model('password')).sendKeys('blahblahblah');
        element.all(by.model('confirmPassword')).sendKeys('blahblahblah');

        element(by.name('register')).click();

        browser.sleep(2000);
        //expect(element(by.name('errorMessage')).getText()).toEqual("Please enter a username that is between 3 and 254 characters.");
        //element(by.name('confirm')).click();
    });

    it('should deny too short password', function() {
        browser.get('http://127.0.0.1:60788/#!/register');

        element.all(by.model('username')).sendKeys('test5');
        element.all(by.model('email')).sendKeys('blahblahblah4@test.com');
        element.all(by.model('password')).sendKeys('1234567');
        element.all(by.model('confirmPassword')).sendKeys('1234567');

        element(by.name('signup')).click();

        browser.sleep(2000);
        expect(element(by.name('errorMessage')).getText()).toEqual("Password should be at least 6 characters");
        element(by.name('register')).click();
    });

    it('should deny passwords do not match', function() {
        browser.get('http://127.0.0.1:60788/#!/register');

        element.all(by.model('username')).sendKeys('test7');
        element.all(by.model('email')).sendKeys('blahblahblah4@test.com');
        element.all(by.model('password')).sendKeys('blahblahblah');
        element.all(by.model('confirmPassword')).sendKeys('blagblagblag');

        element(by.name('register')).click();

        browser.sleep(2000);
        expect(element(by.name('errorMessage')).getText()).toEqual("Passwords do not match.");
        element(by.name('confirm')).click();
    });

});
