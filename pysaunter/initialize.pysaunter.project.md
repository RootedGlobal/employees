#Initialize a Pysaunter Project


Create a directory for you project.

    mkdir [your project]
    cd [your project]

Pysaunter can initialize a framework for itself by
running `pysaunter --new` however, for our purposes it's quicker and
more consistent to use our starter project.

### clone starter project

    git clone https://github.com/DamienBell/pysaunterstarter.git

##Create and edit saunter.ini file
It should create a list of directories and files to get us started.
Open the `conf` directory duplicate `saunter.ini.default` to `saunter.ini`.
**Note** it is generally good practice to not commit this file.
The starter project already ignores it.

The `saunter.ini` has some basic config we'll need to change.
The most important is our __base_url__.

Below are the changes we'll use for this example. We're changing our
default browser to chrome, and defining a path to the chrome driver.
A copy of the chrome driver is included in the assets directory.
Or if you have a copy in bin, then define the chromedriver path
to that location.

    # The browser for this run. If running a mix of both RC and WebDriver, use the RC format
    # of *browser. If just using WebDriver the * can be skipped
    browser: chrome

    # The first URL that is going to be opened in the browser
     base_url: http://mydevsite.local

    # To drive the chrome browser with WebDriver you need the external chromedriver. And Saunter needs
    # to know where to find it.
     chromedriver_path: .

     # The timeout that the server will use when trying to
     do things like page loads. In seconds.
     timeout: 30

##Create a Virtual Environment

  Create a new virtual environment

    mkvirtualenv testenv1

  Use an existing virtual environment

    workon testenv1

Our terminal prompt should now be preceded by the name of the
virtual environment we're working in.
##Install requirements

If we just created virtual environment, then we need to ensure that our
environment has all of the libraries we'll need. A copy of requirements.txt is included in the assets directory.
Copy it to the automation directory and run:

    pip install -r requirements.txt


#Configuring pytest.ini


It is not absolutely nessesary to edit this file, but it is good
to understand what it does and how to configure it.

`pytest.ini`

    [pytest]
    python_files=*.py
    python_classes=Check
    python_functions=test

  This file tells pysaunter which classes and functions are tests.
  Classes with the prefix 'Check' will be included, and of those
  classes each function prefixed with 'test' will be run.
  For now we'll just leave this file as is.


##Start Selenium Server

If a selenium server is already running on your machine, then you
don't need to start another one. Otherwise run the selenium server
included in the starter project.

    java -jar server/selenium-server-standalone-2.41.0.jar
#Run intial test

Our starter kit includes a test that simply opens our browser
to our default url and then closes the test. Let's run it.

    pysaunter -m scratch

What we just told pysaunter to do was to run all tests marked "scratch".

We should see some magic browser action, followed my terminal output
that looks like so:

    =============================================== test session starts ===============================================
    platform darwin -- Python 2.7.5 -- pytest-2.3.5
    plugins: marks, xdist
    collected 2 items

    scripts/Scratch.py .

    ----- generated xml file: /Users/damiensbell/automation_base/logs/2014-05-29-10-49-16/2014-05-29-10-49-16.xml -----
    ====================================== 1 tests deselected by "-m 'scratch'" =======================================
    ===================================== 1 passed, 1 deselected in 14.66 seconds =====================================


That's it! We're ready to write some tests.
