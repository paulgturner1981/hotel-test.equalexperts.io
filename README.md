Testing Completed
-----------------

Cross-browser/device testing:
-----------------------------
Exploratory testing was completed on the folowing browsers: Chrome (latest), Firefox (latest), Safari (latest).
As this is a single-page app with limited functionality I decided to focus my session based testing on the core functionality of the site: the input forms, the datepicker and the "Save"/"Delete" functions.

As the site does not work correctly below 992px width (defect raised separately) I decided it was not prudent to spend time testing on devices until this issue was resolved. Should that defect be resolved further device testing will then be required.

Accessibility testing:
----------------------
Manual testing of keyboard tabbing and voiceover.
Also ran an "Axe" test, an "Accessibility Insights for Web" test, and a "Lighthouse" accessibiilty test.

Security testing:
-----------------
I used OSAWP ZAP to complete a security scan. The results of the scan are attached to the project. Defects discovered have also been added to the attached defect report.

Performance testing:
-------------------
As this is a shared live site I decided it would not be sensible to run load testing against the site.
I did however run Lighthouse performance tests and have attached the results to this project.

Automated tests:
----------------
Automated tests were written using Selenium Nightwatch. There are tests which cover checking page elements, creating a booking, and deleting a booking.

Defects:
--------
All defects discovered thus far in my testing have been consolidated in the attached Defect Report. 
