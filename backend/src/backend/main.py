from fastapi import FastAPI,HTTPException
import feedparser
import httpx
import ipaddress
import urllib
import socket

app = FastAPI()

@app.get("/health")
def read_item():
    return {"status": "healthy"}

def isFeedUrlSafe(url: str) -> bool:
    try:
        parsedUrl = urllib.parse.urlsplit(url)
        if parsedUrl.scheme not in ["http", "https"] or not parsedUrl.hostname:
            return False
        
        parsedIp = socket.gethostbyname(parsedUrl.hostname)
        if ipaddress.ip_address(parsedIp).is_global:
            return True
        else:
            return False
        
    except:
        return False

@app.post("/api/feeds/preview")
def read_item(url: str):
    if not isFeedUrlSafe(url=url):
        raise HTTPException(status_code=400)
    
    feedResponse = httpx.get(url=url, timeout=7)
    feedResponse.raise_for_status()
    
    feedJson = feedparser.parse(feedResponse.content)
    return feedJson