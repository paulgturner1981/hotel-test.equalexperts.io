Testing of hotel-test.equalexperts.io
-------------------------------------

Description:
-----------
This project includes details of the testing completed thus far of the www.hotel-test.equalexperts.io website. This README contains a breakdown of all of the testing that has been completed. It has been split out into the various types of testing performed. All necessary reports have been added to the project.


Testing Completed so far:
------------------------

Cross-browser/device testing
-----------------------------
Exploratory testing was completed on the folowing browsers: Chrome (latest), Firefox (latest), Safari (latest).
As this is a single-page app with limited functionality I decided to focus my session-based testing on the core functionality of the site: the input forms, the datepicker and the "Save"/"Delete" functions.

All defects discovered during this testing were raised in the attached defect report.

As the site does not work correctly below 992px width (defect raised separately) I decided it was not prudent to spend time testing on devices until this issue was resolved. Should that defect be resolved further device testing will then be required.

Automated tests
----------------
During my manual testing I did not raise any defects specific to a single browser. As such I felt that cross-browser automated testing in this particular use-case was not high priority. This led me to choose Cypress over Nightwatch to write my tests. There is one happy path test at the moment which creates a booking, checks it has been created, and then deletes that booking. Initially I had split this out into two separate tests, but as the data on the site is constantly changing (as others use it), I felt running both tests synchronously would provide a less brittle test as it would reduce the chance of someone deleting my booking.

I have also added two tests to check it is not possible to add invalid bookings. One of them checks you cannot submit booking with dates in the past. The other checks you cannot submit a booking with a check-out date before the check-in date. At present both of these tests fail as there are open defects for both of these issues.

In order to run the tests please ensure you have Cypress installed and clone the repo.

Accessibility testing
----------------------
I also completed manual testing of keyboard-tabbing and voiceover functionality. I then ran an "Axe" test, an "Accessibility Insights for Web" test, and a "Lighthouse" accessibiilty test. The defects foind as a result of this testing are included in the defect report.

API testing
-----------
I also used Postman to test API calls to create and delete bookings. I was able to successfully add bookings to the site, but when I tried to delete bookings via a DELETE I got a 403 forbidden. I have attached the Postman collection to the project.

Security testing
-----------------
I used OSAWP ZAP to complete a security scan. The results of the scan are attached to the project (Zaproxy_report.xml). The defects discovered have also been added to the attached defect report.

Performance testing
-------------------
As this is a shared live site I decided it would not be sensible to run load testing against the site. As I do not have an NFRs I was also not realy in a position to know what load the site should be able to cope with. I did however run Lighthouse performance tests and have attached those results to this project.

Defects
--------
All defects discovered thus far in my testing have been consolidated in the attached Defect Report.
