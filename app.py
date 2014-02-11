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
  sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
  sock.bind(('localhost', 0)) #binding to port 0 makes the OS choose an available port between 1024 and 65535
  port = sock.getsockname()[1]
  app.run()
  
  
      
