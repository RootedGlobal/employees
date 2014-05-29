#Installing a Pysaunter Environment

>This can be kind of a bitch. Hopefully this helps.

Pysaunter is an opinionated testing framework which allows us to
take a modular approach to automated testing. Great, let's get set up.

##Handy links

https://pypi.python.org/pypi/pip

http://virtualenvwrapper.readthedocs.org/en/latest/

##Python Distribution tools

If you haven't already, we'll need to install python, and pip.

###Install python 2. 7 distribution

    curl http://python-distribute.org/distribute_setup.py | sudo python

###Install pip
pip is the package manager for python.

    curl https://raw.github.com/pypa/pip/master/contrib/get-pip.py | sudo python
##Virtual Environment
Python and the the dependencies we include are very sensitive
to what version of python is being used. To minimize headaches
while developing it is necessary to create virtual environments to work
from.

We will install __virtualenv__, and it's helper extension __virtualenvwrapper__

    sudo pip install virtualenv
    sudo pip install virtualenvwrapper

###Add the following to your .bash_profile

    export WORKON_HOME=~/envs
    mkdir -p $WORKON_HOME
    source /usr/local/bin/virtualenvwrapper.sh


To ensure $WORKON_HOME was set:

    echo $WORKON_HOME
    **should see something like**
    /Users/[user]/envs

Ensure files were written:

    ls $WORKON_HOME
    **should see something like**

    get_env_details		postdeactivate		postrmvirtualenv
    premkproject		testenv    initialize		postmkproject
    preactivate		premkvirtualenv  postactivate		postmkvirtualenv
    predeactivate		prermvirtualenv



###Test virtualenvwrapper setup (optional)
To test virtualenv and virtualenvwrapper were installed correctly type:

    mkvirtualenv testenv

If that works, you’ll see more files created, and the name (testenv) is at the beginning of your prompt.

    which python

Should return the location of your virtual environments Python binary.

    deactivate

  Will end the session. To re-open the environment type:

    workon testenv


#Install requirements

Download the assets/requirements.txt somewhere handy on your machine, start
a virtual environment and run:

    sudo pip install -r requirements.txt

This will give us all kinds of goodies like py.saunter, and ipython, and selenium.
We can pip install this to our virtual environment, or to local python.

Great, we have pysaunter and it's requirements available. We should "hopefully"
only have to do this once per machine.
