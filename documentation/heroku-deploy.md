# Deploying to Heroku
This app is Heroku-friendly and deploying a production app is super simple. I'll assume you have a free [Heroku](https://signup.heroku.com/dc) account and have installed the [CLI](https://devcenter.heroku.com/articles/heroku-cli).

```
$ heroku login
$ heroku create -a app-name
$ git push heroku master
```

One final step before your app is fully up and running is that you'll need to [add your environmental variables to the Heroku environment](https://devcenter.heroku.com/articles/config-vars). You can also do this through the dashboard. If you've hardcoded the app or set defaults in your config file, you can skip this step.

```
Setting a variable
$ heroku config:set ENV_VARIABLE=value

Removing a variable
$ heroku config:unset ENV_VARIABLE=value
```

Time to run your app!
```
$ heroku open
```

## Heroku Resources
- [Heroku's Dev Center](https://devcenter.heroku.com/articles/troubleshooting-node-deploys)
- [Heroku's Official Guide To Getting Started](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku's Node.js Deploy Troubleshooting](https://devcenter.heroku.com/articles/troubleshooting-node-deploys)