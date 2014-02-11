from flask import Flask, flash, redirect, render_template, request, make_response, url_for, session, escape
import os
import socket

#initialization
app = Flask(__name__)
app.debug = True

#controllers
@app.route('/')
def index():
  return 'pls respond'
        
# set the secret key.  keep this really secret:
app.secret_key = 'A0Zr98j/3yX R~XHH!jmN]LWX/,?RT'
#os.urandom(24) number digits I think

#launch
if __name__ == '__main__':
  app.run()
  
  
      
