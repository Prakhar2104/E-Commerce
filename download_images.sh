#!/bin/bash

# Create necessary directories
mkdir -p images/{products,blog,categories,icons}

# Download product images
curl -o images/products/product-1.jpg https://source.unsplash.com/800x600/?cricket-bat
curl -o images/products/product-1-thumb-1.jpg https://source.unsplash.com/200x200/?cricket-bat
curl -o images/products/product-1-thumb-2.jpg https://source.unsplash.com/200x200/?cricket-equipment
curl -o images/products/product-1-thumb-3.jpg https://source.unsplash.com/200x200/?cricket-gear
curl -o images/products/product-1-thumb-4.jpg https://source.unsplash.com/200x200/?cricket-sport

# Download blog images
curl -o images/blog/cricket-tips.jpg https://source.unsplash.com/800x400/?cricket-training
curl -o images/blog/football-training.jpg https://source.unsplash.com/400x300/?football-training
curl -o images/blog/fitness-guide.jpg https://source.unsplash.com/400x300/?fitness-workout
curl -o images/blog/sports-nutrition.jpg https://source.unsplash.com/400x300/?sports-nutrition
curl -o images/blog/recent-1.jpg https://source.unsplash.com/100x100/?cricket-bat
curl -o images/blog/recent-2.jpg https://source.unsplash.com/100x100/?football-cleats
curl -o images/blog/recent-3.jpg https://source.unsplash.com/100x100/?workout-nutrition

# Download category images
curl -o images/categories/cricket.jpg https://source.unsplash.com/400x300/?cricket
curl -o images/categories/football.jpg https://source.unsplash.com/400x300/?football
curl -o images/categories/fitness.jpg https://source.unsplash.com/400x300/?fitness
curl -o images/categories/apparel.jpg https://source.unsplash.com/400x300/?sports-apparel
curl -o images/categories/accessories.jpg https://source.unsplash.com/400x300/?sports-accessories

# Download icon images
curl -o images/icons/user-avatar.jpg https://source.unsplash.com/50x50/?person 