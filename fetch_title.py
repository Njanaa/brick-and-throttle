import urllib.request
import json
url = "https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=U2hkSEloJIo&format=json"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as response:
        data = json.loads(response.read())
        print("Title:", data.get('title'))
except Exception as e:
    print("Error:", e)
