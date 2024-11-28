#!/usr/bin/python

import flask
import html
import json
import subprocess
import time
import os
from flask import send_file, request 
from datetime import datetime
from MessageAnnouncer import MessageAnnouncer
from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.executors.pool import ThreadPoolExecutor, ProcessPoolExecutor
from flask_caching import Cache

app = flask.Flask(__name__, static_url_path='/static')
app.app_context().push()
announcer = MessageAnnouncer()

executors = {
    'default': ThreadPoolExecutor(16),
    'processpool': ProcessPoolExecutor(4)
}

sched = BackgroundScheduler(timezone='Africa/Johannesburg', executors=executors)

app.config["SECRET_KEY"] = "blah"
app.config["CACHE_TYPE"] = "FileSystemCache"
app.config["CACHE_DIR"] = "cache/"
app.config["CACHE_DEFAULT_TIMEOUT"] = 30000
cache = Cache(app)

cache.set("sponsor_image_idx", 0)
cache.set("speaker_image_idx", 0)

def format_sse(data: str, event=None) -> str:
    msg = f'data: {data}\n\n'
    if event is not None:
        msg = f'event: {event}\n{msg}'
    return msg

# --- Routing ---
@app.route('/')
def index():
    return send_file('static/index.html')

@app.route('/control')
def index():
    return send_file('static/control.html')
