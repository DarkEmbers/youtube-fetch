# Use official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install deps
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port
EXPOSE 3000

# Build the app
RUN npm run build

# Start the app
CMD ["npm", "start"]
