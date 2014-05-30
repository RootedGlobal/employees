# FIRST AND FOREMOST

You must put an emoji in your command line prompt to bring you joy.

Read this:

http://blog.samantharadocchia.com/post/52272246893/heres-how-customize-the-command-line-by-adding-emoji

And this:

https://gist.github.com/henrik/31631


# Set up a Developer Environment

## 1) Install Homebrew

Homebrew is a command line tool that helps you install other things!

http://brew.sh/

Open up a terminal, and paste this:

```
ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
```

During this process, it may ask you to install some XCode tools. The answer is yes. Install them.

### 2) Using Brew, install Node and NPM

Node is a tool for running Javascript apps and websites.
It comes with a helper app called NPM which installs
plugins and other helpers.

http://shapeshed.com/setting-up-nodejs-and-npm-on-mac-osx/


Type this:

```
brew install node
```

## 3) Install the Mongo Database system

We use this in a lot of projects to store data. It is easy.

```
brew install mongo
```

After the install completes, there are a few follow up commands.

```
# To have launchd start mongodb at login:
    ln -sfv /usr/local/opt/mongodb/*.plist ~/Library/LaunchAgents
# Then to load mongodb now:
    launchctl load ~/Library/LaunchAgents/homebrew.mxcl.mongodb.plist
```

## 4) Use NPM to install Grunt

Grunt is another tool that helps to do things!
It automates many tasks like managing CSS and JS files.

Type:

```
npm install -g grunt-cli
```

## 5) Install SASS

SASS is a CSS processor. It is rad, and can be used with Grunt.

*This will require you to type your password!*

```
sudo gem install sass
```

## And install a few other things while we're at it...

```
brew install graphicsmagick
brew install imagemagick
```

## 6) Apache

Ugh.

Read this and do everythign down to the part where is goes insane and talks about Cold Fusion.

http://brianflove.com/2013/10/23/os-x-mavericks-and-apache/

## 7) MySQL

We still need Mysql sometimes for Drupal and other sites. Ugh, I know.



```
brew install mysql

# To have launchd start mysql at login:
ln -sfv /usr/local/opt/mysql/*.plist ~/Library/LaunchAgents
# Then to load mysql now:
launchctl load ~/Library/LaunchAgents/homebrew.mxcl.mysql.plist

```

Once MySql is installed and running, test it:

```
 mysql -uroot
```

If you see this, you're set:
```
mysql>
```

But now you have to add a password for the root user in mysql.

```
mysqladmin -u root password '<SOME PASSWORD HERE>'

# now try to login without a password, it should fail:

mysql -uroot
# ERROR 1045 (28000): Access denied for user 'root'@'localhost' (using password: NO)

# login wiith a password, this should get you back to the mysql> prompt.
mysql -u root -p
```




# Security and Encryption

## 1) Public/Private Keys

Generate keys, or copy your key set into ~/.ssh

If you copy your keys in, add to your ssh keychain so that it will be available for use with Git.

```ssh-add -K ~/.ssh/<MY PRIVATE KEY FILE>```

## 2) Github

If you haven't already, add the public key to Github and any other services.

Key files are definitely the preferred method of authentication! Passwords are for your grandparents.
