# Create necessary directories
New-Item -ItemType Directory -Force -Path "images\products", "images\blog", "images\categories", "images\icons"

# Download product images
Invoke-WebRequest -Uri "https://picsum.photos/800/600" -OutFile "images\products\product-1.jpg"
Invoke-WebRequest -Uri "https://picsum.photos/200/200" -OutFile "images\products\product-1-thumb-1.jpg"
Invoke-WebRequest -Uri "https://picsum.photos/200/200" -OutFile "images\products\product-1-thumb-2.jpg"
Invoke-WebRequest -Uri "https://picsum.photos/200/200" -OutFile "images\products\product-1-thumb-3.jpg"
Invoke-WebRequest -Uri "https://picsum.photos/200/200" -OutFile "images\products\product-1-thumb-4.jpg"

# Download blog images
Invoke-WebRequest -Uri "https://picsum.photos/800/400" -OutFile "images\blog\cricket-tips.jpg"
Invoke-WebRequest -Uri "https://picsum.photos/400/300" -OutFile "images\blog\football-training.jpg"
Invoke-WebRequest -Uri "https://picsum.photos/400/300" -OutFile "images\blog\fitness-guide.jpg"
Invoke-WebRequest -Uri "https://picsum.photos/400/300" -OutFile "images\blog\sports-nutrition.jpg"
Invoke-WebRequest -Uri "https://picsum.photos/100/100" -OutFile "images\blog\recent-1.jpg"
Invoke-WebRequest -Uri "https://picsum.photos/100/100" -OutFile "images\blog\recent-2.jpg"
Invoke-WebRequest -Uri "https://picsum.photos/100/100" -OutFile "images\blog\recent-3.jpg"

# Download category images
Invoke-WebRequest -Uri "https://picsum.photos/400/300" -OutFile "images\categories\cricket.jpg"
Invoke-WebRequest -Uri "https://picsum.photos/400/300" -OutFile "images\categories\football.jpg"
Invoke-WebRequest -Uri "https://picsum.photos/400/300" -OutFile "images\categories\fitness.jpg"
Invoke-WebRequest -Uri "https://picsum.photos/400/300" -OutFile "images\categories\apparel.jpg"
Invoke-WebRequest -Uri "https://picsum.photos/400/300" -OutFile "images\categories\accessories.jpg"

# Download icon images
Invoke-WebRequest -Uri "https://picsum.photos/50/50" -OutFile "images\icons\user-avatar.jpg"

Write-Host "All images have been downloaded successfully!" 