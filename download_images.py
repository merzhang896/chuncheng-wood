import os
import urllib.request

images_dir = r'C:\Users\17747\Desktop\春诚木业官网\images'
os.makedirs(images_dir, exist_ok=True)

image_urls = [
    ('factory_logs.jpg', 'https://via.placeholder.com/800x600/2d5a3d/ffffff?text=Wood+Logs'),
    ('factory_truck.jpg', 'https://via.placeholder.com/800x600/3d7a4d/ffffff?text=Truck+Loading'),
    ('factory_panorama.jpg', 'https://via.placeholder.com/800x600/4d8a5d/ffffff?text=Factory+View'),
    ('factory_forklift.jpg', 'https://via.placeholder.com/800x600/5d9a6d/ffffff?text=Forklift'),
    ('factory_cargo.jpg', 'https://via.placeholder.com/800x600/6daa7d/ffffff?text=Cargo+Truck'),
]

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

for name, url in image_urls:
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as response:
            data = response.read()
            with open(os.path.join(images_dir, name), 'wb') as f:
                f.write(data)
            size = os.path.getsize(os.path.join(images_dir, name))
            print(f'OK: {name} ({size} bytes)')
    except Exception as e:
        print(f'ERROR: {name} - {e}')

print(f'\nImages saved to: {images_dir}')